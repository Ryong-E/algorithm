function solution(arr)
{
    var answer = [];
    for(let i =0; i <arr.length; i++){
        if(answer.at(-1) !== arr[i]) answer.push(arr[i])
        else {
            answer.pop()
            answer.push(arr[i])
        }
    }
    
    return answer;
}