function solution(s, skip, index) {
    var answer = '';
    s.split('').forEach(word=>{
        const arr = []
        let initASC = word.charCodeAt()
        while(arr.length !== index){
            initASC++
            if(initASC > 122){
                initASC = 97
            }
            if(skip.includes(String.fromCharCode(initASC))){
                continue;
            }
            arr.push(String.fromCharCode(initASC))
        }
        answer += arr[arr.length -1]
    })
    return answer;
}