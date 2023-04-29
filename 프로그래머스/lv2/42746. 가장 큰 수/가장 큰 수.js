function solution(numbers) {

    let answer = [];
    for(let number of numbers)
        answer.push(number.toString());
    console.log(answer)
    answer.sort(function(a,b){
        return (b+a)-(a+b);
    });
    return answer.join("")[0] == "0" ? "0" : answer.join("");
}