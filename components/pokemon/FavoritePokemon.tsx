import { Grid,Text } from '@nextui-org/react'
import FavoriteCardPokemon from './FavoriteCardPokemon'
import React, { FC } from 'react'

interface Props {
    pokemons: number[]
}

const FavoritePokemon : FC<Props> = ({pokemons}) => {
  return (
    <>
    <Text h1>Favoritos</Text>
    <Grid.Container
      gap={2}
      css={{marginTop:'100px'}} 
      direction='row'
      justify='flex-start'
    >  
      {
        pokemons.map(id =>(
          <FavoriteCardPokemon key={id} pokemonId={id}/>
        ))
      }

    </Grid.Container>
    </>
  )
}

export default FavoritePokemon

