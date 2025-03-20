// BEGIN
export default (data) => {
    let k = 0;
    for (let i = 0; i < data.length; i += 1) {
        let result = Math.sign(data[i][0]-data[i][1])
	if (result === 1) {
	    k += 1;
	}
	else if (result === -1) {
	    k -= 1;
	}
    }
    if (k > 0) {
        return 'canada';
    }
    else if (k < 0) {
        return 'ussr';
    }
    else {
        return null;
    }
}
// END