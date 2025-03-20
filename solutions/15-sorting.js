// BEGIN
export default (data) => {
    if (data.length === 0) {
        return data;
    }
    return data.sort((a, b) => a - b);
}
// END