const { publicEncrypt, privateDecrypt } = require('crypto');
const { publicKey, privateKey } = require('./keypair');

const message = 'thebritish are coming!';

const encryptedData = publicEncrypt( // put in mailbox, combine public key w/ message in buffer format -> encrypts so only mailbox owner can read it
    publicKey,
    Buffer.from(message) 
);

console.log(encryptedData.toString('hex'))

const decryptedData = privateDecrypt(
    privateKey,
    encryptedData
);

console.log(decryptedData.toString('utf-8'));

// whenever u go to a website with https
// browser finds public key of ssl certificate installed on the website, public key encrypts data u send, prevents hackers to gain info, decrypted by trusted website's private key