function solution(x, y, n) {
    let answer = []
    let count = 0;
    
    answer.push(x)
    while(answer.length !== 0){
        console.log(answer)
        if(answer.indexOf(y) !== -1) return count
        
        const next = new Set();
        for(i of answer){
            const plus = i + n;
            const mulTwo = i * 2;
            const mulThree = i * 3;
            if(plus <= y) next.add(plus)
            if(mulTwo <= y) next.add(mulTwo)
            if(mulThree <= y) next.add(mulThree)
        }
        answer = [...next]
        count++
    }
    
    return -1;
}