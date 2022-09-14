import { Grid, Card } from '@nextui-org/react'

import React, { FC, useState } from 'react'
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useEffect } from 'react';
import pokeApi from '../../api/pokeApi';
import { Pokemon } from '../../interfaces/pokemonFull';




interface Props {
    pokemonId: number
}

const FavoriteCardPokemon: FC<Props> = ({pokemonId}) => {
     
      const [mostrarImagen, setMostrarImagen] = useState('')  
     
      const router = useRouter()
        
      const handleClick = ()=>{
          router.push(`pokemon/${pokemonId}`)
      }  
  
      useEffect(() => {
        const obtenerImagenPoke =async () => {
        const {data} = await pokeApi.get<Pokemon>(`/pokemon/${pokemonId}`)
          if(data.sprites.other?.dream_world.front_default){
            setMostrarImagen(data.sprites.other?.dream_world.front_default)
          
          }else{
            const url:any  = (data.sprites.other?.home.front_default)
            setMostrarImagen(url)
          }
          
        }

      obtenerImagenPoke()
      }, [pokemonId])

 

  return (
    <Grid 
        onClick={handleClick}
        xs= {6} 
        sm={5} 
        md={2} 
        xl={2}
        justify='center'
        alignContent='center'
    >
            <Card
            isHoverable
            isPressable
            css={{padding: 10}}
            
            
            >
              <Image
                     alt='no-foto'
                     width={350}
                     height={350}
                     src = {mostrarImagen}
                    /> 
              
              </Card>
          </Grid>
  )
}

export default FavoriteCardPokemon