const { createHash } = require('crypto'); // gets "createHash" from the "crypto" module

//Create a string hash

function hash(input) {
    return createHash('sha256').update(input).digest('hex');
}

let password = "test";
const hash1 = hash(password);

password = "test";
const hash2 = hash(password);
const match = hash1 === hash2;
console.log(match ? 'good password' : "password doesn't match")

// input: any length -> hashing function -> fixed length value
// function always provides same output given input
// difficult to reverse engineer
// store data without knowing its true value : pswds

