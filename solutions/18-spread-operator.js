// BEGIN
export const flatten = (data) => {
    if (data.length === 0) {
        return data;
    }
    let newData = [];
    for (const i of data) {
        Array.isArray(i) ? newData.push(...i) : newData.push(i);
    }
    return newData;
}
// END