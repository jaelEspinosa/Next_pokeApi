
import * as React from 'react'
import Head from "next/head"
import Navbar from '../ui/Navbar'



type Props ={
    children:React.ReactNode,
    title?:string
}

const origin = (typeof window==='undefined' ? '' : window.location.origin)


export const Layout:React.FC<Props> = ({children, title})=> {

    
  return (
    <>
    <Head>
        <title>{title || 'title' } </title>
        <meta name="author" content="JaelEspinosa"/>
        <meta name="descripcion" content={`informacion sobre el pokemon ${title}`}/>
        <meta name="keywords" content={`${title}, pokemon, pokedex`}/>

        <meta property="og:title" content={`informacion sobre el pokémon${title}`} />
        <meta property="og:description" content={`Esta es la pagina sobre${title}`} />
        <meta property="og:image" content={`${origin}/img/banner.jpg`} />
           
    </Head>
    <Navbar/>
    <div className='app-container'>
    <main style={{
        padding:'0px 20px',
        
    }}>
        {children}
    </main>
    </div>
   
    </>
  )
}
