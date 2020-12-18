function arrayPreviousLess(nums) {
    //For each element(c) in nums => get an array of the elements to the left (slice) => reduce that to last lesser number or -1 
    return nums.map((c, i, a) => a.slice(0, i).reduce((ac, x) => (x < c) ? x : ac, -1))
}

//Test Suite 
describe('arrayPreviousLess()', () => {
    it('shift previous postions from the left to a smaller value or store -1', () => {
        const nums = [3, 5, 2, 4, 5];
        const result = arrayPreviousLess(nums);
        console.log("result: ", result);
        expect(result).toEqual([-1, 3, -1, 2, 4]);
    });
});

describe('arrayPreviousLess()', () => {
    it('shift previous postions from the left to a smaller value or store -1', () => {
        const nums = [1, 2, 3, 4, 5];
        const result = arrayPreviousLess(nums);
        console.log("result: ", result);
        expect(result).toEqual([-1, 1, 2, 3, 4]);
    });
});

describe('arrayPreviousLess()', () => {
    it('shift previous postions from the left to a smaller value or store -1', () => {
        const nums = [5, 4, 3, 2, 1];
        const result = arrayPreviousLess(nums);
        console.log("result: ", result);
        expect(result).toEqual([-1, -1, -1, -1, -1]);
    });
});