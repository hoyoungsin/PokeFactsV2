import { useState } from "react"

export default function Sprites({sprites}) {
    const defaultSprite = sprites.front_default
    //default is black/white gen
    const [ currentSprite, setCurrentSprite ] = useState(defaultSprite)

    const handleVersion = (version) => {
        console.log(version)
        if (version === "defaultSprite") {
            setCurrentSprite(defaultSprite)
        } else {
            const [generation, game] = version.split(".")
            const spriteVersion = sprites.versions[generation][game].front_default
            setCurrentSprite(spriteVersion)
        }
    }

    const versionCheck = (sprites) => {
        const result = []
        for (const generation in sprites.versions) {
            const games = sprites.versions[generation]
            for (const game in games) {
                if ( game !== "icons") {
                    result.push(`${generation}.${game}`)
                }
            }
        }
        return result
    }

    const versionList = versionCheck(sprites)
    const gameName = versionList.map((verGame) => (verGame.split(".")[1]))

    // console.log(gameName)

    return (
        <div className="spritesContainer">
            <img className="picture" src={currentSprite} alt="default" /> 
            <p className="spriteSelect">
                Sprite Version: 
                <select name="spriteChoice" onChange={(e) => handleVersion(e.target.value)}>
                    <option value="defaultSprite" >Default</option>
                    {versionList.map((genVersion, index) => (<option value={genVersion} key={index} >{gameName[index]}</option>))}
                    {/* <option value="generation-i.red-blue" >Red/Blue</option>
                    <option value="generation-i.yellow" >Yellow</option>
                    <option value="generation-iii.emerald" >Emerald</option> */}
                </select>
            </p>
        </div>
    )
}