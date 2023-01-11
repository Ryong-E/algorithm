function solution(s) {
    var answer = [];
    s.split('').forEach((word,index)=>{
        const result = []
        
        if(index > 0){
            for(let j = index - 1; j >= 0; j--){
                if(word == s[j]) result.push(index - j)
            }
        }

        if(result.length > 0) return answer.push(Math.min(...result))
        answer.push(-1)
    })
    
    return answer;
}