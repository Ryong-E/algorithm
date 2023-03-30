function solution(numbers, hand) {
    const keypad = {1:'00',
                   2:'01',
                   3: '02',
                   4:'10',
                   5:'11',
                   6:'12',
                   7:'20',
                   8:'21',
                   9:'22',
                   '*':'30',
                   0:'31',
                   '#':'32'}
    let left = '30'
    let right = '32'
    let answer = ''
    numbers.forEach(number=>{
        if(number === 1 || number === 4 || number === 7){
            answer += 'L'
            left = keypad[number]
        }
        else if(number === 3 || number === 6 || number === 9){
            answer += 'R'
            right = keypad[number]
        }
        else{
            const nextClickNumberIndex = keypad[number]
            const leftDistance = Math.abs(nextClickNumberIndex[0] - left[0]) + Math.abs(nextClickNumberIndex[1] - left[1])
            const rightDistance = Math.abs(nextClickNumberIndex[0] - right[0]) + Math.abs(nextClickNumberIndex[1] - right[1])
            if(leftDistance < rightDistance){
                answer += 'L'
                left = nextClickNumberIndex
            }
            else if (rightDistance < leftDistance){
                answer += 'R'
                right = nextClickNumberIndex
            }
            else if (rightDistance === leftDistance){
                if(hand === 'right'){
                    answer += 'R'
                    right = nextClickNumberIndex
                }
                else{
                    answer += 'L'
                    left = nextClickNumberIndex
                }
            }
        }
    })
    return answer;
}