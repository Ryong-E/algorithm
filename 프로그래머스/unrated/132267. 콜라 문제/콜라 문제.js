function solution(a, b, n) {
    let currentCola = n
    let getCola = 0;
    let getColaTotal = 0
    while(currentCola >= a){
        getCola = b * Math.floor(currentCola / a)
        getColaTotal += getCola
        currentCola = getCola + currentCola % a
    }
    return getColaTotal;
}