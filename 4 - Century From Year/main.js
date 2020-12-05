function centuryFromYear(num) {
    return Math.floor(( num%100 === 0 ) ? num/100 : (num/100)+1 )
}

//Test Suite
describe('centuryFromYear()', () => {
    it('returns current century', () => {
        const year = 1905;
        const result = centuryFromYear(year);
        console.log("result 1: ", result);
        expect(result).toBe(20);
    });
    
    it('returns current century for edge case of start of century', () => {
        const year = 1700;
        const result = centuryFromYear(year);
        console.log("result 2: ", result);
        expect(result).toBe(17);
    });
    
    it('returns current century for edge case of end of century', () => {
        const year = 1899;
        const result = centuryFromYear(year);
        console.log("result 2: ", result);
        expect(result).toBe(19);
    }); 
});