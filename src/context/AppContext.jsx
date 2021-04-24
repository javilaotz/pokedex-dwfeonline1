import { createContext } from 'react'
import { PokemonContext } from './PokemonContext'

export const AppContext = createContext()

export const AppProvider = props => {
    const { usePokemon, useGetPokemonFromUrl } = PokemonContext;
    return (
        <AppContext.Provider value={{usePokemon, useGetPokemonFromUrl}}>
            {props.children}
        </AppContext.Provider>
    )

}