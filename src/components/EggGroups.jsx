export default function EggGroups({eggGroup}) {
    let groupName = eggGroup.charAt(0).toUpperCase() + eggGroup.slice(1);
    console.log(eggGroup)
    return (
        <p className="eggGroup">
            {groupName}
        </p>
    )
}