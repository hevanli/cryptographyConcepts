const { createSign, createVerify } = require('crypto');
const { publicKey, privateKey } = require('./keypair');

const message = 'this data must be signed';

/// SIGN

const signer = createSign('rsa-sha256');

signer.update(message);

const signature = signer.sign(privateKey, 'hex');

/// VERIFY

const verifier = createVerify('rsa-sha256');

verifier.update(message);

const isVerified = verifier.verify(publicKey, signature, 'hex');


// signing: most of the time you don't have to encrypt data
// u only have to validate it came from a trusted party
// digital signature: letter in mail w/ sensitive info, u need to trust it came from trusted person, so u req them to sign it in blood, also can't be tampered with, so they seal it
// sender uses private key to send hash of original message
// private key guarantees authenticity, blood, hash guarantees message can't be tampered with
// recipient can use public key to validate the authenticity