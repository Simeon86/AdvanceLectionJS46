console.log('//////////////////////////////////TRY ... CATCH/////////////////////////////////////////////');

try {

} catch (err) {

}

console.log('///////////////////////////////////////////////////////////////////////////////');

try {
    console.log('test')

    console.log('test two')
} catch (err) {

    console.log('Caught the error')

}

console.log('///////////////////////////////////////////////////////////////////////////////');

try {
    console.log('test')

    jgfhfkfkjftffju

    console.log('test two')
} catch (err) {

    console.log('Caught the error')

}

console.log('Still working ...')

console.log('///////////////////////////////////////////////////////////////////////////////');

try {
    console.log('test')
    // '''''

    console.log('test two')
} catch (err) {

    console.log('Caught the error')

}

console.log('Still working ...')

console.log('///////////////////////////////////////////////////////////////////////////////');

try {
    console.log('test')
    setTimeout(() => console.log('Hello World') , 1000)

    console.log('test two')
} catch (err) {

    console.log('Caught the error')

}

console.log('Still working ...')

console.log('///////////////////////////////////////////////////////////////////////////////');

try {
    console.log('test');
    setTimeout(() => {
        try {
            asijdfalfhaf
        } catch (error) {
            console.log(error)
        }
    }, 2000)
    console.log('test two');
} catch(error) {
    console.log('Caught the error');
}

console.log('Still working ...')

console.log('///////////////////////////////////////////////////////////////////////////////');

function a() {
    try{
        console.log('1');

        throw new Error('Some Error!')
    } finally {
        console.log('2')
    }
}

function b() {
    try {
        console.log('3');
        a();
        console.log('4')
    } catch(error) {
        console.log('5')
    }
}

b();

console.log('///////////////////////////////////////////////////////////////////////////////');

try {
    asdjlkasdja;
} catch (error1) {
    console.log(error1.name);
    console.log(error1.message);
    console.log(error1.stack);
}

console.log('///////////////////////////////////////////////////////////////////////////////');

let json = '{"name":"Simeon", "age": 35}';

let user = JSON.parse(json);
console.log(user)

console.log('///////////////////////////////////////////////////////////////////////////////');

let json1 = '{name: Simeon, age: 35}';
try {
let user1 = JSON.parse(json1);
    console.log(user1)
} catch(error) {
    console.log(error)
}

console.log('Still working ...')

console.log('///////////////////////////////////////////////////////////////////////////////');

try {
     
} catch {

} finally {

}

console.log('///////////////////////////////////////////////////////////////////////////////');

let json2 = '{"age": 35}';
try {
    let user = JSON.parse(json2);

    if(!user.name){
        throw new SyntaxError("Name property is required");
    }

    if(!user.age) {
        throw new SyntaxError("Age property is required")
    }
    console.log(user);
} catch(error) {
    console.log('JSON error: ' + error.message);
} finally {
    console.log('Hello World')
}

console.log('Still working ...')

console.log('///////////////////////////////////////////////////////////////////////////////');

window.onerror = function(message, url, line, col, error) {
    alert (`${message} \n At ${line}: ${col} of ${url}`);
}

function foo() {
    // bar()
}

foo();

console.log('Still working ...')

console.log('///////////////////////////////////////////////////////////////////////////////');

class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = 'Validation Error';
    }
}

function readUser(json3) {
    let user2 = JSON.parse(json3);

    if(!user2.age) {
        throw new ValidationError('Missing fiels age');
    }

    if(!user2.name) {
        throw new ValidationError('Missing field: name');
    }

    return user2;

}

try {
    let user2 = readUser('{"age": 35}')
    console.log(user2);
} catch(error) {
    if(error instanceof ValidationError) {
        console.log('Invalid data: ' + error.message)
    } else if( error instanceof SyntaxError) {
        console.log('JSON Syntax Error: ' + error.message);
    } else {
        throw error;
    }
}
