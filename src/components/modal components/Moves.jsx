import { useState } from "react"

export default function Moves({moveSet}) {
    const [ moveGen, setMoveGen ] = useState("gen1")


    const handleGen = (gen) => {
        setMoveGen(gen)
    }

    const MovesTable = () => {
        const genMovesLevel = moveSet[moveGen]["level-up"].sort((a, b) => a.level - b.level)
        const genMovesTM = moveSet[moveGen]["machine"].sort((a, b) => a.level - b.level)
        const genMovesEgg = moveSet[moveGen]["egg"].sort((a, b) => a.level - b.level)
        const genMovesTutor = moveSet[moveGen]["tutor"].sort((a, b) => a.level - b.level)

        return (
            <div className="moveset">
                Moveset {moveGen}
                <div>By level
                    {genMovesLevel.map((moves) => (
                        <div className="moveTable">
                            <p>{moves.name}</p>
                            <p>. level: {moves.level} .</p>
                            <p>{moves.game}</p>
                        </div>
                    ))}
                </div>
                <div>By TM
                    {genMovesTM.map((moves) => (
                        <div className="moveTable">
                            <p>{moves.name}</p>
                            <p>. TM .</p>
                            <p>{moves.game}</p>
                        </div>
                    ))}
                </div>
                {genMovesEgg.length > 0 ?
                    <div>Egg Moves
                        {genMovesEgg.map((moves) => (
                            <div className="moveTable">
                                <p>{moves.name}</p>
                                <p>. Egg .</p>
                                <p>{moves.game}</p>
                            </div>
                        ))}
                    </div>
                : <div>No Egg Moves</div>}
                {genMovesTutor.length > 0 ?
                    <div>Tutor Moves
                        {genMovesTutor.map((moves) => (
                            <div className="moveTable">
                                <p>{moves.name}</p>
                                <p>. Tutor .</p>
                                <p>{moves.game}</p>
                            </div>
                        ))}
                    </div>
                : <div>No Tutor Moves</div>}
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