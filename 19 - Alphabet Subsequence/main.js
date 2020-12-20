function alphabetSubsequence(str) {
    //Searching for success case
    return str.split('').every((c,i,a,n=x=>x.charCodeAt(0))=>i==a.length-1||n(c)<n(a[i+1]))
}

/**
* Test Suite 
*/
describe('alphabetSubsequence()', () => {
    it('returns false when it has duplicate letters', () => {
        const str = 'effg';
        const result = alphabetSubsequence(str);
        console.log("result 1: ", result);
        expect(result).toBe(false);
    });

    it('returns false when NOT in ascending a - z order', () => {
        const str = 'cdce';
        const result = alphabetSubsequence(str);
        console.log("result 2:", result);
        expect(result).toBe(false);
    });
    
    it('returns true whenno duplicates and is ascending a - z order ', () => {
        const str = 'ace';
        const result = alphabetSubsequence(str);
        console.log("result 3: ", result);
        expect(result).toBe(true);
    });
});