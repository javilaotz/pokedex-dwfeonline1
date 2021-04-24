import React, {useState, useEffect, useContext} from 'react'
import Tarjeta from './Tarjeta'
import { AppContext } from '../context/AppContext'

export default function Lista() {
  const {usePokemon} = useContext(AppContext)
  const [data, fetched] = usePokemon()

  const lista = data && data.length > 0 && data.map((pokemon_data) => (
    <Tarjeta pokemon={pokemon_data} />
  ))

  return (
    <div className="listContainer">
      {
        fetched ? lista : 'Cargando...'
      }
    </div>
  )
}
