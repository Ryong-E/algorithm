function solution(s) {
    const transWords = {zero:0,one:1,two:2,three:3,four:4,five:5,six:6,seven:7,eight:8,nine:9}
    for([key,value] of Object.entries(transWords)){
        const findReg = new RegExp(`${key}`,'g')
        if(findReg.test(s)){
            s = s.replace(findReg,value)
        }
    }
    return Number(s)
}