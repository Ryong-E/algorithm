function solution(babbling) {
    const rex1 = /(aya|ye|woo|ma)\1/
    const rex2 = /^(aya|ye|woo|ma)+$/
    let answer = 0
    for (const b of babbling) {
        // 중복이 있는지
        const m = rex1.exec(b)
        if (m) continue
        // 발음가능한 것만 있는지
        const m2 = rex2.exec(b)
        if (!m2) continue

        answer++
    }

    return answer
}