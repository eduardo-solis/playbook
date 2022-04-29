
const Spiderman =  require('./../app/spiderman');

describe('Unit Test for Spiderman class', () => {
    test('Test 1.- Create an spiderman object', () => { 
        
        // Here we writing the code we want to use
        // I want to instantiate a Spiderman object with this information
        const andrewGarfield = new Spiderman('Spiderman Sony', 31, 'Andrew Garfield', 2, 'Sony')

        expect(andrewGarfield.name).toBe('Spiderman Sony');
        expect(andrewGarfield.age).toBe(31);
        expect(andrewGarfield.actor).toBe('Andrew Garfield');
        expect(andrewGarfield.numberOfMovies).toBe(2);
        expect(andrewGarfield.studio).toBe('Sony');
    });

    test('Test 2.- Use the methid getInfo()', () => { 
        
        // I want to instantiate a Spiderman object with this information
        const tomHolland = new Spiderman('Spiderman Marvel', 26, 'Tom Holland', 3, 'Marvel')

        // With this line I check the function with the expected result
        expect(tomHolland.getInfo()).toBe("Hey, I'm Tom Holland from Marvel studio");
    });

})