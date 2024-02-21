import axios from "axios";

export default async function Card(props) {
    const pokemonData1 = await axios.get(`http://localhost:3001/pokemons/${props.name}`);
    const pokemonData2 = await axios.get(`http://localhost:3001/pokemons/${pokemonData1.id}`);

    return (
        <div className="card-container">
            <h2>{props[1].name}</h2>
            <h4>Escuderías: {props[1].teams}</h4>
            <img src={imageUrl} alt={props.id}/>
        </div>
    )
}