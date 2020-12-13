function extractEachKth(nums, index) {
    return nums.filter((x, i)=> (i+1)%index !== 0)
}

/**
* Test Suite 
*/
describe('extractEachKth()', () => {
    it("Returns the array minus every n'th element", () => {
        const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const index = 3;
        
        const result = extractEachKth(nums, index);
        console.log("result: ", result);
        expect(result).toEqual([1, 2, 4, 5, 7, 8, 10]);
    });
});

describe('extractEachKth()', () => {
    it("Returns the array minus every n'th element", () => {
        const nums = [5, 6, 6, 4, 5, 6, 2, 8, 9, 11];
        const index = 4;
        
        const result = extractEachKth(nums, index);
        console.log("result: ", result);
        expect(result).toEqual([5, 6, 6, 5, 6, 2, 9, 11]);
    });
});