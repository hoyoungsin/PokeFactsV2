import Types from "../components/Types";
import EggGroups from "../components/EggGroups.jsx";
import Abilities from "./Abilities.jsx";

export default function Modal({poke, pokeInfo, eggGroups}) {
    // console.log(poke)
    // console.log(pokeInfo)
    // console.log(eggGroups)
    let pokeName = poke.name.charAt(0).toUpperCase() + poke.name.slice(1);
    return (
        <div className="modal__content">
            <h2 className="name">{pokeName}</h2>
            <img className="picture" src={poke.sprites.front_default} alt={pokeName}/> 
            <div className="typeContainer">
                Type(s): 
                {poke.types.map(types => <Types types={types}/>)}
            </div>            
            <div className="eggGroupContainer">
                Egg Group(s):
                {eggGroups.map((group, index) => (<EggGroups key={index} eggGroup={group} groupNum={index + 1}/>))}
            </div>
            <div className="abilitiesContainer">
                Abilities:
                {poke.abilities.map((ability) => (<Abilities ability={ability}/>))}
            </div>
            <p className="info">
                {pokeInfo}
            </p>
            <div className="modal__footer">
            </div>
    
            <a href="#" className="modal__close">&times;</a>
        </div>
    )
}