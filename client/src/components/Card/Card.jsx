export default function Card(props) {

    return (
        <div className="card-container">
            <h2>{props.name}</h2>
            <img src={props.image} alt={props.id}/>
            <h4>Tipos: {props.types.length === 1 ?
                props.types[0].type.name :
                `${props.types[0].type.name}, ${props.types[1].type.name}`}</h4>
        </div>
    )
}