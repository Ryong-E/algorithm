function solution(A,B){
  const _A = A.sort((a,b)=> a -b)
  const _B = B.sort((a,b) => b -a)
return _A.reduce((acc,cur,index)=> acc + (cur* _B[index]),0 )
}