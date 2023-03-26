function solution(numbers) {
    const maxSumNumber = 45
    let sumNumbers = 0
    numbers.forEach(number=> sumNumbers += number)
    return maxSumNumber - sumNumbers
}