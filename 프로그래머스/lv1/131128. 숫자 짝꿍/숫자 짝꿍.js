function solution(X, Y) {
    const a = X.split('')
    const b = Y.split('')
    const numbers = Array(10).fill().map((v,i) => String(i))

    let answer = [];
    numbers.forEach(number =>{
        const Q = a.filter(elem => elem === number)
        const W = b.filter(elem => elem === number)
        if(Q.length !== 0 && W.length !== 0){
            answer.push(Array(Math.min(Q.length,W.length)).fill(number))
        }
    })
    answer = answer.flat().sort((a,b) => b - a)
    
    if(answer.length === 0) return '-1'
    
    return /^0+$/.test(answer.join('')) ? '0' : answer.join('')
}