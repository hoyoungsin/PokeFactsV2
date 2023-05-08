import './App.css';
import { useState, useEffect } from "react"
import Home from "./screens/Home.jsx"
import { getPokemon } from './services/pokemon';


function App() {
  const [ pokemon, setPokemon] = useState([])
  
  const generatePokemon = async () => {
    const poke = [];
    let pokeIDs = [];
    while(poke.length < 80) {
      let pokeID = 151 - Math.floor(Math.random() * 151);
      if(pokeID !== pokeIDs.find(ID => ID === pokeID)) {
        const onePokemon = await getPokemon(pokeID)
        poke.push(onePokemon)
        pokeIDs.push(pokeID)
      }
    }
    setPokemon(poke)
  }

  
  useEffect(() => {
    generatePokemon();
  },[])

  return (
    <>
      <Home poke={pokemon} />
    </>
  );
}

export default App;
