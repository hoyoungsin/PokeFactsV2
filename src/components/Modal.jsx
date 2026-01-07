import Sprites from "./modal components/Sprites.jsx";
import Types from "./modal components/Types.jsx";
import EggGroups from "./modal components/EggGroups.jsx";
import Abilities from "./modal components/Abilities.jsx";
import BaseStats from "./modal components/BaseStats.jsx";
import Moves from "./modal components/Moves.jsx";

export default function Modal({poke, pokeInfo, eggGroups, onClose }) {
    
    let pokeName = poke.name.charAt(0).toUpperCase() + poke.name.slice(1);

    // console logs for api data incase of api updates or changes
    // console.log(poke)
    // console.log(poke.types)
    // console.log(pokeInfo)
    // console.log(eggGroups)
    // console.log(poke.stats)
    return (
        <div className="modal">
            <div className="modal__content">
                <button className="modal__close" onClick={onClose}>&times;</button>
                <h2 className="name">{pokeName}</h2>
                <Sprites sprites={poke.sprites} />
                <Types types={poke.types} />
                <p className="info">
                    {pokeInfo}
                </p>
                <EggGroups eggGroups={eggGroups} />
                <Abilities abilities={poke.abilities} />
                <BaseStats baseStats={poke.stats}/>
                <Moves moveSet={poke.moves} />
                <div className="modal__footer"></div>
            </div>
        </div>
    )
}