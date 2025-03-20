// BEGIN
export default (str, prefix) => {
    let newStr = [];
    for (let i = 0; i < str.length; i += 1) {
        newStr.push(`${prefix} ${str[i]}`);
    }
    return newStr;
}
// END