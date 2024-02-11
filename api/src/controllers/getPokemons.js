const { Pokemon } = require ("../db");

const getPokemons = async (req, res) => {
    
    try {
        const getPokemons = await Pokemon.findAll();
        getPokemons.map((pokemon) => {
            if (!pokemon.image) {
                pokemon.image = "C:\Users\giamp\Downloads\cr-pi-drivers-main\client\public\logo_default.png"
            }
        });
        return res.status(200).json(getPokemons)
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

module.exports = getPokemons;