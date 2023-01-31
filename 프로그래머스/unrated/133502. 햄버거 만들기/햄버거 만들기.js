function solution(ingredient) {
    var answer = 0;
    const arr = [];
    let flag = 0;
    
    for(let i =0; i < ingredient.length; i++){
        arr.push(ingredient[i]);
        
        const slice = arr.slice(flag,flag+4).join('');
        if(slice.length < 4) continue;
        
        if(slice === '1231'){
            answer += 1;
            arr.splice(flag,4);
            flag -= 2;
            if(flag < 0) flag = 0;
            continue;
        }
        
        flag += 1;
    }
    return answer;
}