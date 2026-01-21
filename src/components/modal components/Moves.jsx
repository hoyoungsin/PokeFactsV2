import { useState } from "react"

export default function Moves({moveSet}) {
    const [ moveGen, setMoveGen ] = useState("gen1")


    const handleGen = (gen) => {
        setMoveGen(gen)
    }

    const MovesTable = () => {
        const genMoves = moveSet[moveGen]["level-up"].sort((a, b) => a.level - b.level)

        return (
            <div>
                Test for moveset
                <div>
                    {genMoves.map((moves) => (
                        <div className="moveTable">
                            <p>{moves.name}</p>
                            <p>level:{moves.level}</p>
                            <p>{moves.game}</p>
                        </div>
                    ))}
                </div>
            </div>
        )
    }

    return (
        <div className="movesContainer">
            <div className="genContainer">
                <button className="genChange" onClick={() => handleGen("gen1")}>Gen I</button>
                <button className="genChange" onClick={() => handleGen("gen2")}>Gen II</button>
                <button className="genChange" onClick={() => handleGen("gen3")}>Gen III</button>
                <button className="genChange" onClick={() => handleGen("gen4")}>Gen IV</button>
                <button className="genChange" onClick={() => handleGen("gen5")}>Gen V</button>
                <button className="genChange" onClick={() => handleGen("gen6")}>Gen VI</button>
                <button className="genChange" onClick={() => handleGen("gen7")}>Gen VII</button>
                <button className="genChange" onClick={() => handleGen("gen8")}>Gen VIII</button>
                <button className="genChange" onClick={() => handleGen("gen9")}>Gen IX</button>
            </div>
            <MovesTable/>
        </div>
    )
}