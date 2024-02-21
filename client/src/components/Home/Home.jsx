import { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setAllPokemons } from "../../redux/actions";

export default function Home() {
    const dispatch = useDispatch();
    const pokemons = useSelector((state) => state.pokemons);

    useEffect(() => {
        const fetchPokemons = async () => {
            try {
                const getPokemons = await axios.get('http://localhost:3001/pokemons')

                dispatch(setAllPokemons(getPokemons.data))
            } catch (error) {
                console.log(error.message);
                alert("Error al cargar los pokemons.");
            }
        }

        fetchPokemons();
    }, []);

    console.log(pokemons[1])

    return (
        <div className='home'>
            <h1>Buenas, soy el home</h1>
            <Link to='/'>
                <button> volver al landing </button>
            </Link>
        </div>
    );
}