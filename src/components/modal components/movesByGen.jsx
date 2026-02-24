//utility for sorting moves by generation and order by level learned

const GAME_TO_GEN = {
    "red-blue": 1,
    "yellow": 1,

    "gold-silver": 2,
    "crystal": 2,

    "ruby-sapphire": 3,
    "emerald": 3,
    "firered-leafgreen": 3,

    "diamond-pearl": 4,
    "platinum": 4,
    "heartgold-soulsilver": 4,

    "black-white": 5,
    "black-2-white-2": 5,
    "colosseum": 5,
    "xd": 5,

    "x-y": 6,
    "omega-ruby-alpha-sapphire": 6,

    "sun-moon": 7,
    "ultra-sun-ultra-moon": 7,
    "lets-go-pikachu-lets-go-eevee": 7,

    "sword-shield": 8,
    "brilliant-diamond-shining-pearl": 8,

    "scarlet-violet": 9
} //games by generation
// may need to reorganize game_to_gen into better format and move to a separate utility file for generation information. Possibly combine with gen amount values.

const emptyGen = () => ({
    "level-up": [],
    machine: [],
    egg: [],
    tutor:[]
}) //array initialization for move
    
export default function movesByGen(moves) {
    const movesByGenArray = {
        gen1: emptyGen(),
        gen2: emptyGen(),
        gen3: emptyGen(),
        gen4: emptyGen(),
        gen5: emptyGen(),
        gen6: emptyGen(),
        gen7: emptyGen(),
        gen8: emptyGen(),
        gen9: emptyGen(),
    }

    moves.forEach((eachMove) => {
        const moveName = eachMove.move.name.replace("-", " ")

        eachMove.version_group_details.forEach((detail) => {
            const genNumber = GAME_TO_GEN[detail.version_group.name]
            if (!genNumber) return //safey guard incase gen number issues arise.

            const game = detail.version_group.name
            const method = detail.move_learn_method.name
            const level = detail.level_learned_at
            
            const genKey = `gen${genNumber}`

            if (!movesByGenArray[genKey][method]) {
                movesByGenArray[genKey][method] = [];
            }

            movesByGenArray[genKey][method].push({
                name: moveName,
                game,
                level
            })
        })
    })
    console.log(movesByGenArray)
    return movesByGenArray
} //seperation of moves by gen
