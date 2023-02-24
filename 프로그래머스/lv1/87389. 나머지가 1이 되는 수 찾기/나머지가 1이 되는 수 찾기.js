function solution(n) {
    var answer = 0;
    let divide = 1
    while(true){
        if(n % divide === 1) return divide
        divide++
    }
    return answer;
}