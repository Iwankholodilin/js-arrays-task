// BEGIN
export default (data) => {
    if (data.length === 0) {
        return null;
    }
    let summa = 0;
    for (const value of data) {
        summa += value;
    }
    let result = summa / data.length;
    return result;
}
// END