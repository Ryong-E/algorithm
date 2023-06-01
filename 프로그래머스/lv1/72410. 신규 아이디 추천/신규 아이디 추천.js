function solution(new_id) {
    var answer = new_id
    answer = answer.toLowerCase();
    answer = answer.replace(/[^a-z0-9\.\-\_]/g,'')
    answer = answer.replace(/\.{2,}/g,'.')
    if(answer[0] === '.'){
        answer = answer.slice(1)
    }
    if(answer[answer.length -1] === '.'){
        answer = answer.slice(0,answer.length-1)
    }
    if(answer.length === 0){
        answer = 'a'
    }
    if(answer.length >= 16){
        answer = answer.slice(0,15)
        if(answer[answer.length -1] === '.'){
            answer = answer.slice(0,answer.length-1)
        }
    }
    if(answer.length <= 2){
        const lastWord = answer[answer.length -1]
        while(answer.length !== 3){
            answer += lastWord
        }
    }
    return answer;
}
// function id_sentence(){
//     if id_sectence<2
// }