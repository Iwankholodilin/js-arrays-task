// BEGIN
export default (data) => {
    if (data.length === 0) {
        return '';
    }
    let result = [];
    for (let item of data) {
        result = `${result}<dt>${item[0]}</dt><dd>${item[1]}</dd>`;
    }  
    return '<dl>' + result + '</dl>';
}
// END