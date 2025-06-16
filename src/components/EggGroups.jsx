export default function EggGroups({groupNum, eggGroup}) {
    let groupName = eggGroup.charAt(0).toUpperCase() + eggGroup.slice(1);
    console.log(eggGroup)
    return (
        <p className="eggGroup">
            Egg Group {groupNum}: {groupName}
        </p>
    )
}