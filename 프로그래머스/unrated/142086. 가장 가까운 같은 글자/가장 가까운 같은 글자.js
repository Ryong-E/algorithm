function solution(s) {
    const answer = {}
    
    return [...s].map((word,i)=>{
        let result = answer[word] !== undefined ? i - answer[word] : -1
        answer[word] = i
        return result
    })
    
    return answer;
}