function chunkyMonkey(values, size) {
    return Array.from(Array(Math.ceil(values.length/size)).fill([]), (x, i) => Array.from( values.slice( ( i*size ), (i*size)+size) ))
}

// Test Suite 

describe('chunkyMonkey()', () => {
    it('Returns a new array chunked into arrays of a specified size', () => {
        const values = ["a", "b", "c", "d"];
        const size = 2;
        const result = chunkyMonkey(values, size);
        console.log("result: ", result);
        expect(result).toEqual([["a", "b"], ["c", "d"]]);
    });
});

describe('chunkyMonkey()', () => {
    it('Returns a new array chunked into arrays of a specified size', () => {
        const values = [0,1,2,3,4,5,6,7,8,9];
        const size = 4;
        const result = chunkyMonkey(values, size);
        console.log("result: ", result);
        expect(result).toEqual([[0,1,2,3], [4,5,6,7], [8,9]]);
    });
});

describe('chunkyMonkey()', () => {
    it('Returns a new array chunked into arrays of a specified size', () => {
        const values = [0,1,2];
        const size = 1;
        const result = chunkyMonkey(values, size);
        console.log("result: ", result);
        expect(result).toEqual([[0], [1], [2]]);
    });
});

describe('chunkyMonkey()', () => {
    it('Returns a new array chunked into arrays of a specified size', () => {
        const values = [];
        const size = 4;
        const result = chunkyMonkey(values, size);
        console.log("result: ", result);
        expect(result).toEqual([]);
    });
});