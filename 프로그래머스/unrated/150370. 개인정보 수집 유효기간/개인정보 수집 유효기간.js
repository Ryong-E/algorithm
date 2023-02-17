function solution(today, terms, privacies) {
    var answer = [];
    const toDay = new Date(today)
    const term = {}
    terms.forEach(v=>{
        const [kind,date] = v.split(' ')
        term[kind] = Number(date)
    })
    privacies.forEach((v,i)=>{
        const [startDate,kind] = v.split(' ')
        const maxDate = new Date(startDate)
        maxDate.setMonth(maxDate.getMonth() + term[kind])
        if(maxDate <= toDay) answer.push(i + 1)
    })
    return answer;
}