// BEGIN
export const get = (data, i, other = null) => {
    if (i >= 0 && i < data.length)
        return data[i];
    else {  
	return other;
    }
}
// END