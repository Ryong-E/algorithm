function solution(k, m, score) {
    if(Math.floor(score.length / m) === 0) return 0
    var answer = 0;
    const context =Math.floor(score.length / m)
    const discretion = score.sort((a,b) => b - a)
    
    for(let i = m-1; i < discretion.length; i += m){
      answer += discretion[i] * m 
    }
    return answer;
}