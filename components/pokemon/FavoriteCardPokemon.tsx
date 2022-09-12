import { Grid, Card,Link } from '@nextui-org/react'

import React, { FC } from 'react'
import { useRouter } from 'next/router';


interface Props {
    pokemonId: number
}
const FavoriteCardPokemon: FC<Props> = ({pokemonId}) => {
  const router = useRouter()
  
const handleClick = ()=>{
    router.push(`pokemon/${pokemonId}`)
}  
  return (
    <Grid 
        onClick={handleClick}
        xs= {6} 
        sm={5} 
        md={2} 
        xl={2}
    >
            <Card
            isHoverable
            isPressable
            css={{padding: 10}}
            
            >
              
              <Card.Image 
                     src = {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
                    />
              
              </Card>
          </Grid>
  )
}

export default FavoriteCardPokemon