import './PokemonProps.tsx'
import type {PokemonProps} from "./PokemonProps.tsx";
import {useState} from "react";
import * as React from "react";

const Card : React.FC<PokemonProps> = ({id, name, types, abilities, height, weight, sprites, url}: PokemonProps) => {
    const [isHidden, setIsHidden] = useState<boolean>(false);

    const renderList = (items: any[], extractor: (item: any) => string) => {
        return Array.isArray(items)
            ? items.map(extractor).join(', ')
            : 'Brak danych';
    };


    return (
        <>
            <div className="card" onClick={() => isHidden ? setIsHidden(false) : setIsHidden(true)}>
                {sprites?.front_default && (
                    <img className="card-image" src={sprites.front_default} alt={name} />
                )}

                <pre>No. {id}</pre>
                <p>{name}</p>
                <div className="card-body" style={{ display: isHidden ? "none" : "block"}}>
                    <p>Typy: {renderList(types, t =>
                        typeof t === 'string'
                            ? t
                            : t?.type?.name || t?.name || 'unknown'
                    )}</p>

                    <p>Zdolności: {renderList(abilities, a =>
                        typeof a === 'string'
                            ? a
                            : a?.ability?.name || a?.name || 'unknown'
                    )}</p>

                    <p>{height} / {weight}</p>
                    <a href={url} target="_blank" rel="noopener">{url}</a>
                </div>
            </div>
        </>
    )
}

export default Card