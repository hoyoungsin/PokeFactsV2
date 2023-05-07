import { useState } from "react";
import Pokemon from "../components/Pokemon"
import Modal from "../components/Modal";

export default function Home({poke}) {
  const [ pokeId, setPokeId ] = useState("")

  const handleClick = (id) => {
    setPokeId(id)
  }

  return (
    <>
      <h1>PokeFacts</h1>
      <div className="container">
        {poke.map(pokemon => <Pokemon handleClick={handleClick} key={pokemon.id} id={pokemon.id} poke={pokemon} />)}
      </div>
      <div id="info-modal" className="modal">
        {pokeId ? <Modal poke={poke.find(pokemon => pokemon.id === pokeId)} /> : <></>}
      </div>
    </>
  )
}