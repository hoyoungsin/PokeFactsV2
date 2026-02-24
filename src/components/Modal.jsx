import { useMemo, useEffect } from "react";
import Sprites from "./modal components/Sprites.jsx";
import Types from "./modal components/Types.jsx";
import EggGroups from "./modal components/EggGroups.jsx";
import Abilities from "./modal components/Abilities.jsx";
import BaseStats from "./modal components/BaseStats.jsx";
import Moves from "./modal components/Moves.jsx";
import movesByGen from "./modal components/movesByGen.jsx";

export default function Modal({poke, pokeInfo, eggGroups, onClose }) {
    
    let pokeName = poke.name.charAt(0).toUpperCase() + poke.name.slice(1);
    // console logs for api data incase of api updates or changes
    // console.log(poke)
    // console.log(poke.types)
    // console.log(pokeInfo)
    // console.log(eggGroups)
    // console.log(poke.stats)

    const handleModalClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    }// close modal on outside click

    // can add esc-to-close-modal through useEffect


    const moveSet = useMemo(() => {
        return movesByGen(poke.moves)
    }, [poke.moves])


    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "";
        };
    }, []); // used to hide page scrolling when modal is open


    return (
        <div className="modal" onClick={handleModalClick}>
            <div className="modal__content">
                <button className="modal__close" onClick={onClose}>&times;</button>
                <h2 className="name">{pokeName}</h2>
                <div className="modalTop">
                    <div className="modalTopPoke">
                        <Sprites sprites={poke.sprites} />
                        <Types types={poke.types} />
                        <EggGroups eggGroups={eggGroups} />
                    </div>
                    <BaseStats baseStats={poke.stats}/>
                </div>
                <div className="info">
                    Description: {pokeInfo}
                </div>
                <Abilities abilities={poke.abilities} />
                <Moves moveSet={moveSet} />
            </div>
        </div>
    )
}