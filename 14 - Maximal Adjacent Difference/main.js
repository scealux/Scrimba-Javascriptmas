function arrayMaximalAdjacentDifference(nums) {
    //First solution, repeats itself
    //return nums.reduce((r, c, i, a) => Math.abs(c-a[i+1]) > r ? r=Math.abs(c-a[i+1]) : r)
    
    //Second solution, reduces repetition but doesn't shorten it much
    //return nums.reduce((r,c,i,a) => {let x=Math.abs(c-a[i+1]); return (x>r) ? r=x : r})
    
    //Third solution, uses default parameters 👍 
    return nums.reduce((r,c,i,a, x=Math.abs(c-a[i+1])) => ( x > r ) ? r = x : r)
}

/**
* Test Suite 
*/

describe('arrayMaximalAdjacentDifference()', () => {
    it('returns largest difference between adjacent values', () => {
        const nums = [2, 4, 1, 0];
        const result = arrayMaximalAdjacentDifference(nums);
        console.log("result 1: ", result);
        expect(result).toBe(3);
    });

    it('returns largest difference between adjacent values example 2', () => {
        const nums = [2, 9, 1, 0];
        const result = arrayMaximalAdjacentDifference(nums);
        console.log("result 2: ", result);
        expect(result).toBe(8);
    });
});