function solution(number, limit, power) {
    var answer = 0;
    for(let i =1; i <= number; i++){
        const divide = [];
        for(let j = 1; j <= i/2; j++){
            if(i % j === 0){
                divide.push(j)
            }
        }
        divide.push(i);
        
        if(divide.length > limit){
            answer += power    
        } else {
            answer += divide.length
        }
    }
    
    return answer;
}