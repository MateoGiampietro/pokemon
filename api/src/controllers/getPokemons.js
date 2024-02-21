const { Pokemon } = require ("../db");
const axios = require("axios");

const getPokemons = async (req, res) => {
    
    try {
        const dbPokemons = await Pokemon.findAll();
        const apiPokemonsResponse = await axios.get("https://pokeapi.co/api/v2/pokemon");
        const apiPokemons = apiPokemonsResponse.data.results;
        const apiPokemonsData = await Promise.all(apiPokemons.map(async (pokemon) => {
            const response = await axios.get(`http://localhost:3001/pokemons/${pokemon.name}`);
            const pokemonData = response.data;
            const { name, stats, height, weight, id, sprites: { front_default }, types } = pokemonData;
            return { name, stats, height, weight, id, front_default, types }
        }));
        const pokemons = [...dbPokemons, ...apiPokemonsData];
        return res.status(200).json(pokemons)
    } catch (error) {
        return res.status(500).send(error.message)
    }
};

module.exports = getPokemons;