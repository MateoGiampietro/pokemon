import { useState } from 'react';
import Validation from '../Validation/Validation.jsx';
import "./Form.css"
import axios from 'axios';

export default function Form() {

    const [ userData, setUserData ] = useState({
        name: '' ,
        image: '',
        health: '',
        attack: '',
        defense: '',
        speed: '',
        height: '',
        weight: '',
        types: ''
    });

    const [ errors, setErrors ] = useState({
        name: '' ,
        image: '',
        health: '',
        attack: '',
        defense: '',
        speed: '',
        height: '',
        weight: '',
        types: ''
    });

    const handleChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;

        setUserData({...userData, [property]: value});
        Validation({...userData, [property]: value}, errors, setErrors);
    }
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
            const response = await axios.post('http://localhost:3001/pokemons', userData, {
                headers: {
                    'Content-Type': 'application/json'
                },
            });

            if (response.status === 200) {
                console.log("Se ha subido tu driver a la base de datos.")
            } else {
                console.log("Algo ha salido mal.")
            }

        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <div>
            <form className='userForm'>
                <div className="form-group">
                    <label htmlFor='name'>Nombre:</label>
                    <input type='text' name='name' value={userData.name} onChange={handleChange}/>
                    {errors.name && <span className="error-message">{errors.name}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor='health'>Vida:</label>
                    <input type='text' name='health' value={userData.health} onChange={handleChange}/>
                    {errors.health && <span className="error-message">{errors.health}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor='attack'>Ataque:</label>
                    <input type='text' name='attack' value={userData.attack} onChange={handleChange}/>
                    {errors.attack && <span className="error-message">{errors.attack}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor='defense'>Defensa:</label>
                    <input type='text' name='defense' value={userData.defense} onChange={handleChange}/>
                    {errors.defense && <span className="error-message">{errors.defense}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor='speed'>Velocidad:</label>
                    <input type='text' name='speed' value={userData.speed} onChange={handleChange}/>
                    {errors.speed && <span className="error-message">{errors.speed}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor='height'>Altura:</label>
                    <input type='text' name='height' value={userData.height} onChange={handleChange}/>
                    {errors.height && <span className="error-message">{errors.height}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor='weight'>Peso:</label>
                    <input type='text' name='weight' value={userData.weight} onChange={handleChange}/>
                    {errors.weight && <span className="error-message">{errors.weight}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor='types'>Tipo/s:</label>
                    <select multiple>
                        <option value="opcion1">Opción 1</option>
                        <option value="opcion2">Opción 2</option>
                        <option value="opcion3">Opción 3</option>
                    </select>
                </div>

                <button onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}
