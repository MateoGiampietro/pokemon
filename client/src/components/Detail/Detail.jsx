import React from "react"
import { useLocation } from 'react-router-dom'

export default function Detail({ pokemons }) {
    const location = useLocation();
    const regex = /\d+/;
    const id = location.pathname.match(regex)[0];
    const pokemon = pokemons.filter((pokemon) => pokemon.id === Number(id));

    return (
        <div className='details-container'>
            <div className='details'>
                <h2>ID: {pokemon[0].id}</h2>
                <h4>Nombre: {pokemon[0].name}</h4>
                <h4>Vida: {pokemon[0].stats[0].base_stat}</h4>
                <h4>Ataque: {pokemon[0].stats[1].base_stat}</h4>
                <h4>Defensa: {pokemon[0].stats[2].base_stat}</h4>
                <h4>Velocidad: {pokemon[0].stats[5].base_stat}</h4>
                <h4>Altura: {(pokemon[0].height / 10).toFixed(1)} m</h4>
                <h4>Peso: {(pokemon[0].weight / 10).toFixed(1)} kg</h4>
                <h4>Tipo/s: {pokemon[0].types.length === 1 ?
                pokemon[0].types[0].type.name :
                `${pokemon[0].types[0].type.name}, ${pokemon[0].types[1].type.name}`}</h4>
            </div>

            <div className="photo-container">
                <img src={pokemon[0].front_default} alt={pokemon[0].id}/>
            </div>
        </div>
    )
}