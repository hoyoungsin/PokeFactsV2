import './App.css';
import { useState, useEffect } from "react"
import Home from "./screens/Home.jsx"
import { getPokemon } from './services/pokemon';

function App() {
  const [ pokemon, setPokemon ] = useState([])
  const [ pokeAmount, setPokeAmount ] = useState(70)
  const [ genAmount, setGenAmount ] = useState(151)
  const [ genTotal, setGenTotal ] = useState(151)

  const generatePokemon = async () => {
    const poke = [];
    let pokeIDs = [];
    while(poke.length < pokeAmount) {
      let pokeID = genTotal - Math.floor(Math.random() * genAmount);
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
  },[genAmount, genTotal])

  return (
    <>
      <Home
        poke={pokemon}
        pokeAmount={pokeAmount}
        setPokeAmount={setPokeAmount}
        generatePokemon={generatePokemon}
        setGenAmount={setGenAmount}
        genAmount={genAmount}
        setGenTotal={setGenTotal}
      />
    </>
  );
}

export default App;
