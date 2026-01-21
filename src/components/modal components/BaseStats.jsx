export default function BaseStats({baseStats}) {
    let totalStat = 0
    for (let i = 0; i < 6; i++) {
        totalStat += baseStats[i].base_stat
    }

    const StatBars = () => {
        return (
            <div>
                {baseStats.map((stat) => (
                    <div className="baseStat" key={stat.stat.name}>
                        {stat.stat.name}: {stat.base_stat}
                        <p className="statBar" id={stat.stat.name} style={{width: `${stat.base_stat/2.55}%`}}></p>
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
            <h4 className="statHeader">Base Stats</h4>
            {<StatBars/>}
        </div>
    )
}