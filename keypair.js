const { generateKeyPairSync } = require('crypto');
// rsa: rivest-shamir-adleman
const { privateKey, publicKey } = generateKeyPairSync('rsa', {
    modulusLength: 2048, // legnth of your key in bits
    publicKeyEncoding: {
        type: 'spki', // rec to be 'spki' by Node.js docs
        format: 'pem', // return format pem: privacy enhanced mail, to show keys in base64 format
    },
    privateKeyEncoding: {
        type: 'pkcs8', // rec to be 'pkcs8' by Node.js docs
        format: 'pem',
        // cipher: 'aes-256-cbc',
        // passphrase: 'top secret'
    },
});

console.log(publicKey);
console.log(privateKey);

module.exports = {
    privateKey, publicKey
}








// public key crypto system
// two mathematically linked keys, public and private
