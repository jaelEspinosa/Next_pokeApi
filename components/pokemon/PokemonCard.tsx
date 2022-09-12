import React, { FC } from 'react'
import { SmallPokemons } from '../../interfaces'
import {  Card, Grid,  Row,  Text } from '@nextui-org/react';
import { useRouter } from 'next/router';

interface Props {
  pokemon: SmallPokemons
}


const PokemonCard : FC<Props>  = ({pokemon}) => {
  const router = useRouter()
  const pokemonClick = ()=>{
    router.push(`/pokemon/${pokemon.id}`)
  }
  return (
    <Grid xs={6} sm={4} md={3} xl={2} key={pokemon.id}>
      <Card
          onClick={pokemonClick} 
          isHoverable 
          isPressable>
        <Card.Body css={{p:1}}>
          <Card.Image
            src={pokemon.img}
            width='100%'
            height={140}


          />          
        </Card.Body>
        <Card.Footer>
          <Row justify='space-between'>
            <Text transform='capitalize'>
            {pokemon.name}
            </Text>
            <Text>
            #{pokemon.id}
            </Text>

          </Row>
    
        </Card.Footer>
     
       
      </Card>
      
    </Grid>
  )
}

export default PokemonCard