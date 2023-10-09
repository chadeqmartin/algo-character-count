const char = require("./charCount");

describe("test charCount for 'aaabbc'", () => {
    let result_1 = char.charCount("aaabbc");
    test("result_1[0][0] === 'a'", () => {
        expect(result_1[0][0]).toBe('a');
    });
    test("result_1[0][1] === 3", () => {
        expect(result_1[0][1]).toBe(3);
    });
    test("result_1[1][0] === 'b'", () => {
        expect(result_1[1][0]).toBe('b');
    });
    test("result_1[1][1] === 2", () => {
        expect(result_1[1][1]).toBe(2);
    });
    test("result_1[2][0] === 'c'", () => {
        expect(result_1[2][0]).toBe("c");
    });
    test("result_1[2][1] === 1", () => {
        expect(result_1[2][1]).toBe(1);
    })
});

describe("tests charCount for 'an apple a day will keep the doctor away'", () => {
    let result_2 = char.charCount("an apple a day will keep the doctor away")
    test("result_2[0][0] === 'a'", () => {
        expect(result_2[0][0]).toBe('a');
    });
    test("result_2[0][1] === 6", () => {
        expect(result_2[0][1]).toBe(6);
    });
    test("result_2[1][0] === 'e'", () => {
        expect(result_2[1][0]).toBe('e');
    });
    test("result_2[1][1] === 4", () => {
        expect(result_2[1][1]).toBe(4);
    });
    test("result_2[2][0] === 'l'", () => {
        expect(result_2[2][0]).toBe('l');
    });
    test("result_2[2][1] === 3", () => {
        expect(result_2[2][1]).toBe(3);
    });
    test("result_2[3][0] === 'p'", () => {
        expect(result_2[3][0]).toBe('p');
    });
    test("result_2[3][1] === 3", () => {
        expect(result_2[3][1]).toBe(3);
    });
    test("result_2[4][0] === 'd'", () => {
        expect(result_2[4][0]).toBe('d');
    });
    test("result_2[4][1] === 2", () => {
        expect(result_2[4][1]).toBe(2);
    });
    test("result_2[5][0] === 'o'", () => {
        expect(result_2[5][0]).toBe('o');
    });
    test("result_2[5][1] === 2", () => {
        expect(result_2[5][1]).toBe(2);
    });
    test("result_2[6][0] === 't'", () => {
        expect(result_2[6][0]).toBe('t');
    });
    test("result_2[6][1] === 2", () => {
        expect(result_2[6][1]).toBe(2);
    });
    test("result_2[7][0] === 'w'", () => {
        expect(result_2[7][0]).toBe('w');
    });
    test("result_2[7][1] === 2", () => {
        expect(result_2[7][1]).toBe(2);
    });
    test("result_2[8][0] === 'y'", () => {
        expect(result_2[8][0]).toBe('y');
    });
    test("result_2[8][1] === 2", () => {
        expect(result_2[8][1]).toBe(2);
    });
    test("result_2[9][0] === 'c'", () => {
        expect(result_2[9][0]).toBe('c');
    });
    test("result_2[9][1] === 1", () => {
        expect(result_2[9][1]).toBe(1);
    });
    test("result_2[10][0] === 'h'", () => {
        expect(result_2[10][0]).toBe('h');
    });
    test("result_2[10][1] === 1", () => {
        expect(result_2[10][1]).toBe(1);
    });
    test("result_2[11][0] === 'i", () => {
        expect(result_2[11][0]).toBe('i');
    });
    test("result_2[11][1] === 1", () => {
        expect(result_2[11][1]).toBe(1);
    });
    test("result_2[12][0] === 'k'", () => {
        expect(result_2[12][0]).toBe('k');
    });
    test("result_2[12][1] === 1", () => {
        expect(result_2[12][1]).toBe(1);
    });
    test("result_2[13][0] === 'n'", () => {
        expect(result_2[13][0]).toBe('n');
    });
    test("result_2[13][1] === 1", () => {
        expect(result_2[13][1]).toBe(1);
    });
    test("result_2[14][0] === 'r'", () => {
        expect(result_2[14][0]).toBe('r');
    });
    test("result_2[14][1] === 1", () => {
        expect(result_2[14][1]).toBe(1);
    });
    
});




//console.log(result_1[0][0] === 'a")
//console.log(result_1[0][1] === 3)
//console.log(result_1[1][0] === "b")
//console.log(result_1[1][1] === 2)
//console.log(result_1[2][0] === "c")
//console.log(result_1[2][1] === 1)

//console.log(result_2[0][0] === 'a')
//console.log(result_2[0][1] === 6)
//console.log(result_2[1][0] === 'e')
//console.log(result_2[1][1] === 4)
//console.log(result_2[2][0] === 'l')
//console.log(result_2[2][1] === 3)
//console.log(result_2[3][0] === 'p')
//console.log(result_2[3][1] === 3)
//console.log(result_2[4][0] === 'd')
//console.log(result_2[4][1] === 2)
//console.log(result_2[5][0] === 'o')
//console.log(result_2[5][1] === 2)
//console.log(result_2[6][0] === 't')
// console.log(result_2[6][1] === 2)
// console.log(result_2[7][0] === 'w')
// console.log(result_2[7][1] === 2)
// console.log(result_2[8][0] === 'y')
// console.log(result_2[8][1] === 2)
// console.log(result_2[9][0] === 'c')
// console.log(result_2[9][1] === 1)
// console.log(result_2[10][0] === 'h')
// console.log(result_2[10][1] === 1)
// console.log(result_2[11][0] === 'i')
// console.log(result_2[11][1] === 1)
// console.log(result_2[12][0] === 'k')
// console.log(result_2[12][1] === 1)
// console.log(result_2[13][0] === 'n')
// console.log(result_2[13][1] === 1)
// console.log(result_2[14][0] === 'r')
// console.log(result_2[14][1] === 1)