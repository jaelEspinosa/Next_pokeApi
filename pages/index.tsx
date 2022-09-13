import type { NextPage,GetStaticProps } from 'next'
import { Grid, Text} from '@nextui-org/react';

import { Layout } from '../components/layouts';
import pokeApi from '../api/pokeApi';
import { PokemonListResponse, SmallPokemons } from '../interfaces';
import PokemonCard from '../components/pokemon/PokemonCard';
;

interface Props {
  pokemons: SmallPokemons[];
}

const HomePage: NextPage<Props> = ({pokemons}) => {
  

  return (
   <>
   <Layout title='Listado de Pokemon'>
   <Grid.Container alignItems='center' justify='flex-start' css={{
    paddingTop: '70px'
   }}>
   <Text h1 >PokemonList</Text>
  

   </Grid.Container>
  
  
   <Grid.Container gap={2} justify='flex-start'>
  {pokemons.map(pokemon => (
    <PokemonCard key={pokemon.id} pokemon = {pokemon}/> 
  ))}

  
   </Grid.Container>
  
   </Layout>
   </>
  )
}
// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.


export const getStaticProps: GetStaticProps = async (ctx) => {
  const {data} = await pokeApi.get<PokemonListResponse>('/pokemon?limit=150')
  
  const pokemons:SmallPokemons[] = data.results.map((poke, i)=> ({
    ...poke,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i+1}.svg`,
    
  }))

  
  return {
    props: {
      pokemons 
    }
  }
}

export default HomePage
