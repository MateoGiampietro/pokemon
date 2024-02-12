const { Pokemon } = require ("../db");
const axios = require("axios");

const getPokemons = async (req, res) => {
    
    try {
        const dbPokemons = await Pokemon.findAll();
        const apiPokemonsResponse = await axios.get("https://pokeapi.co/api/v2/pokemon");
        const apiPokemons = apiPokemonsResponse.data.results;
        const pokemons = [];
        pokemons.push(dbPokemons, apiPokemons);
        return res.status(200).json(pokemons)
    } catch (error) {
        return res.status(500).send(error.message)
    }
};

module.exports = getPokemons;