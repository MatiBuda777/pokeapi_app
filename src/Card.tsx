import './Card.css'
import './PokemonProps.tsx'
import type {PokemonProps} from "./PokemonProps.tsx";
import {useState} from "react";
import * as React from "react";

const Card : React.FC<PokemonProps> = ({id, name, types, abilities, height, weight, sprites, url}: PokemonProps) => {
    const [isHidden, setIsHidden] = useState<boolean>(false);
    console.log(types);

    const renderList = <T,>(items: T[], extractor: (item: T) => string) => {
        return Array.isArray(items) && items.length > 0
            ? items.map(extractor).join(', ')
            : 'Brak danych';
    };


    return (
        <>
            <div className="card" onClick={() => setIsHidden(prev => !prev)}>
                {sprites?.front_default &&
                <img src={sprites.front_default} alt={name} />
                }
                <p>No. {id}</p>
                <p>{name?.toUpperCase() ?? "NO NAME"}</p>

                <div className={`card-body ${isHidden ? 'hidden' : ''}`}>
                    <p>{Array.isArray(types) && renderList(types, (t) => t.type.name || "???")}</p>
                    <p>{Array.isArray(abilities) && renderList(abilities, (a) => a.type.name || "NO ABILITIES")}</p>

                    <p>{height} feet/{weight} lbs</p>
                </div>
            </div>
        </>
    )
}

export default Card