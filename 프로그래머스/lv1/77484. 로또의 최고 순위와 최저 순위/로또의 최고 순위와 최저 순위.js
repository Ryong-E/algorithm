const rank = {
    0:6,
    1:6,
    2:5,
    3:4,
    4:3,
    5:2,
    6:1
}

function solution(lottos, win_nums) {
    var answer = [0,0];
    let count = 0
    let zero = 0;
    lottos.forEach((value,index)=>{
        if(value === 0){
            zero += 1;
        }
        if(win_nums.includes(value)){
            count++;
        }
    })
    answer[0] = rank[count + zero];
    answer[1] = rank[count];
    
    return answer;
}