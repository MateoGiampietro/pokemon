import React from 'react';
import { Link } from 'react-router-dom';
// import './Landing.css';

export default function Landing() {
    return (
        <div className='landing'>
            <h1> soy el landing </h1>
            <Link to='/home'>
                <button>ir al home</button>
            </Link>
        </div>
    )
}