import './PokemonProps.tsx'
import type {PokemonProps} from "./PokemonProps.tsx";

const Card = ({id, name, species, types, abilities, height, weight, url}: PokemonProps) => {
    return (
        <>
            <div className="card">
                <pre>No. {id}</pre>
                <p>{name}/{species}</p>
                <p>{types[0]} {types[1]} {types[0]}</p>
                <p>{abilities}</p>
                <p>{height} / {weight}</p>
                <a href={url} target="_blank" rel="noopener noreferrer">{url}</a>
            </div>
        </>
    )
}

export default Card