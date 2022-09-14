import { Grid, Card } from '@nextui-org/react'

import React, { FC } from 'react'
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useEffect } from 'react';
import pokeApi from '../../api/pokeApi';
import { Pokemon } from '../../interfaces/pokemonFull';
import useState from 'react';



interface Props {
    pokemonId: number
}
const FavoriteCardPokemon: FC<Props> = ({pokemonId}) => {
     
    /*   const [imagenMostrar, setMostrarImagen] = useState<string>('')   */
     
      const router = useRouter()
        
      const handleClick = ()=>{
          router.push(`pokemon/${pokemonId}`)
      }  
  
      useEffect(() => {
        const obtenerImagenPoke =async () => {
        const {data} = await pokeApi.get<Pokemon>(`/pokemon/${pokemonId}`)
          console.log(data.sprites.other)
        }

      obtenerImagenPoke()
      }, [pokemonId])


      const urlPrimary = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`
      const urlSecondary = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemonId}.png`

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
              <Image
                     alt='no-foto'
                     width={250}
                     height={250}
                     src = {urlSecondary}
                    /> 
              
              </Card>
          </Grid>
  )
}

export default FavoriteCardPokemon