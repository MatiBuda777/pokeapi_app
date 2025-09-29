import './App.css'
import './PokemonProps.tsx'
import {useEffect, useState} from "react";
import type {PokemonProps} from "./PokemonProps.tsx";
import Card from "./Card.tsx";

const BASE = "https://pokeapi.co/api/v2"

function App() {
    const [pokemonData, setPokemonData] = useState<PokemonProps[]>([])
    const [chosenId, setChosenId] = useState<number>(1)
    const [chosenName, setChosenName] = useState<string>()


    const fetchChosenPokemon = () => {
        fetch(`${BASE}/pokemon/${chosenId}`)
            .then(res => res.json())
            .then(data => setPokemonData([data]))
            .catch(error => console.log(error));
    }

    const fetchRandomPokemon = () => {
        const randomIndex = Math.floor(Math.random() * 1000);
        const randomLimit = Math.ceil(Math.random() * 6);
        fetch(`${BASE}/pokemon?offset=${randomIndex}&limit=${randomLimit}`)
            .then(res => res.json())
            .then(data => setPokemonData([data]))
            .catch(error => console.log(error));
    }

    const fetchGEN1PokemonList = () => {
        fetch(`${BASE}/pokemon?offset=0&limit=151`)
            .then(res => res.json())
            .then(data => setPokemonData([data]))
            .catch(error => console.log(error));
    }

    const fetchGEN2PokemonList = () => {
        fetch(`${BASE}/pokemon?offset=151&limit=100`)
            .then(res => res.json())
            .then(data => setPokemonData([data]))
            .catch(error => console.log(error));
    }

    const fetchGEN3PokemonList = () => {
        fetch(`${BASE}/pokemon?offset=251&limit=134`)
            .then(res => res.json())
            .then(data => setPokemonData([data]))
            .catch(error => console.log(error));
    }

    const fetchGEN4PokemonList = () => {
        fetch(`${BASE}/pokemon?offset=386&limit=1`)
            .then(res => res.json())
            .then(data => setPokemonData([data]))
            .catch(error => console.log(error));
    }



    useEffect(() => {fetchRandomPokemon()}, [])

  return (
    <>
        <header>
            <h1>Pokemon REST API</h1>
        </header>

        <div className="layout">
            <aside>
                <form>
                    <pre>ID No.</pre>
                    <input type="number" onChange={(e) => {setChosenId(e.target.valueAsNumber)}} />
                    <br />

                    <pre>Name:</pre>
                    <input type="text" onChange={(e) => {setChosenName(e.target.value)}} />
                    <br />
                </form>
                <br />
                <button onClick={fetchChosenPokemon} className="basic-buttons">Get Chosen Pokemon</button>
                <button onClick={fetchRandomPokemon} className="basic-buttons">Get Random Pokemon</button>
                <br />
                <button onClick={fetchGEN1PokemonList} className="gen-buttons">Get GEN 1 Pokemon</button>
                <button onClick={fetchGEN2PokemonList} className="gen-buttons">Get GEN 2 Pokemon</button>
                <br />
                <button onClick={fetchGEN3PokemonList} className="gen-buttons">Get GEN 3 Pokemon</button>
                <button onClick={fetchGEN4PokemonList} className="gen-buttons">Get GEN 4 Pokemon</button>
                <p>more coming soon...</p>
            </aside>

            <main>
                <h2>Pokemon list:</h2>
                {Array.isArray(pokemonData) && pokemonData.length > 0 ? (
                    pokemonData
                        .map((pokemon) => (
                    <Card id={pokemon.id}
                          name={pokemon.name}
                          types={pokemon.types}
                          abilities={pokemon.abilities}
                          height={pokemon.height}
                          weight={pokemon.weight}
                          sprites={pokemon.sprites}
                          url={pokemon.url} />

                    ))) : null}
            </main>
        </div>
    </>
  )
}

export default App
