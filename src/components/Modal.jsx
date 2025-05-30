export default function Modal({poke, pokeInfo}) {
    // console.log(poke)
    // console.log([pokeInfo])
    let pokeName = poke.name.charAt(0).toUpperCase() + poke.name.slice(1);
    return (
        <div className="modal__content">
            <h2 className="name">{pokeName}</h2>
            <img className="picture" src={poke.sprites.front_default} alt={pokeName}/> 
            <p className="Type1">type1 placeholder</p>
            <p className="Type2">type2 placeholder</p>
            <p className="info">
                {pokeInfo}
            </p>
            <div className="modal__footer">
            </div>
    
            <a href="#" className="modal__close">&times;</a>
        </div>
    )
}