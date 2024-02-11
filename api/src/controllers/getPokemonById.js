const axios = require("axios");

const getPokemonById = async (req, res) => {

    try {
        const pokeID = req.params.id;
        const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeID}`);
        const { id, health, name, attack, defense, image, speed, height, weight } = data;
        const pokemon = { id, health, name, attack, defense, image, speed, height, weight }
        return pokemon.name
                ? res.json(character)
                : res.status(404).send("Not found")
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = getPokemonById;