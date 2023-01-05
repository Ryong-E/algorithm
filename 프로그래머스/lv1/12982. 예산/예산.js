function solution(d, budget) {
    d.sort((a, b) => a - b);
    let a = 0;
    for(let b of d){
        if(budget < b) break;
        budget -= b;
        a += 1;
    }
     return a;
}