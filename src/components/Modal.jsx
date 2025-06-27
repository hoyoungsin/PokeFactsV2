import Sprites from "./modal components/Sprites.jsx";
import Types from "./modal components/Types.jsx";
import EggGroups from "./modal components/EggGroups.jsx";
import Abilities from "./modal components/Abilities.jsx";

export default function Modal({poke, pokeInfo, eggGroups}) {
    
    let pokeName = poke.name.charAt(0).toUpperCase() + poke.name.slice(1);

    // console.log(poke)
    // console.log(pokeInfo)
    // console.log(eggGroups)
    return (
        <div className="modal__content">
            <h2 className="name">{pokeName}</h2>
            <Sprites sprites={poke.sprites} />
            <Types types={poke.types} />
            <EggGroups eggGroups={eggGroups} />
            <Abilities abilities={poke.abilities} />
            <p className="info">
                {pokeInfo}
            </p>
            <div className="modal__footer">
            </div>
    
            <a href="#" className="modal__close">&times;</a>
        </div>
    )
}