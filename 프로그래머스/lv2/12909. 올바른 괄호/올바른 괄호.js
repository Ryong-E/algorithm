function solution(s){
    let stack = []
    for(let i = 0; i < s.length; i++){
        stack.push(s[i])
        if(stack[stack.length -2] === '(' && stack[stack.length -1] === ')'){
            stack.splice(stack.length -2,2)
        }
    }

    
    return !stack.length
}