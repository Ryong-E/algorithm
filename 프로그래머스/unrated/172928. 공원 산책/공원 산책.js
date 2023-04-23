function solution(park, routes) {
    var answer = [];
    let location;
    park.forEach((value,index)=> {
        if(value.indexOf('S') !== -1){
         location = [index,value.indexOf('S')];
        }
        answer.push(value.split(''))})
    routes.forEach(move=>{
        const [direction,size] = move.split(' ')
        const moved = [...location]
        if(direction ==='E'){
             moved[1] += Number(size)
                if(moved[1] > park[0].length-1 || moved[1] < 0){
                    return;
                }
            for(let i =1; i<=size; i++){
                location[1] += 1
                if(answer[location[0]][location[1]] === 'X'){
                    location[1] = moved[1] - Number(size)
                    return;
                }
            }
        }
        if(direction ==='S'){
            moved[0] += Number(size)
            if(moved[0] < 0 || moved[0] > answer.length -1){
                    return;
                }
             for(let i =1; i<=size; i++){
                location[0] += 1
                if(answer[location[0]][location[1]] === 'X'){
                    location[0] = moved[0] - Number(size)
                    return;
                }
            }
        }
        
        if(direction ==='W'){
            moved[1] -= Number(size)
            if(moved[1] < 0 || moved[1] > park[0].length-1){
                    return
                }
             for(let i =1; i<=size; i++){
                location[1] -= 1
                if(answer[location[0]][location[1]] === 'X'){
                    location[1] = moved[1] + Number(size)
                    return;
                }
            }
        }
        if(direction ==='N'){
             moved[0] -= Number(size)
            if(moved[0] < 0 || moved[0] > answer.length-1){
                    return
                }
             for(let i =1; i<=size; i++){
                location[0] -= 1
                if(answer[location[0]][location[1]] === 'X'){
                    location[0]  = moved[0] + Number(size)
                    return;
                }
            }
        }
    })
    return location
}