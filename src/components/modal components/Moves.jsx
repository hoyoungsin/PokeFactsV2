import { useState } from "react"

export default function Moves({ moveSet }) {
    const [moveGen, setMoveGen] = useState("gen1")
    // need to remove any older gen moveset buttons from newer gen pokemon and state to be set to starting generation.

    const handleGen = (gen) => {
        setMoveGen(gen)
    }

    const moveGames = (gen) => {
        switch (gen) {
            case "gen1":
                return (
                    <>
                        <th scope="col" className="moveTableGame" id="redblue">R/B</th>
                        <th scope="col" className="moveTableGame" id="yellow">Yel</th>
                    </>
                );
            case "gen2":
                return (
                    <>
                        <th scope="col" className="moveTableGame" id="goldsilver">G/S</th>
                        <th scope="col" className="moveTableGame" id="crystal">C</th>
                    </>
                );
            case "gen3":
                return (
                    <>
                        <th scope="col" className="moveTableGame" id="rubysapphire">R/S</th>
                        <th scope="col" className="moveTableGame" id="emerald">Em</th>
                        <th scope="col" className="moveTableGame" id="fireredleafgreen">FR/LG</th>
                    </>
                );
            case "gen4":
                return (
                    <>
                        <th scope="col" className="moveTableGame" id="diamondpearl">D/P</th>
                        <th scope="col" className="moveTableGame" id="platinum">Pt</th>
                        <th scope="col" className="moveTableGame" id="heartgoldsoulsilver">HG/SS</th>
                    </>
                );
            case "gen5":
                return (
                    <>
                        <th scope="col" className="moveTableGame" id="blackwhite">B/W</th>
                        <th scope="col" className="moveTableGame" id="blackwhite2">B/W 2</th>
                        <th scope="col" className="moveTableGame" id="colosseum">Col</th>
                        <th scope="col" className="moveTableGame" id="xd">XD</th>
                    </>
                );
            case "gen6":
                return (
                    <>
                        <th scope="col" className="moveTableGame" id="xy">X/Y</th>
                        <th scope="col" className="moveTableGame" id="omegarubyalphasapphire">OR/AS</th>
                    </>
                );
            case "gen7":
                return (
                    <>
                        <th scope="col" className="moveTableGame" id="sunmoon">S/M</th>
                        <th scope="col" className="moveTableGame" id="ultrasunultramoon">US/UM</th>
                        <th scope="col" className="moveTableGame" id="letsgo">LGP/E</th>
                    </>
                );
            case "gen8":
                return (
                    <>
                        <th scope="col" className="moveTableGame" id="swordshield">Sw/Sh</th>
                        <th scope="col" className="moveTableGame" id="brilliantdiamondshiningpearl">BD/SP</th>
                    </>
                );
            case "gen9":
                return (
                    <>
                        <th scope="col" className="moveTableGame" id="scarletviolet">S/V</th>
                    </>
                );
            default:
                console.log("defaulted")
        } // switch cases for gen games column in header
    }


    const moveTable = (method, genMoves) => {

        return (
            <>  {genMoves.length > 0 ?
                <>
                <caption>By {method}</caption>
                <table className="movesContainer">
                    <thead className="moveTableHead">
                        <tr>
                            <th scope="col">Move Name</th>
                            {method === "Level" ? <th scope="col">{method}</th> : <></>}
                            {moveGames(moveGen)}
                        </tr>
                    </thead>
                    <tbody>
                        {genMoves.map((moves) => (
                            <tr>
                                <td>{moves.name}</td>
                                {method === "Level" ? <td>{moves.level}</td> : <></>}
                                <td>{moves.game}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                </> : <div>No {method} Moves</div> }
            </>
        )
    }


    const MovesContent = () => {
        const genMovesLevel = moveSet[moveGen]["level-up"].sort((a, b) => a.level - b.level)
        const genMovesTM = moveSet[moveGen]["machine"].sort((a, b) => a.level - b.level)
        const genMovesEgg = moveSet[moveGen]["egg"].sort((a, b) => a.level - b.level)
        const genMovesTutor = moveSet[moveGen]["tutor"].sort((a, b) => a.level - b.level)

        // need to streamline movesets and movetable generation. 



        return (
            <div className="moveset">
                Moveset Gen {moveGen.slice(3,4)}
                {moveTable("Level", genMovesLevel)}
                {moveTable("TM", genMovesTM)}
                {moveTable("Egg", genMovesEgg)}
                {moveTable("Tutor", genMovesTutor)}
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
            <MovesContent />
        </div>
    )
}