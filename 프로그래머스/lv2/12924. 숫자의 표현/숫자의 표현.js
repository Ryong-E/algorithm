function solution(n) {
    let result = 0
    for(let i = 0; i < n; i++){
        let sum = 0
        for(let j= i+1; j <= n; j++){
            sum += j
            if(sum === n){
                result += 1;
                break;
            }
            if(sum > n){
                break;
            }

        }
    }
    return result
}