function reverseAString(str) {
    return str.split("").reverse().join("")
    
    //return String.fromCharCode( ...Array.from( Array(str.length), (el, i)=> str.charCodeAt( (str.length-1)-i )))
    
    //Recursive
    //return (str === '') ? '' : reverseAString(str.substr(1)) + str.charAt(0) 
}

//Test Suite
describe('reverseAString()', () => {
    it('returns original string reversed', () => {
        const str = 'hello';
        const result = reverseAString(str);
        console.log("result: ", result);
        expect(result).toBe('olleh');
    });
});