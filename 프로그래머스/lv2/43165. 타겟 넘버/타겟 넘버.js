
function solution(numbers, target) {
    let answer = 0
    const length  = numbers.length
    function dfs(visitIndex,sum){
        if(visitIndex === length){
         if(sum === target){
            answer++
          } 
        }
        else{
            dfs(visitIndex+1,sum+numbers[visitIndex])
            dfs(visitIndex+1,sum-numbers[visitIndex])
        }   
    }
    
    dfs(0,0)
    
    return answer;
}