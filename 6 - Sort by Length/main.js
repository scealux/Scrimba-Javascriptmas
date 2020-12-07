function sortByLength(strs) {
    return strs.sort().sort((a,b)=> (a.length > b.length) ? 1 : -1)
}
/**
* Test Suite 
*/
describe('sortByLength()', () => {
    it('sorts the strings from shortest to longest', () => {
        const strs = ["abc", "", "aaa", "a", "zz"];
        const result = sortByLength(strs);
        console.log("result: ", result);
        expect(result).toEqual(["", "a", "zz", "abc", "aaa"]);
    });
});