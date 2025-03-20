const _ = require("lodash"); 

// BEGIN
export default (dataOne, dataTwo) => {
    const first = _.uniq(dataOne);
    const second = _.uniq(dataTwo);
    let k = 0;
    for (const i of first) {
        for (const j of second) {
            i === j ? k += 1 : k;
        }
    }
    return k;
}
// END