function solution(food) {
    let answer = '';
    let deployment = '';
    
    food.forEach((food,i)=>{
        if(i===0) return;
        deployment += String(i).repeat(food/2);
    })
    
    answer+= deployment + '0';
    deployment = deployment.split('').reverse().join('');
    for(i of deployment){
        answer += i
    }

    return answer;
}