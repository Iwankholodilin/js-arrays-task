// BEGIN
export default (str, words) => {
    let parts = str.split(' ');
    for (let i = 0; i < words.length; i += 1) {
        if (parts.includes(words[i])) {
            for (let j = 0; j < parts.length; j += 1) {
                if (parts[j] === words[i]) {
                    parts[j] = '$#%!';
                }
            }
        }
    }
    return parts.join(' ');
}
// END