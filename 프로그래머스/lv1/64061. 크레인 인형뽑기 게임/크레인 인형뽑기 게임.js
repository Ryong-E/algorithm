// function solution(board, moves) {
//     var answer = 0;
//     const basket = [];
//     let index = 0
    
//     moves.forEach(move => {
//         if(board[move -1].every(v=>v===0)) return
        
//         let item = board[move -1].pop()
        
//         while(item === 0){
//             item = board[move -1].pop()
//         }
        
//         if(item === 0 && board[move -1].length ===0) return
        
//         if(basket.length === 0){
//             basket.push(item)
//             index = 0
//             return
//         }
        
//         if(basket[index] === item){
//             basket.pop()
//             answer += 2
//             index--
//             if(index < 0) index = 0
//             return
//         }
        
//         basket.push(item)
//         index++
        
        
//     })
//     return answer;
// }

function solution(board, moves) {
    var answer = 0;
    let result = [];

    moves.map((d,i)=> {
        for(let j=0; j<board.length; j++){

            if(board[j][d-1] !== 0){

                if(result[result.length-1] === board[j][d-1]){
                    result.pop();
                    answer += 2;
                    board[j][d-1] = 0
                    return;
                } else {
                result.push(board[j][d-1]);
                board[j][d-1] = 0
                return;    
                }

            }
        }
    })
    return answer;
}