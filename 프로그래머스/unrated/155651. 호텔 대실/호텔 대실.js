function solution(book_time) {
    const result = []
    let count = 0;
    const sortedBookTime = book_time.sort((a,b)=> {
        if(a[0].replace(':','') === b[0].replace(':','')){
            return a[1].replace(':','') - b[1].replace(':','')
        }
        return a[0].replace(':','') - b[0].replace(':','')
    })
    sortedBookTime.forEach(reservationTime =>{
        // 방을 돈다
        for (let room = 0; room < result.length; room++){
            // 룸에 배정되어 있는 마지막 시간과 비교
            const cleanTime = result[room][result[room].length-1][1].split(':')
            // 마지막 시간에 10분 추가
            cleanTime[1] = Number(cleanTime[1]) + 10;
            
            if(Number(cleanTime[1]) >= 60){
                cleanTime[0] = Number(cleanTime[0]) + 1
                    if(cleanTime[1] - 60 === 0){
                        cleanTime[1] = '00'
                    }
                    else{
                        cleanTime[1] = '0' + String(Number(cleanTime[1]) - 60)
                    }
            }
            if(Number(cleanTime.join('')) <= Number(reservationTime[0].replace(':',''))){
                result[room].push(reservationTime);
                return false;
            }
        }
        // 새로운 룸 추가
        result.push([[...reservationTime]])
    })
    return result.length

}          