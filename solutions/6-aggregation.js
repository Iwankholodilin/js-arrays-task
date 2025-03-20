// BEGIN
export const calculateSum = (data) => {
    let summa = 0;
    for (let i = 0; i < data.length; i += 1) {
        if (data[i] % 3 === 0) {
            summa += data[i];
        }
    }
    return summa;
}
// END