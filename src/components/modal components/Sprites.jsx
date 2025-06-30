import { useState } from "react"

export default function Sprites({sprites}) {
    const defaultSprite = sprites.front_default
    // default is black/white gen
    // may need to bring sprite verson up to pokemon generation for default sprite version on home page later
    const [ currentSprite, setCurrentSprite ] = useState(defaultSprite)

    const handleVersion = (version) => {
        // console.log(version)
        if (version === "defaultSprite") {
            setCurrentSprite(defaultSprite)
        } else {
            const [generation, game] = version.split(".")
            const spriteVersion = sprites.versions[generation][game].front_default
            setCurrentSprite(spriteVersion)
        }
    }

    const versionCheck = (sprites) => {
        const versions = []
        for (const generation in sprites.versions) {
            const games = sprites.versions[generation]
            for (const game in games) {
                if ( game !== "icons") {
                    versions.push(`${generation}.${game}`)
                }
            }
        }
        return versions
    }

    const versionList = versionCheck(sprites)
    // console.log(versionList)
    // console.log(gameName)
    const formattedVersionList = versionList.map((gameVersions) => {
        const [generation, game] = gameVersions.split(".")
        const formattedGen = generation.charAt(0).toUpperCase() + generation.slice(1, 3) + " " + generation.slice(11).toUpperCase()
        const formattedGame = game
            .split("-")
            .map((gameName) => gameName.charAt(0).toUpperCase() + gameName.slice(1))
            .join("/")
        return `${formattedGen} - ${formattedGame}`
    })
    // console.log(formattedVersionList)

    return (
        <div className="spritesContainer">
            <img className="sprite" src={currentSprite} alt="default" /> 
            <p className="spriteSelect">
                Sprite Version: 
                <select name="spriteChoice" onChange={(e) => handleVersion(e.target.value)}>
                    <option value="defaultSprite" >Default(Black/White)</option>
                    {versionList.map((genVersion, index) => (<option value={genVersion} key={index} >{formattedVersionList[index]}</option>))}
                </select>
            </p>
        </div>
    )
}