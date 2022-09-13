import pokeApi from "../api/pokeApi"
import { Pokemon } from "../interfaces"

export const getPokemonInfo = async (nameOrId:string) => {
    const {data} = await pokeApi.get<Pokemon>(`/pokemon/${nameOrId}`)

    return  {
        id: data.id,
        sprites: data.sprites,
        name: data.name
    }
    
}