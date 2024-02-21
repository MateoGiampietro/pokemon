import Card from '../Card/Card';

export default function Cards({ pokemons }) {
    
    const cardComponents = pokemons.map((pokemon) => {
        return (
            <Card
                key = {pokemon.id}
                id = {pokemon.id}
                name = {pokemon.name}
                image = {pokemon.front_default}
                types = {pokemon.types}
            />
        )
    })

    return <div>{cardComponents}</div>;
};