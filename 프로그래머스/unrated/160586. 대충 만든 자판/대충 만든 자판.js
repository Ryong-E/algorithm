function solution(keymap, targets) {
    const answer = []
    targets.forEach(target => {
        const result = target.split('').reduce((total,current) => {
                let less = Infinity
                keymap.forEach(map => {
                    const find = map.indexOf(current)
                    if(find < less && less >= 1 && find !== -1) less = find
                    else if(less === -1 && find > -1) less = find
                    else if(less === Infinity && find < 0) less = -1
                })
                if(less !== -1){
                    if(current in total) total[current] = total[current] + less + 1
                    else total[current] = less + 1
                }
                else total[current] = -1 
                return total 
        },{})
        let total = 0
        for(const[key,value] of Object.entries(result)){
            if(value === -1){
                total = -1
                break
            }
            total += value
        }
        answer.push(total)
    })
    return answer;
}