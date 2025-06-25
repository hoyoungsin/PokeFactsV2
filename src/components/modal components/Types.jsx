export default function Types({types}) {
    return (
        <div className="typeContainer">
            Type(s): 
            {types.map((type, index) =>
                (<p key={index} className="type" id={type.type.name}>
                    {type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)}
                </p>))}
        </div>
    )
}