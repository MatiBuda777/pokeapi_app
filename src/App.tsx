import './App.css'
import './PokemonProps.tsx'
import {useEffect, useState} from "react";
import type {PokemonProps} from "./PokemonProps.tsx";
import Card from "./Card.tsx";

const BASE = "https://pokeapi.co/api/v2"

function App() {
    const [pokemonData, setPokemonData] = useState<PokemonProps[]>([])
    const [chosenId, setChosenId] = useState<number>(1)

    const fetchChosenPokemon = () => {
        fetch(`${BASE}/pokemon/${chosenId}`)
            .then(res => res.json())
            .then(data => setPokemonData([data]))
            .catch(error => console.log(error));
    }

    const fetchPokemonList = () => {
        fetch(`${BASE}/pokemon?offset=0&limit=50`)
            .then(res => res.json())
            .then(data => setPokemonData([data]))
            .catch(error => console.log(error));
    }

    const fetchKantoPokemonList = () => {
        fetch(`${BASE}/pokemon?offset=0&limit=151`)
            .then(res => res.json())
            .then(data => setPokemonData([data]))
            .catch(error => console.log(error));
    }

    const fetchJohtoPokemonList = () => {
        fetch(`${BASE}/pokemon?offset=151&limit=100`)
            .then(res => res.json())
            .then(data => setPokemonData([data]))
            .catch(error => console.log(error));
    }

    useEffect(() => {fetchPokemonList()}, [])

  return (
    <>
        <header>
            <h1>Pokemon REST API</h1>
        </header>

        <div className="layout">
            <aside>
                <input type="number" onChange={(e) => {setChosenId(e.target.valueAsNumber)}} />
                <button onClick={fetchChosenPokemon}>Get Chosen Pokemon</button>
                <button onClick={fetchPokemonList}>Get Pokemon List</button>
                <button onClick={fetchKantoPokemonList}>Get Kanto Pokemon</button>
                <button onClick={fetchJohtoPokemonList}>Get Johto Pokemon</button>
                <p>more coming soon...</p>
            </aside>

            <main>
                <h2>Pokemon list:</h2>
                {Array.isArray(pokemonData) && pokemonData.length > 0 ? (pokemonData.map((pokemon) => (
                    <Card id={pokemon.id} name={pokemon.name} species={pokemon.species} types={pokemon.types}
                          abilities={pokemon.abilities} height={pokemon.height} weight={pokemon.weight} url={pokemon.url} />
                ))) : null}
            </main>
        </div>


        <footer>
            <h4>Contact info</h4>
            <ul>
                <li>+48 123 456 789</li>
                <li>+1 111 222 333</li>
            </ul>
        </footer>
    </>
  )
}

export default App
