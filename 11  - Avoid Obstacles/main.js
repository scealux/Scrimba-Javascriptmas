/*
    Returns minimal distance of ~regular~ jumps to avoid obstacles
     _ _x_ _x_x_x_ _x
    1 2 3 4 5 6 7 8 9
    - - - ^ - - - ^ - - - ^
*/

function avoidObstacles(nums) {
    for (let jl = 1; jl < Math.max.apply(null, nums); jl++) {
        if (nums.every((el) => el%jl !== 0 )) { return jl }
    }
}

/**
* Test Suite 
*/

describe('avoidObstacles()', () => {
    it('returns minimal distance of regular jumps to avoid obstacles', () => {
        const nums = [5, 3, 6, 7, 9];
        const result = avoidObstacles(nums);
        console.log("result: ", result);
        expect(result).toBe(4);
    });
});

describe('avoidObstacles()', () => {
    it('returns minimal distance of regular jumps to avoid obstacles', () => {
        const nums = [2, 3, 4, 5, 7, 8, 9];
        const result = avoidObstacles(nums);
        console.log("result: ", result);
        expect(result).toBe(6);
    });
});

describe('avoidObstacles()', () => {
    it('returns minimal distance of regular jumps to avoid obstacles', () => {
        const nums = [3,5,7,9];
        const result = avoidObstacles(nums);
        console.log("result: ", result);
        expect(result).toBe(2);
    });
});

describe('avoidObstacles()', () => {
    it('returns minimal distance of regular jumps to avoid obstacles', () => {
        const nums = [2,4,6,8,10];
        const result = avoidObstacles(nums);
        console.log("result: ", result);
        expect(result).toBe(7);
    });
});