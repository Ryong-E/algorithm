function solution(want, number, discount) {
    let startDay = 0
    let result = 0
    
    while(true){
        const buyList = number.reduce((prev,current,index) => {
            const result = Array.from({length:current}).fill(want[index])
            return prev.concat(result)
        },[])
        
        loop: for(let i = startDay; i < discount.length; i++){
            const findIndex = buyList.indexOf(discount[i])
            if(findIndex !== -1){
                buyList.splice(findIndex,1)
            }
            if(findIndex === -1){
                break;
            }
        }
        
        if(buyList.length === 0){
            result++
        }
        if(startDay === discount.length){
            startDay = -1
            break;
        }
        else{
            startDay++
        }
    }
    
    return result
}