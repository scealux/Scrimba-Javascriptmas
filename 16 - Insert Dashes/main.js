function insertDashes(arr) {
    return arr.split(" ").map((el) => el.split("").join("-")).join(" ")
}

/**
* Test Suite 
*/
describe('insertDashes()', () => {
    it('insert dashes in between chars', () => {
        const value = "aba caba";
        const result = insertDashes(value);
        console.log("result: ", result);
        expect(result).toBe("a-b-a c-a-b-a");
    });
});