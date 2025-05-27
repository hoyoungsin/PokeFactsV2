import { useState } from "react";
import { getPokeInfo } from "../services/pokemon.js";
import Pokemon from "../components/Pokemon"
import Modal from "../components/Modal";

export default function Home({ poke, pokeAmount, setPokeAmount, generatePokemon }) {
  const [ pokeId, setPokeId ] = useState("")
  const [ pokeInfo, setPokeInfo ] = useState("")

  const fetchPokeInfo = async (id) => {
    const info = await getPokeInfo(id)
    for (let i = 0; i < info.flavor_text_entries.length; i++) {
      console.log(info.flavor_text_entries[i].language.name)
      if (info.flavor_text_entries[i].language.name === `en`) {
        setPokeInfo(info.flavor_text_entries[i].flavor_text)
        break;
      } else {
        setPokeInfo(info.flavor_text_entries[0].flavor_text)
      }
    }
  } 
  
  const handleChange = (event) => {
      setPokeAmount(parseInt(event.target.value, 10))
  }

  const handleClick = (id) => {
    setPokeId(id)
    fetchPokeInfo(id)
  }

  return (
    <>
      <h1>PokeFacts</h1>
      <div className="slider">
        <div className="pokeAmount" id="sliderValue">Amount of Pokemon: {pokeAmount} </div>
        <input type="range" min="1" max="100" value={pokeAmount} onChange={handleChange} className="slider" id="myRange"/>
        <input type="button" value="Generate" onClick={generatePokemon} />
      </div>
      <div className="container" >
        {poke.map(pokemon => <Pokemon handleClick={handleClick} key={pokemon.id} id={pokemon.id} poke={pokemon}/>)}
      </div>
      <div id="info-modal" className="modal">
        {pokeId ? <Modal poke={poke.find(pokemon => pokemon.id === pokeId)} pokeInfo={pokeInfo} /> : <></>}
      </div>
    </>
  )
}