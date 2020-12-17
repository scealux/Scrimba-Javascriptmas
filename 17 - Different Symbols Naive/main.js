function differentSymbolsNaive(str) {
    return str.split("").reduce((a, c) => a.includes(c) ? a : [...a, c], []).length
}

/**
* Test Suite 
*/
describe('differentSymbolsNaive()', () => {
    it('Returns count of unique characters', () => {
        const str = 'cabca';
        const result = differentSymbolsNaive(str);
        console.log("result: ", result);
        expect(result).toBe(3);
    });
});

describe('differentSymbolsNaive()', () => {
    it('Returns count of unique characters', () => {
        const str = 'abracadabra';
        const result = differentSymbolsNaive(str);
        console.log("result: ", result);
        expect(result).toBe(5);
    });
});

describe('differentSymbolsNaive()', () => {
    it('Returns count of unique characters', () => {
        const str = '';
        const result = differentSymbolsNaive(str);
        console.log("result: ", result);
        expect(result).toBe(0);
    });
});