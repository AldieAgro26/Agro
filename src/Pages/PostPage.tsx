import { useParams } from "react-router-dom";
import { Container } from "../composants/Container";
import { useFetch } from "../hooks/useFetch";
import { type Post } from "../types/Post";

export function PostPage() {

    

  const params = useParams<{ id: string }>();

  const { data, error, loading } = useFetch<Post>(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );

  if (!params.id || Number.isNaN(Number(params.id))) {
    return (
      <main className="py-10">
        <Container>
          <h1 className="text-3xl font-extrabold tracking-tight">
            Identifiant d'article invalide
          </h1>
        </Container>
      </main>
    );
  }

  return (
    <main className="py-10">
      <Container>
        {loading && <p className="text-slate-600 mt-4">Chargement ...</p>}
        {error && <p className="text-red-600 mt-4">Erreur: {error}</p>}

        {data && (
          <article className="mt-6 px-15">
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">
                Article
            </h1>
            <p className="mt-4 text-slate-700 leading-relaxed">
              {data.body} 
            </p>
          </article>
        )}
      </Container>
    </main>
  );
}