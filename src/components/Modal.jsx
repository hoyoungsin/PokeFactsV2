import { useState, useEffect } from "react";
import Types from "../components/Types";
import EggGroups from "../components/EggGroups.jsx";
import { getAbilityInfo } from "../services/pokemon.js";

export default function Modal({poke, pokeInfo, eggGroups}) {
    const [ abilityInfo, setAbilityInfo ] = useState("")

    const abilityDetails = async (ability)=>{
        const abilityInformation = await getAbilityInfo(ability)
        console.log(abilityInformation)
        for (let i = 0; i < abilityInformation.effect_entries.length; i++) {
            if (abilityInformation.effect_entries[i].language.name === `en`) {
                setAbilityInfo(abilityInformation.effect_entries[i].short_effect)
                break;
            } else {
                setAbilityInfo(abilityInformation.effect_entries[0].short_effect)
            }
        }
    }

    const handleSelect = (ability) => {
        abilityDetails(ability)
    }

    useEffect(() => {
        const firstAbility = poke.abilities[0].ability.name
        abilityDetails(firstAbility);
    }, [poke])
    
    let pokeName = poke.name.charAt(0).toUpperCase() + poke.name.slice(1);

    // console.log(poke)
    // console.log(pokeInfo)
    // console.log(eggGroups)
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
                {eggGroups.map((group, index) => (<EggGroups key={index} eggGroup={group}/>))}
            </div>
            <div className="abilitiesContainer">
                Abilities:
                <select name="abilities" onChange={(e) => handleSelect(e.target.value)}>
                    {poke.abilities.map((ability) => (<option value={ability.ability.name}>{ability.ability.name.charAt(0).toUpperCase() + ability.ability.name.slice(1)}</option>))}
                </select>
                <p>Ability Details: {abilityInfo}</p>
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