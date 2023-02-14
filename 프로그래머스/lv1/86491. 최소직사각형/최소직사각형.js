function solution(sizes) {
    let w = []
    let h = []
    
    sizes.forEach((v) => {
        w.push(Math.max(...v))
        h.push(Math.min(...v))
    })
    
    return Math.max(...w) * Math.max(...h)
}