function solution(absolutes, signs) {
    let answer = 0
    for(let i = 0; i < signs.length; i++){
        const sign = signs[i] ? '+' : '-'
        answer += parseInt(sign + absolutes[i])
    }
    return answer;
}