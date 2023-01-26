function solution(s) {
    const answer = [];
    const text = s.split('');
    let standardText = text[0];
    let standard = 1;
    let other = 0;
    let sliceWord = String(text[0]);
        
    for(let i = 1; i <= text.length; i++){
        //두 횟수가 다른 상태에서 읽을 글자가 없을 떄, 현재까지 분리하고 종료
        if(text[i] === undefined && standard !== other) return answer.push(sliceWord);
        

        if(standard === other) {
            text.splice(0,i);
            answer.push(sliceWord);
            standardText = text[0];
            standard = 1;
            other = 0;
            sliceWord = String(text[0]);
            i = 0;
            continue;
        }
        
        if(text[i] === standardText){
            standard++
            sliceWord += text[i]
            continue;
        }
        
        other += 1;
        sliceWord += text[i];
    }
    
    return answer.length;
}