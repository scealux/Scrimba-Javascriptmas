function sumOddFibonacciNumbers(num) {
    // First Attempt
    // let set = [1,1]
    // let odds = [1,1]
    // while (set[0]+set[1] < num) {
    //     set.push(set[0] + set[1])
    //     set.shift()
    //     if (set[1]%2 !== 0) { odds.push(set[1]) } 
    // }
    // return odds.reduce((ac,cur) => ac+cur)
    
    //Second Attempt
    let fibs = [0,1] //initial sequence
    let next = () => fibs[fibs.length-2] + fibs[fibs.length-1] //Next in the sequence
    while (next() < num) { fibs.push(next())} //Fill the fibs array until next > num
    return fibs.reduce((ac, cur) => (cur%2 !== 0) ? ac+cur : ac) //Return the sum of the odds
}



/**
* Test Suite 
*/
describe('sumOddFibonacciNumbers()', () => {
    it('returns sum of all odd Fibonnci numbers', () => {
        // arrange
        const num = 10;
        
        // act
        const result = sumOddFibonacciNumbers(num);

        // log
        console.log("result 1: ", result);
        
        // assert
        expect(result).toBe(10);
    });

    it('returns sum of all odd Fibonnci numbers 2nd example', () => {
        // arrange
        const num = 1000;
        
        // act
        const result = sumOddFibonacciNumbers(num);

        // log
        console.log("result 2: ", result);
        
        // assert
        expect(result).toBe(1785);
    });
});