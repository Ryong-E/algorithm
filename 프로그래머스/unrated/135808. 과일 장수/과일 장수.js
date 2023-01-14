function solution(k, m, score) {
    let answer = 0;
    const discretion = score.sort((a,b) => b - a)
    
    for(let i = m-1; i < discretion.length; i += m){
      answer += discretion[i] * m 
    }
    return answer;
}