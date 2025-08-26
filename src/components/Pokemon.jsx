export default function Pokemon({ poke, handleClickPoke}) {
    return (
        <a className="pokemon" href="#info-modal">
            <img onClick={()=>{handleClickPoke(poke.id)}} className="pokeSprite" id={poke.id} src={poke.sprites.front_default} alt={poke.name} />
        </a>
    )
}