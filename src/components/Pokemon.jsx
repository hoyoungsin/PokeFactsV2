export default function Pokemon({ poke, handleClickPoke}) {
    return (
        <img onClick={()=>{handleClick(poke.id)}} className="pokeSprite" id={poke.id} src={poke.sprites.front_default} alt={poke.name} />
    )
}