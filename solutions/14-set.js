// BEGIN
export default (str) => {
    if (str.length === 0) {
        return 0;
    }
    let l = [];
    for (const i of str) {
        if (!(l.includes(i))) {
            l.push(i);
        }
    }
    return l.length;
}
// END