import { useState, useMemo, useEffect } from "react";
import { Container } from "../composants/Container";
import { type Post } from "../types/Post";
import { Link } from "react-router-dom"; // 1. Retrait de "data"
import { useFetch } from "../hooks/useFetch";
import { Pagination } from "../composants/pagination";

export function BlogPage() {
  const { data: postsData, loading, error } = useFetch<Post[]>('https://jsonplaceholder.typicode.com/posts');

  const posts = postsData || [];
  const [query, setQuery] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const pagesize = 10;

  // 3. Correction comportementale : Remettre à la page 1 si on fait une recherche
  useEffect(() => {
    setPage(1);
  }, [query]);

  // Filtrage des articles
  const filteredPosts = useMemo(() => {
    if (!query) return posts;
    const lowerQuery = query.toLocaleLowerCase();
    return posts.filter((post) => 
      post.title.toLocaleLowerCase().includes(lowerQuery) ||
      post.body.toLocaleLowerCase().includes(lowerQuery)
    );
  }, [posts, query]);

  const totalPages = Math.ceil((filteredPosts?.length || 0) / pagesize);

  // Pagination des articles filtrés
  const paginationPosts = useMemo(() => {
    const start = (page - 1) * pagesize;
    return filteredPosts.slice(start, start + pagesize);
  }, [filteredPosts, page]);

  return (
    <main className="py-10 px-15">
      <Container>
        <div className="flex flex-wrap-reverse items-end justify-between gap-3">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight ">Blog</h1>
            <p className="mt-2 text-slate-600">Liste des articles.</p>
          </div>
          
          <div className="w-full sm:w-90">
            <label htmlFor="query" className="text-sm font-semibold text-slate-700">Recherche</label>
            <input  
              id="query" 
              className="mt-2 w-full rounded-sm border border-slate-300 bg-white px-3 py-2 outline-none focus:ring-4 focus:ring-slate-200" 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="ex: livraison, local , produits..."
              type="text" 
            />
          </div>
        </div>
        
        {loading && <p className="text-slate-600 mt-4">Chargement ...</p>}
        {error && <p className="text-red-600 mt-4">Erreur: {error}</p>}

        {!loading && !error && (
          <>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {/* Note: Pas besoin de refaire un .slice(0, 10) ici, paginationPosts est déjà découpé à la bonne taille ! */}
              {paginationPosts.map((post) => (
                // 2. Correction du lien vers la page de détails
                <Link to={`/blog/${post.id}`} key={post.id} className='rounded-lg border border-slate-200 p-4 block hover:bg-slate-50'>
                  <h2 className="text-lg font-semibold text-slate-900 first-letter:uppercase">{post.title}</h2>
                  <p className="mt-2 text-sm text-slate-600 line-clamp-3">{post.body}</p>
                </Link>
              ))}
            </div>

            {totalPages > 1 && (
              <Pagination 
                page={page} 
                totalPages={totalPages} 
                onNext={() => setPage((p) => Math.min(p + 1, totalPages))}
                onPrevius={() => setPage((p) => Math.max(1, p - 1))}
              />
            )}
          </>
        )}
      </Container>
    </main>
  );
}