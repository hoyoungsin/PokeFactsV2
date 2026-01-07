export default function Pokemon({ poke, handleClick}) {
    return (
        <img onClick={()=>{handleClick(poke.id)}} className="pokeSprite" id={poke.id} src={poke.sprites.front_default} alt={poke.name} />
    )
}