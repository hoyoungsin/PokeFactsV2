export default function EggGroups({eggGroups}) {
    // console.log(eggGroup)
    return (
        <div className="eggGroupContainer">
            Egg Group(s):
            {eggGroups.map((eggGroup, index) => 
                (<p key={index} className="eggGroup">
                    {eggGroup==="no-eggs" ? "No Egg Group" : eggGroup.charAt(0).toUpperCase() + eggGroup.slice(1)}
                </p>))}
        </div>
    )
}