import Sprites from "./modal components/Sprites.jsx";
import Types from "./modal components/Types.jsx";
import EggGroups from "./modal components/EggGroups.jsx";
import Abilities from "./modal components/Abilities.jsx";
import BaseStats from "./modal components/BaseStats.jsx";

export default function Modal({poke, pokeInfo, eggGroups}) {
    
    let pokeName = poke.name.charAt(0).toUpperCase() + poke.name.slice(1);

    // console logs for api data incase of api updates or changes
    // console.log(poke)
    // console.log(poke.types)
    // console.log(pokeInfo)
    // console.log(eggGroups)
    // console.log(poke.stats)
    return (
        <div className="modal__content">
            <h2 className="name">{pokeName}</h2>
            <Sprites sprites={poke.sprites} />
            <Types types={poke.types} />
            <p className="info">
                {pokeInfo}
            </p>
            <EggGroups eggGroups={eggGroups} />
            <Abilities abilities={poke.abilities} />
            <BaseStats baseStats={poke.stats}/>
            <div className="modal__footer">
            </div>
    
            <a href="#" className="modal__close">&times;</a>
        </div>
    )
}