function solution(n)
{
    return String(n).split('').reduce((p,v)=>Number(p)+Number(v),0)
}