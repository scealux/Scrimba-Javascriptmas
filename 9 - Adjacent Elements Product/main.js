function adjacentElementsProduct(nums) {
    return nums.reduce((ac, cur, i, ar) => (cur*ar[i+1] > ac) ? cur*ar[i+1] : ac, 0)
}
//Test Suite 

describe('adjacentElementsProduct()', () => {
    it('returns largest product of adjacent values', () => {
        // arrange
        const nums = [3, 6, -2, -5, 7, 3];
        
        // act
        const result = adjacentElementsProduct(nums);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe(21);
    });
});