function solution(x, n) {
     let answer = [];
    for(let i = 0, ii = 0; ii < n; ii++, i += x) {
        answer.push(i + x);
    }
    return answer;
}