import './App.css';
import { useCallback, useState, useEffect } from "react";
import Home from "./screens/Home.jsx";
import { getPokemon } from './services/pokemon';

function App() {
  const [ pokemon, setPokemon ] = useState([])
  const [ pokeAmount, setPokeAmount ] = useState(70) //Applied amount
  const [ sliderAmount, setSliderAmount ] = useState(70) //Slider amount (draft)
  const [ genAmount, setGenAmount ] = useState(151)
  const [ genTotal, setGenTotal ] = useState(151)
  const [ isLoading, setIsLoading ] = useState(true)

  const generatePokemon = useCallback(async () => {
    // useCallback needed since the function is passed onto child.
    setIsLoading(true)
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
    setIsLoading(false);
  }, [pokeAmount, genAmount, genTotal]);

  useEffect(() => {
    generatePokemon();
  }, [generatePokemon])

  return (
    <>
      <Home
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        poke={pokemon}
        sliderAmount={sliderAmount}
        setSliderAmount={setSliderAmount}
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
