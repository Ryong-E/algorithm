function solution(storey) {
    let count = 0;
    const calculate = String(storey).split('').map(Number)
    for(let i = calculate.length - 1; i > -1; i--){
        if(i === 0){
            if(calculate[i] === 10){
                count += 1
                continue
            }
            if(calculate[i] <= 5) count += calculate[i]
            else{
                count += 10 - calculate[i]
                count += 1
            }
            continue
        }
        
        if(calculate[i] === 10){
            calculate[i - 1] = calculate[i - 1] + 1
            continue
        }
        if(calculate[i] >= 5 && calculate[i -1] >= 5){
            count += 10 - calculate[i]
            calculate[i - 1] = calculate[i - 1] + 1
            continue
        }
        
        if(calculate[i] <= 5){
            count += calculate[i]
            continue
        }
        
        if(calculate[i] >= 6){
            count += 10 - calculate[i]
            calculate[i - 1] = calculate[i - 1] + 1
        }
        
    }
    return count;
}