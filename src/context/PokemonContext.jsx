import { useState, useEffect } from 'react'
import Pokemon from '../lib/api'

const usePokemon = () => {
    const [data, setData] = useState([])
    const [fetched, setFetched] = useState(false)

    useEffect(() => {  
        const updateData = async () => {
          const pokemonList = await Pokemon.getPokemons()
          setData(pokemonList.results)
          setFetched(true)
        }
        !fetched && updateData()   
    }, [data, fetched])

    return [data, fetched]
}

const useGetPokemonFromUrl = url => {
    const [data, setData] = useState([])
    const [fetched, setFetched] = useState(false)

    useEffect(() => {
        const updateData = async () => {
            const result = await Pokemon.getPokemon(url)
            setData(result)
            setFetched(true)
        }
        !fetched && updateData()
    }, [data, fetched])

    return [data, fetched]
}

export const PokemonContext = {
    usePokemon: usePokemon,
    useGetPokemonFromUrl: (url) => useGetPokemonFromUrl(url)
}