import { useEffect } from "react";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { filterPokemonsByType, setAllPokemons, filterPokemonsByOrigin, orderPokemons, setPage } from "../../redux/actions";
import Cards from "../Cards/Cards";
import "./Home.css";

export default function Home() {
    const dispatch = useDispatch();
    const pokemons = useSelector((state) => state.pokemons);
    const currentPage = useSelector((state) => state.currentPage);
    const pokemonsPerPage = 12;

    const indexOfLastPokemon = currentPage * pokemonsPerPage;
    const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
    const currentPokemons = pokemons.slice(indexOfFirstPokemon, indexOfLastPokemon);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(pokemons.length / pokemonsPerPage); i++) {
        pageNumbers.push(i);
    }

    const handlePage = event => {
        dispatch(setPage(event.target.value));
    };

    const handleFilterType = event => {
        dispatch(filterPokemonsByType(event.target.value));
    };

    const handleFilterOrigin = event => {
        dispatch(filterPokemonsByOrigin(event.target.value));
    };

    const handleOrder = event => {
        dispatch(orderPokemons(event.target.value));
    };

    useEffect(() => {
        const fetchPokemons = async () => {
            try {
                const getPokemons = await axios.get('http://localhost:3001/pokemons');
                
                dispatch(setAllPokemons(getPokemons.data))
            } catch (error) {
                console.log(error.message);
                alert("Error al cargar los pokemons.");
            }
        }
        
        fetchPokemons();
    }, []);

    return (
        <div className='home'>
            <select name="type" onChange={handleFilterType}>
                <option value="All">Todos</option>
                <option value="normal">Normal</option>
                <option value="fighting">Lucha</option>
                <option value="flying">Volador</option>
                <option value="poison">Veneno</option>
                <option value="ground">Tierra</option>
                <option value="rock">Roca</option>
                <option value="bug">Bicho</option>
                <option value="ghost">Fantasma</option>
                <option value="steel">Acero</option>
                <option value="fire">Fuego</option>
                <option value="water">Agua</option>
                <option value="grass">Planta</option>
                <option value="electric">Electrico</option>
                <option value="psychic">Psiquico</option>
                <option value="ice">Hielo</option>
                <option value="dragon">Dragon</option>
                <option value="dark">Siniestro</option>
                <option value="fairy">Hada</option>
                <option value="unknown">Desconocido</option>
                <option value="shadow">Sombra</option>
            </select>
            <select name="type" onChange={handleFilterOrigin}>
                <option value="All">Todos</option>
                <option value="db">Base de Datos</option>
                <option value="api">API</option>
            </select>
            <select name="order" onChange={handleOrder}>
              <option value="aNombre">Ascendente alfabetico</option>
              <option value="dNombre">Descendente alfabetico</option>
              <option value="aAtaque">Ataque ascendente</option>
              <option value="dAtaque">Ataque descendente</option>
            </select>
            <Cards pokemons = {currentPokemons}/>
            <select name="page" onChange={handlePage}>
                {pageNumbers.map((num, index) => (
                    <option key={index} value={num}>{num}</option>
                ))}
            </select>
        </div>
    );
}