function sumOfTwo(nums1, nums2, value) {
    return nums1.some( el => nums2.some( el2 => el+el2 == value ))
}

//Test Suite
describe('sumOfTwo()', () => {
    it('returns true if a value can be found that by adding one number from each list', () => {
        const nums1 = [1, 2, 3, 4];
        const nums2 = [10, 20, 30, 40];
        const value = 42;

        const result = sumOfTwo(nums1, nums2, value);
        console.log("result: ", result);
        expect(result).toBe(true);
    });
});

describe('sumOfTwo()', () => {
    it('returns true if a value can be found that by adding one number from each list', () => {
        const nums1 = [1, 2, 5];
        const nums2 = [10, 20, 30, 40];
        const value = 25;

        const result = sumOfTwo(nums1, nums2, value);
        console.log("result: ", result);
        expect(result).toBe(true);
    });
});

describe('sumOfTwo()', () => {
    it('returns true if a value can be found that by adding one number from each list', () => {
        const nums1 = [1, 2, 3];
        const nums2 = [10, 20, 30, 40];
        const value = 44;

        const result = sumOfTwo(nums1, nums2, value);
        console.log("result: ", result);
        expect(result).toBe(false);
    });
});