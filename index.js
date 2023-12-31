const Input = require('./lib/Input.js');
const Creator = require('./lib/Creator.js')
const Output = require('./lib/Output.js');

const creator = new Creator();

function main() {
    // console.log(Input);
    // console.log(new Input());
    const promiseThenReturn = (new Input).begin()
        .then((data) => {
            // return output.write(data).then((result) => {
            //     console.log(result);
            // })
            // console.log(data);
            // console.log(test);
            // resolve("test");
            // throw new Error("error...testing...error");
            // return 'test';

            const {shape, text, color} = data;

            const file = creator.createSVG(data, );

            const fileName = `${shape}_${color}-${text}`.toLowerCase();


            Output.writeOut(file, '.svg', fileName)
                .then((result) => {
                    console.log(result);
                })
                .catch((err) => {
                    console.log(err);
                });

        })
        // .then((data) => {
        //     console.log(data);
        // })
        .catch((err) => {
            console.log(err);
        });
    
    // console.log("The return of a promise.then().catch():", promiseThenReturn);
}

main();