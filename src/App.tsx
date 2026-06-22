 import { Container } from "./composants/Container"
 import { Link, Navigate } from "react-router-dom"
 import { Route } from "react-router-dom"
 import { Routes } from "react-router-dom"
 
import { useState } from "react"

import { BlogPage } from "./Pages/BlogPage"
import { PostPage } from "./Pages/PostPage"

 export default function app(){

const [cartCount, setCartCount] = useState<number>(0)

  return(
    <div className="main-h-screen bg-slate-50 text-slate-900">
    {/*Header */}
    <header className="border-b border-slate-200 bg-white">
      <Container className="container-app flex items-center justify-between gap-3 py-4 px-14">
      
        <Link to={'/'} className="font-extrabold tracking-tight">Sunu Marché</Link>
        <nav className="hidden items-center gap-4 sm:flex">
          <Link to={'/'} className="text-slate-700 hover:text-slate-900">Accueil</Link>
          <Link to={'/blog'} className="text-slate-700 hover:text-slate-900 ">Blog</Link>
        </nav>
        
        
       </Container>
    </header>
    {/*main */}
    <Routes>
      <Route path='/' element={< Navigate to='/blog' replace/>}/>
      <Route path='/blog' element={<BlogPage/>}/>
      <Route path='/blog/:id' element={<PostPage/>}/>

      
    </Routes>
    {/*main */}    

    {/*footer */}

    <footer className="border-t border-slate-200 bg-white py-6">
      <div className="container-app py-6">
        <p className="text-center text-sm text-slate-600">
          @ {new Date().getFullYear()} Sunu Marché. Tous droits réservés
        </p>
      </div>
    </footer>
    </div>
  )
 }