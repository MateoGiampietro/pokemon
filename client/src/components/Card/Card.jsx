import { Link } from "react-router-dom";
import './Card.css';

export default function Card(props) {

    return (
        <div className="card-container">
            <Link to={`/detail/${props.id}`}>
                <h2>{props.name}</h2>
            </Link>
            <img src={props.image} alt={props.id}/>
            <h4>Tipos: {props.types.length === 1 ?
                props.types[0].type.name :
                `${props.types[0].type.name}, ${props.types[1].type.name}`}</h4>
        </div>
    )
}