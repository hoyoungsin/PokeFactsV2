import { useState } from "react"

export default function BaseStats({baseStats}) {
    const [ showStat, setShowStat ] = useState(false)
    let totalStat = 0
    for (let i = 0; i < 6; i++) {
        totalStat += baseStats[i].base_stat
    }

    const handleButton = () => {
        if (showStat === false) {
            setShowStat(true)
        } else {
            setShowStat(false)
        }
    }

    // StatBars show and hide
    const StatBars = () => {
        return (
            <div>
                {baseStats.map((stat) => (
                    <div className="baseStat" key={stat.stat.name}>
                        {stat.stat.name}: {stat.base_stat}
                        <p className="statBar" id={stat.stat.name} style={{width: `${stat.base_stat}px`}}></p>
                    </div>
                ))}
                <p>Total: {totalStat}</p>
            </div>
        )
    }
    
    // console.log(baseStats)
    // console.log(showStat)
    return (
        <div className="baseStatsContainer">
            <button className="statdropbtn" onClick={handleButton} >Base Stats</button>
            {showStat ? <StatBars/> : <></>}
        </div>
    )
}