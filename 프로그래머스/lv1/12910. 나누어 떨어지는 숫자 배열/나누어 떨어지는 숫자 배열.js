function solution(arr, divisor) {
    let answer = [];
    arr.sort((a,b) => a - b).forEach((v,i)=> {
        if(v % divisor === 0) answer.push(v)
        if(arr.length-1 === i && answer.length === 0) answer.push(-1)
    })

    return answer;
}