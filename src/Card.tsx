import './Card.css'
import './PokemonProps.tsx'
import type {PokemonProps} from "./PokemonProps.tsx";
import {useEffect, useState} from "react";
import * as React from "react";

const Card : React.FC<PokemonProps> = ({id, name, types, abilities, height, weight, sprites, url}: PokemonProps) => {
    const [isHidden, setIsHidden] = useState<boolean>(false);

    useEffect(() => {

    }, [id, name, types, abilities, height, weight, sprites]);

    const renderList = (items: any[], extractor: (item: any) => string) => {
        return Array.isArray(items)
            ? items.map(extractor).join(', ')
            : 'Brak danych';
    };


    return (
        <>
            <div className="card" onClick={() => setIsHidden(prev => !prev)}>
                {sprites?.front_default && (
                    <img className="card-image" src={sprites.front_default} alt={name} />
                )}

                <p>No. {id}</p>

                <p>{name}</p>

                <div className="card-body" style={{ display: isHidden ? "none" : "block"}}>
                    <p>Types: {renderList(types, t =>
                        typeof t === 'string'
                            ? t
                            : t?.type?.name || t?.name || 'unknown'
                    )}</p>

                    <p>Abilities: {renderList(abilities, a =>
                        typeof a === 'string'
                            ? a
                            : a?.ability?.name || a?.name || 'unknown'
                    )}</p>

                    <p>Height: {height} / Weight: {weight}</p>
                    <a href={url} target="_blank" rel="noopener">Link doesn't work</a>
                </div>
            </div>
        </>
    )
}

export default Card