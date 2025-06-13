// import Types from "../components/Types";
/// for types may need to use states

export default function Modal({poke, pokeInfo}) {
    // console.log(poke)
    // console.log([pokeInfo])
    let pokeName = poke.name.charAt(0).toUpperCase() + poke.name.slice(1);
    return (
        <div className="modal__content">
            <h2 className="name">{pokeName}</h2>
            <img className="picture" src={poke.sprites.front_default} alt={pokeName}/> 
            {/* <div>
                {poke.types.map(pokemon => <Types key={poke.id} pokeTypes={pokemon}/>)}
            </div> */}
            <p className="type">{poke.types[0].type.name}</p>
            <p className="eggGroup">egggroup1 placeholder</p>
            <p className="eggGroup">egggroup2 placeholder</p>
            <p className="info">
                {pokeInfo}
            </p>
            <div className="modal__footer">
            </div>
    
            <a href="#" className="modal__close">&times;</a>
        </div>
    )
}