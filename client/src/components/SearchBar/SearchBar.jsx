import { useState } from 'react';
// import './SearchBar.css';
import { filterPokemonsByName } from '../../redux/actions';
import { useDispatch } from 'react-redux';

export default function SearchBar() {
    const dispatch = useDispatch();
    const [ name, setName ] = useState('');

    const handleChange = (event) => {
        setName(event.target.value);
    };

    const handleClick = (event) => {
        event.preventDefault();
        dispatch(filterPokemonsByName(name));
        setName('');
    };

    return (
        <div className='searchBar'>
            <input type='search' onChange={handleChange} value={name}/>
            <button onClick={handleClick}>Buscar</button>
        </div>
    );
};