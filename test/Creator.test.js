const Creator = require('../lib/Creator.js');

describe('Creator', () => {

    describe('Instantiate', () => {
        it('should be an instance of Creator class', () => {
            const creator = new Creator();

            expect(creator).toBeInstanceOf(Creator);
        });

    });


});