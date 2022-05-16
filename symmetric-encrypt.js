const { createCipheriv, randomBytes, createDecipheriv } = require('crypto');
// iv = initial vector

// Cipher

const message = 'i like turtles';
const key = randomBytes(32);
const iv = randomBytes(16);

const cipher = createCipheriv('aes256', key, iv);

// Encrypt

const encryptedMessage = cipher.update(message, 'utf8', 'hex') 
                        + cipher.final('hex');

// Decrypt
const decipher = createDecipheriv('aes256', key, iv);
const decryptedMessage = decipher.update(encryptedMessage, 'hex', 'utf-8') + decipher.final('utf8');

console.log("encrypted message: " + encryptedMessage);
console.log("deciphered message: " + decryptedMessage);

// share a secret, and also allow them to read it
// take message, scramble into cipher text, provide key/pswd, allowing someone to decrypt/read it


// problem with symmetric: sender and receiver need the password, not practical for two diff parties to agree on a shared password

