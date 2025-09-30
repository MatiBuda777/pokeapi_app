import './App.css'
import './PokemonProps.tsx'
import {useState} from "react";
import type {PokemonProps} from "./PokemonProps.tsx";
import Card from "./Card.tsx";

const BASE = "https://pokeapi.co/api/v2"

function App() {
    const [pokemonData, setPokemonData] = useState<PokemonProps[]>([])
    const [chosenId, setChosenId] = useState<number>(1)
    const [chosenName, setChosenName] = useState<string>('')

    const fetchChosenPokemon = () => {
        fetch(`${BASE}/pokemon/${chosenId}`)
            .then(res => res.json())
            .then(data => setPokemonData([data]))
            .catch(error => console.log(error));
    }

    const fetchRandomPokemon = () => {
        const randomIndex = Math.floor(Math.random() * 1000);
        console.log(randomIndex)
        fetch(`${BASE}/pokemon/${randomIndex}`)
            .then(res => res.json())
            .then(data => setPokemonData([data]))
            .catch(error => console.log(error));
    }

  return (
    <>
        <header>
            <h1>Pokemon REST API</h1>
        </header>

        <div className="layout">
            <aside>
                <form>
                    <pre>ID No.</pre>
                    <input type="number" value={chosenId} onChange={(e) => {setChosenId(e.target.valueAsNumber)}} />
                    <br />

                    <pre>Name:</pre>
                    <input type="text" value={chosenName} onChange={(e) => {setChosenName(e.target.value)}} />
                    <br />
                </form>
                <br />
                <button onClick={fetchChosenPokemon} className="basic-buttons">Get Chosen Pokemon</button>
                <button onClick={fetchRandomPokemon} className="basic-buttons">Get Random Pokemon</button>
                <br />
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
