export default function Abilities({ability}) {
        let abilityName = ability.ability.name.charAt(0).toUpperCase() + ability.ability.name.slice(1);
    return (
        <a className="ability" id={ability.ability.name}>
            {abilityName}
        </a>
    )
}