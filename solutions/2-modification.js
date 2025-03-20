// BEGIN
export const swap = (data) => {
    if (data.length < 2)
        return data;
    let a = data[0];
    data[0] = data[data.length - 1];
    data[data.length - 1] = a;
    return data;
}
// END