import { useEffect, useState } from "react";
import { getPokeInfo } from "../services/pokemon.js";

export default function Modal({poke}) {
    const [pokeInfo, setPokeInfo] = useState("")

    const fetchPokeInfo = async () => {
        const info = await getPokeInfo(poke.id)
        setPokeInfo(info.flavor_text_entries[0].flavor_text)
    } 
    
    useEffect(()=>{
        fetchPokeInfo()
    }, [])

    let pokeName = poke.name.charAt(0).toUpperCase() + poke.name.slice(1);
    return (
        <div className="modal__content">
            <h2 className="name">{pokeName}</h2>
            <img className="picture" src={poke.sprites.front_default} /> 
            <p className="info">
                {pokeInfo}
            </p>
            <div className="modal__footer">
            </div>
    
            <a href="#" className="modal__close">&times;</a>
        </div>
    )
}