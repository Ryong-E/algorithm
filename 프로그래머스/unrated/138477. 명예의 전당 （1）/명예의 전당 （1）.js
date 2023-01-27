function solution(k, score) {
    const fame = []
    var answer = [];
    score.forEach(score=>{
      if(fame.length === k){
          if(fame[k-1] < score){
            fame.pop();
            fame.push(score)
            fame.sort((a,b) => b - a)
            answer.push(fame[fame.length -1])
          } else{
           answer.push(fame[fame.length -1])   
          }
          return
          
        }
        fame.push(score)
        fame.sort((a,b) => b - a)
        answer.push(fame[fame.length -1])
    })
    return answer;
}