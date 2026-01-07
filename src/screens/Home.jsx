import { useState } from "react";
import { getPokeInfo } from "../services/pokemon.js";
import Pokemon from "../components/Pokemon";
import Modal from "../components/Modal";

export default function Home({isLoading, poke, sliderAmount, setSliderAmount, setPokeAmount, generatePokemon, setGenAmount, setGenTotal, genAmount }) {
  const [ pokeId, setPokeId ] = useState("")
  const [ pokeInfo, setPokeInfo ] = useState("")
  const [ eggGroups, setEggGroups ] = useState([])

  const fetchPokeInfo = async (id) => {
    const info = await getPokeInfo(id)
    // console.log(info)
    setEggGroups(info.egg_groups.map((eggGroups)=> eggGroups.name))
    for (let i = 0; i < info.flavor_text_entries.length; i++) {
      // console.log(info.flavor_text_entries[i].language.name)
      if (info.flavor_text_entries[i].language.name === `en`) {
        setPokeInfo(info.flavor_text_entries[i].flavor_text)
        break;
      } else {
        setPokeInfo(info.flavor_text_entries[0].flavor_text)
      }
    }
  }

  const handleClick = (id) => {
    setPokeId(id)
    fetchPokeInfo(id)
  }

  const handleGenerate = () => {
    setPokeAmount(sliderAmount)
    setPokeId(null)
    // generatePokemon() *Not needed as useEffect will go into work when pokeAmount is changed
  }

  const handleGenChange = (gen, total) => {
    setGenAmount(gen)
    setGenTotal(total)
    setSliderAmount(70)
    setPokeAmount(70)
    setPokeId(null)
    generatePokemon()
  }
  
  return (
    <>
      <h1 className="Title">PokéFacts</h1>
      <div className="genContainer">
        <button className="genChange" onClick={() => handleGenChange(151, 151)}>Gen I</button>
        <button className="genChange" onClick={() => handleGenChange(100, 251)}>Gen II</button>
        <button className="genChange" onClick={() => handleGenChange(135, 386)}>Gen III</button>
        <button className="genChange" onClick={() => handleGenChange(107, 493)}>Gen IV</button>
        <button className="genChange" onClick={() => handleGenChange(156, 649)}>Gen V</button>
        <button className="genChange" onClick={() => handleGenChange(72, 721)}>Gen VI</button>
        <button className="genChange" onClick={() => handleGenChange(88, 809)}>Gen VII</button>
        <button className="genChange" onClick={() => handleGenChange(96, 905)}>Gen VIII</button>
        <button className="genChange" onClick={() => handleGenChange(120, 1025)}>Gen IX</button>
      </div>
      <div className="slider">
        <div className="sliderAmount" id="sliderValue">Amount of Pokémon: {sliderAmount} </div>
        <input type="range" min="1" max={genAmount} value={sliderAmount} onChange={(event) => setSliderAmount(parseInt(event.target.value))} className="slider" id="myRange"/>
        <input type="button" value="Generate" onClick={handleGenerate} />
      </div>
      {isLoading ?
        <div className="pokeContainerLoading" >
          <div className="loading">Generating Pokémon...</div>
        </div>:
        <div className="pokeContainer" >
          {poke.map(pokemon => <Pokemon handleClick={handleClick} key={pokemon.id} id={pokemon.id} poke={pokemon}/>)}
        </div>
      }
      {pokeId && (<Modal poke={poke.find(pokemon => pokemon.id === pokeId)} key={pokeId} pokeInfo={pokeInfo} eggGroups={eggGroups} onClose={() => setPokeId(null)} /> )}
      <div className="disclaimer">Pokémon and its respective characters are trademarks and copyrights of Nintendo, Game Freak, and The Pokémon Company. This project is not affiliated with, endorsed, sponsored, or specifically approved by Nintendo, Game Freak, or The Pokémon Company and is intended for personal and educational use only.</div>
    </>
  )
}