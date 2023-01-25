function solution(X, Y) {
    const arrX = X.split('')
    const arrY = Y.split('')
    const numbers = Array(10).fill().map((v,i) => String(i))
    let answer = [];
    
    numbers.forEach(number =>{
        const foundNumberX = arrX.filter(elem => elem === number)
        const foundNumberY = arrY.filter(elem => elem === number)
        if(foundNumberX.length !== 0 && foundNumberY.length !== 0){
            answer.push(Array(Math.min(foundNumberX.length,foundNumberY.length)).fill(number))
        }
    })
    
    answer = answer.flat().sort((a,b) => b - a)
    if(answer.length === 0) return '-1'
    
    return /^0+$/.test(answer.join('')) ? '0' : answer.join('')
}