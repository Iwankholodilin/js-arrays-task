// BEGIN
export default (data) => {
    const checkV = Math.abs(data[0]) % 2;
    let newData = []
    for (const i of data) {
        if (Math.abs(i) % 2 === checkV) {
            newData.push(i);
        }
    }
    return newData;
}
// END