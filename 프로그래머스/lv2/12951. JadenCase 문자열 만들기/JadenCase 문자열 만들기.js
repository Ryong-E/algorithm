function solution(s) {
    return s.split(' ').map(v=> v.replace(/\w/g,(s,i)=> i === 0 ? s.toUpperCase() : s.toLowerCase())).join(' ')
}