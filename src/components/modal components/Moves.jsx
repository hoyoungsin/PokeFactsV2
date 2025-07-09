import { useState } from "react"

export default function Moves({moves}) {
    const [ generation, setGeneration ] = useState("Gen I")

    return (
        <div className="movesContainer">
            Moves
        </div>
    )
}