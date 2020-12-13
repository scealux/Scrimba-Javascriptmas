function validTime(str) {
    return Number(str.slice(0,2)) < 24 && Number(str.slice(3)) < 60
}

/**
* Test Suite 
*/
describe('validTime()', () => {
    it('returns true for valid time', () => {
        const str = '13:58';
        const result = validTime(str);
        console.log("result 1: ", result);
        expect(result).toBe(true);
    });

    it('returns false when invalid hours', () => {
        const str = '25:51';
        const result = validTime(str);
        console.log("result 1: ", result);
        expect(result).toBe(false);
    });

    it('returns false when invalid minutes', () => {
        const str = '02:76';
        const result = validTime(str);
        console.log("result 1: ", result);
        expect(result).toBe(false);
    });
});