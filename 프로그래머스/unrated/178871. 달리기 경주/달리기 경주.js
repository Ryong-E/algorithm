function solution(players, callings) {
const map = new Map()
const map2 = new Map()
players.forEach((player,i)=>map.set(player,i))
    
players.forEach((player,i)=>map2.set(i,player))

    callings.forEach((call,i)=>{
        const player = callings[i]
        const playerRecord = map.get(player)
        const playerNewRecord = playerRecord -1;
        
        const prevPlayer = map2.get(playerNewRecord);
        const prevRecord = playerRecord
        const prevNewRecord = playerRecord;
        
        
        map.set(player,playerNewRecord)
        map.set(prevPlayer,prevNewRecord)
        map2.set(playerNewRecord,player)
        map2.set(playerRecord,prevPlayer)
    })

    const result = []
    for(let [rank,player] of map2){
        result[rank] = player
    }
    return result
}