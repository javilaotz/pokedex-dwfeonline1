import React, { Component } from 'react'
import './styles.scss'

export default class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <div className="brand">Pokedex</div>
        <div>
          <ul>
            <li><a href="./index.html">Pokedex</a></li>
            <li><a href="./formulario.html">formulario</a></li>
            <li><a href="./acercade.html">acerca de</a></li>
          </ul>
        </div>
      
    </div>
    )
  }
}

