import { useState, useEffect } from "react";
import { getAbilityInfo } from "../../services/pokemon.js";

export default function Abilities({abilities}) {
    const [ abilityInfo, setAbilityInfo ] = useState("")

    const abilityDetails = async (ability) => {
        const abilityInformation = await getAbilityInfo(ability)
        // console.log(abilityInformation)
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
        const firstAbility = abilities[0].ability.name
        abilityDetails(firstAbility)
    }, [abilities])
    
    const formattedAbilityNames = abilities.map(ability => {
        const formattedAbilityName = ability.ability.name
            .split("-")
            .map((abilityName) => abilityName.charAt(0).toUpperCase() + abilityName.slice(1))
            .join(" ")
            return formattedAbilityName
    });
    // console.log(formattedAbilityNames)

    return (
        <div className="abilitiesContainer">
            Abilities:
            <select name="abilities" onChange={(e) => handleSelect(e.target.value)}>
                {abilities.map((ability, index) => (
                    <option value={ability.ability.name} key={index} >
                        {formattedAbilityNames[index]}
                    </option>))
                }
            </select>
            <p>Ability Details: {abilityInfo}</p>
        </div>
    )
}