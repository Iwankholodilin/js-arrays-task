// BEGIN
export const getMax = (data) => {
    if (data.length === 0) {
        return null;
    }
    let [first, ...rest] = data;
    let maxNum = first;
    for (const num of rest) {
        maxNum = Math.max(maxNum, num);
    }
    return maxNum;
}
// END