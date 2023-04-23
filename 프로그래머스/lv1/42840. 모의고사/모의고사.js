function solution(answers) {
    const answer = []
    const firstpattern = [1,2,3,4,5];
    const firstlength = firstpattern.length;
    const twicepattern = [2,1,2,3,2,4,2,5];
    const twicelength = twicepattern.length;
    const thirdpattern = [3,3,1,1,2,2,4,4,5,5];
    const thirdlength = thirdpattern.length;
    let score = [0,0,0];
    
    for(let i = 0; i < answers.length; i++){
        if (answers[i] === firstpattern[i % firstlength]) score[0] += 1;
        if (answers[i] === twicepattern[i % twicelength]) score[1] += 1;
        if (answers[i] === thirdpattern[i % thirdlength]) score[2] += 1;
    }
    const max = Math.max(...score);
    for(let i = 0; i < 3; i++){
        if (score[i] === max) answer.push(i + 1);
    }
    return answer;
}