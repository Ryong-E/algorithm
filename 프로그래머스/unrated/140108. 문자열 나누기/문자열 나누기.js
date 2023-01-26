function solution(s) {
    let answer = 0;
    let count = 0;
    let currentWord;
    
    for(let i = 0; i<s.length;i++){
        
        if(count === 0){
            answer++;
            currentWord = s[i];
            count++
            continue;
        }
        
        if(currentWord !== s[i]){
            count--;
            continue;
        } 
        
        count++;
    }
    
    return answer
}