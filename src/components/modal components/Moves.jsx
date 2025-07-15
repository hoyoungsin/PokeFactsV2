import { useState } from "react"

export default function Moves({moveSet}) {
    const [ showMoves, setShowMoves ] = useState(false)
    const [ moveGen, setMoveGen ] = useState("Gen I")

    for (let i = 0; i < moveSet.length; i++) {
        for (let j = 0; j < moveSet[i].version_group_details.length; j++) {
            if (moveSet[i].version_group_details[j].version_group.name === moveGen) {
                console.log(moveSet[i].move.name)
                console.log(moveSet[i].version_group_details[j].level_learned_at)
                console.log(moveSet[i].version_group_details[j].move_learn_method.name)
            }
        }
    }

    const handleGen = (gen) => {
        setMoveGen(gen)
    }

    const handleButton = () => {
        if (showMoves === false) {
            setShowMoves(true)
        } else {
            setShowMoves(false)
        }
    }

    const Moves = () => {
        return (
            <div>
                <p>
                    Generation
                    <select onChange={(e) => handleGen(e.target.value)}>
                        <option value="Gen I">Gen I</option>
                    </select>
                </p>
            </div>
        )
    }

    console.log(moveSet)
    return (
        <div className="movesContainer">
            <button className="movesdropbtn" onClick={handleButton}>Moves</button>
            {showMoves ? <Moves/>: <></>}
        </div>
    )
}