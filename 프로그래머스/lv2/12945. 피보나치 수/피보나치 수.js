function solution(n) {
    let result = 0
    let v1 = 0
    let v2 = 1;
    for(let i = 2; i <= n; i++){
        result = (v1 + v2) % 1234567
        v1 = v2
        v2 = result
    }
    
    return result
}