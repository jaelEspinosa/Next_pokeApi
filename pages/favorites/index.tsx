

import { Layout } from '../../components/layouts'
import { useEffect, useState } from 'react'
import FavoritePokemon from '../../components/pokemon/FavoritePokemon';
import localFavorites from '../../utils/localFavorites'
import NoFavorites from '../../components/ui/NoFavorites'




const FavoritesPage = () => {
  const [favoritePokemons, setfavoritePokemons] = useState<number[]>([])
  

  useEffect(() => {
   setfavoritePokemons(localFavorites.pokemons())  
         
  }, [])
  

  return (

    <Layout title='Pokemons - Favoritos'>
    {favoritePokemons.length<1 ? (
      <NoFavorites />
    ):(
      <FavoritePokemon pokemons={favoritePokemons}/>
    )} 
    </Layout>
    
  )
}

export default FavoritesPage