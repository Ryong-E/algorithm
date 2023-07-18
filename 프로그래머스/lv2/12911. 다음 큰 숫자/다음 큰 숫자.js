function solution(n) {
    let nextInt = n+1;
    let intHex = n.toString(2).replace(/0/g,'').length;
    while(true){
        const hex = nextInt.toString(2).replace(/0/g,'').length
        if(intHex === hex) return nextInt
        nextInt += 1
    }
}