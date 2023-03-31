function solution(nums) {
    const maxCount = Math.floor(nums.length / 2)
    const result = new Set(nums)
    return result.size > maxCount ? maxCount : result.size
}