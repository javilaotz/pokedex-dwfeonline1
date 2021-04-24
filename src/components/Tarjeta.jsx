import React, { useState, useEffect, useContext } from 'react'
import Pokemon from '../lib/api'
import { AppContext } from '../context/AppContext'
import './styles.scss'

export default function Tarjeta({pokemon}) {
  const { useGetPokemonFromUrl } = useContext(AppContext)
  const [data, fetched] = useGetPokemonFromUrl(pokemon.url) 
  
  const imgSrc = fetched && `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${data?.id}.png`
  const contenido =  (
    <div key={data.id}>
      <div className="contenedorTarjeta">
        <div className="foto"> 
          <img src={imgSrc} alt="" />
        </div>
        <div className="info">
          <div className="number">N 0001</div>
          <div className="name">{pokemon.name}</div>
          <div className="tipos">
            <div className="grass">planta</div>
            <div className="poison">veneno</div>
          </div>
        </div>
      </div>
    </div>
  )


  return contenido ;
}
