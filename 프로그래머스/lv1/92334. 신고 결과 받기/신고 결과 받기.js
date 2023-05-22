function solution(id_list, report, k) {
    const answer = Array.from({length:id_list.length}).fill(0);
    
    const lists = report.reduce((prev,current)=>{
       const [repoter,target] = current.split(' ')
       if(target in prev){
           prev[target].add(repoter)
       }
       else{
           prev[target] = new Set()
           prev[target].add(repoter)
       }
    return prev;
    },{})
    
    for (const [key,value] of Object.entries(lists)){
        if(value.size >= k){
            value.forEach(v=>{
                answer[id_list.findIndex(sendMail => sendMail === v)] += 1
            })
        }
    }
    return answer;
}