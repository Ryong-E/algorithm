function solution(x) {
    return x % String(x).split('').map(v=>Number(v)).reduce((acc,cur)=> acc + cur) === 0 ? true : false
}