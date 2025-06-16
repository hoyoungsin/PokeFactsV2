export default function Types({types}) {
        let typeName = types.type.name.charAt(0).toUpperCase() + types.type.name.slice(1);
    return (
        <p className="type" id={types.type.name}>
            {typeName}
        </p>
    )
}