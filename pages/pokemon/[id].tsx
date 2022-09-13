/* eslint-disable react-hooks/rules-of-hooks */

import { Button, Card, Container, Grid, Text, Image } from '@nextui-org/react';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import confetti from 'canvas-confetti'

import React, { useEffect, useState } from 'react'
import pokeApi from '../../api/pokeApi';
import { Layout } from '../../components/layouts';
import { Pokemon } from '../../interfaces';
import localFavorites from '../../utils/localFavorites';
import { getPokemonInfo } from '../../utils';



interface Props{
  pokemon: Pokemon;
}

const pokemonDetail: NextPage<Props> = ({pokemon}) => {
  console.log('props...',pokemon)

const [isInFavorites, setisInFavorites] = useState(localFavorites.existInFavorites(pokemon.id))
const [textoBoton, settextoBoton] = useState('Guardar En Favoritos')
 
useEffect(() => {
  if (isInFavorites){
    settextoBoton('Eliminar Favorito')
  }else{
 
    settextoBoton('Guardar en Favoritos')
  }
  
}, [])


const onToggleFavorite = () => {
     localFavorites.toggleFavorite(pokemon.id)
     setisInFavorites(!isInFavorites)
     if (isInFavorites){
      settextoBoton('Guardar en Favoritos')
    }else{
      settextoBoton('Eliminar Favorito')
      confetti({
        zIndex:999,
        particleCount: 1000,
        spread:1000,
        angle: -100,
        origin :{
          x:1,
          y:0
        }
      })
    }
    }
    
  return (
    <Layout title={pokemon.name}>
      <Grid.Container css={{marginTop: '0px', paddingTop: '250px'}} gap={2}>
       
        <Grid xs={12} sm={4}>
          <Card isHoverable css={{padding: '30px'}}>
            <Card.Body>
            <Card.Image src={pokemon.sprites.other?.dream_world.front_default || '//No-foto.png'} height={250} width={250} alt={pokemon.name}  />
            </Card.Body>
          </Card>
        </Grid>
       <Grid xs={12} sm={8}>
        <Card>
          <Card.Header css={{display:'flex', 
                            flexWrap:'wrap',
                            justifyContent:'space-between'                                          
                            }}>
            <Text h1 transform='capitalize'>
              {pokemon.name}
            </Text>
            <Button
              onPress={()=>onToggleFavorite()}
              color={!isInFavorites ? 'gradient': 'warning'}
              ghost={!isInFavorites}
            >{textoBoton}</Button>

          </Card.Header>
          <Card.Body>
            <Text size={30}>sprites:</Text>
            <Container display='flex' direction='row' gap={0}>
              <Image 
                   src={pokemon.sprites.front_default}
                   alt={pokemon.name} 
                   width={100} 
                   height={100}/>
            
              <Image 
                   src={pokemon.sprites.back_default} 
                   alt={pokemon.name} 
                   width={100} 
                   height={100}/>
            
              <Image 
                   src={pokemon.sprites.front_shiny}
                   alt={pokemon.name}
                   width={100} height={100}/>
            
              <Image 
                   src={pokemon.sprites.back_shiny} 
                   alt={pokemon.name} 
                   width={100} height={100}/>
            </Container>
          </Card.Body>
        </Card>

       </Grid>
      </Grid.Container>
    </Layout>
  )
}

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes


export const getStaticPaths: GetStaticPaths = async (ctx) => {

  const pokemons151 =  [...Array(151)].map((value, i)=> `${i+1}`)
  console.log({pokemons151})
  return {
    paths: pokemons151.map(id => ({
      params:{ id }
    })),
      
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({params}) => {
const {id} = params as { id: string}
 const pokemon = await getPokemonInfo(id) 

 if (!pokemon) {
  return {
    redirect:{
    destination:'/',
    permanent:false
   }
  }
 }
  return {
    props: {
      pokemon
    },
    revalidate: 86400,
  }
}


export default pokemonDetail