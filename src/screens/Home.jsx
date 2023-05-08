import { useState, useEffect } from "react";
import { getPokeInfo } from "../services/pokemon.js";
import Pokemon from "../components/Pokemon"
import Modal from "../components/Modal";

export default function Home({poke}) {
  const [ pokeId, setPokeId ] = useState("")
  const [ pokeInfo, setPokeInfo ] = useState("")

  const fetchPokeInfo = async (id) => {
    const info = await getPokeInfo(id)
    setPokeInfo(info.flavor_text_entries[0].flavor_text)
  } 
  
  const handleClick = (id) => {
    setPokeId(id)
    fetchPokeInfo(id)
  }

  return (
    <>
      <h1>PokeFacts</h1>
      <div className="container">
        {poke.map(pokemon => <Pokemon handleClick={handleClick} key={pokemon.id} id={pokemon.id} poke={pokemon} />)}
      </div>
      <div id="info-modal" className="modal">
        {pokeId ? <Modal poke={poke.find(pokemon => pokemon.id === pokeId)} pokeInfo={pokeInfo} /> : <></>}
      </div>
    </>
  )
}