function solution(number) {
let answer = 0;
    for (let i = 0; i <= number.length - 3; i++){
       for(let j = i+1; j <= number.length - 2;j++){
           for(let p = j+1; p < number.length; p++){
               if(number[i] + number[j] + number[p] === 0) answer += 1
           }
       }
    }

    return answer;
}