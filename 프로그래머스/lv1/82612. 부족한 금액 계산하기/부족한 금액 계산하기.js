function solution(price, money, count) {
    var answer = -1;
    let totalCost = 0
    for(let rending = 1; rending <= count; rending++){
        totalCost += price * rending
    }
    if(money - totalCost >= 0) return 0
    return (money - totalCost) * -1
}