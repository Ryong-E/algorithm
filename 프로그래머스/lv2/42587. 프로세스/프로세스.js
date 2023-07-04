function solution(priorities, location) {
    const taskMap = []
    var answer = 0;
    
    for(let i = 0; i <priorities.length; i++){
        taskMap.push(i)
    }
    
    while(priorities.length !== 0){
        const process = priorities.shift()
        if(priorities.find(v=> v > process)){
           priorities.push(process)
           taskMap.push(taskMap.shift())
           continue;
        }
        answer++
        if(taskMap[0] === location){
            return answer
        }
        taskMap.shift()
    }
}