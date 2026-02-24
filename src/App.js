import './App.css';
import { useCallback, useState, useEffect } from "react";
import Home from "./screens/Home.jsx";
import { getPokemon } from './services/pokemon';

function App() {
  const [ pokemon, setPokemon ] = useState([])
  const [ pokeAmount, setPokeAmount ] = useState(151) //Applied amount
  const [ sliderAmount, setSliderAmount ] = useState(151) //Slider amount (draft)
  const [ genAmount, setGenAmount ] = useState(151)
  const [ genTotal, setGenTotal ] = useState(151)
  const [ isLoading, setIsLoading ] = useState(true)
  const [ isRandomized, setIsRandomized ] = useState(false)
 
  const generatePokemon = useCallback(async (amount = pokeAmount) => {
    // useCallback needed since the function is dependent on hooks and is passed as a prop to a child component.
    setIsLoading(true)
    const pokeList = [];
    let pokeIDs = [];

    if (isRandomized) {
      while(pokeList.length < amount) {
        let pokeID = genTotal - Math.floor(Math.random() * genAmount)
        if(pokeID !== pokeIDs.find(ID => ID === pokeID)) {
          const onePokemon = await getPokemon(pokeID)
          pokeList.push(onePokemon)
          pokeIDs.push(pokeID)
        } 
      }
      // Randomized
    } else {
      for ( let i = 0; i < amount; i++) {
        let genStart = genTotal - genAmount + 1
        const onePoke = await getPokemon(genStart + i)
        pokeList.push(onePoke)
        }
      // By ID
    }
    setPokemon(pokeList)
    setIsLoading(false);
  }, [pokeAmount, genAmount, genTotal, isRandomized]); //generation by id
  

  useEffect(() => {
    generatePokemon();
  }, [generatePokemon])

  return (
    <>
      <Home
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        pokes={pokemon}
        sliderAmount={sliderAmount}
        setSliderAmount={setSliderAmount}
        setPokeAmount={setPokeAmount}
        generatePokemon={generatePokemon}
        setGenAmount={setGenAmount}
        genAmount={genAmount}
        setGenTotal={setGenTotal}
        setIsRandomized={setIsRandomized}
      />
    </>
  );
}

export default App;
