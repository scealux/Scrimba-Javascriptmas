function extractMatrixColumn(matrix, column) {
    return matrix.map( el=> el[column] )
}

//Test Suite
describe('extractMatrixColumn()', () => {
    it('returns largest positive integer possible for digit count', () => {
        const matrix = [[1, 1, 1, 2], [0, 5, 0, 4], [2, 1, 3, 6]];
        const column = 2;
        const result = extractMatrixColumn(matrix, column);
        console.log("result: ", result);
        expect(result).toEqual([1, 0, 3]);
    });
});

describe('extractMatrixColumn()', () => {
    it('returns largest positive integer possible for digit count', () => {
        const matrix = [[1, 1, 1, 2], [0, 5, 0, 4], [2, 1, 3, 6], [2, 1, 3, 6]];
        const column = 3;
        const result = extractMatrixColumn(matrix, column);
        console.log("result: ", result);
        expect(result).toEqual([2, 4, 6, 6]);
    });
});