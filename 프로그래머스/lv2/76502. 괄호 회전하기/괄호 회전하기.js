function solution(s) {
    var answer = 0;
    let arr = s.split('')
    const regex = /\[\]|\{\}|\(\)/
    for(let i = 0; i< s.length; i++){
        const copy = [...arr]
        const rotate = copy.shift()
        copy.push(rotate)
        let join = copy.join('')
        while(regex.test(join)){
            join = join.replace(regex,"")
        }
        if(join.length === 0) answer++
        arr = copy
    }
    return answer;
}