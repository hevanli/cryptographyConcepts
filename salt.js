const { scryptSync, randomBytes, timingSafeEqual } = require('crypto');

users = []

function signup(email, password) {
    const salt = randomBytes(16).toString('hex');
    const hashedPassword = scryptSync(password, salt, 64).toString('hex');

    const user = { email, password: `${salt}:${hashedPassword}` }

    users.push(user);

    return user
}

function login(email, password) {
    const user = users.find(v => v.email === email);
    
    const [salt, key] = user.password.split(':');
    const hashedBuffer = scryptSync(password, salt, 64);

    const keyBuffer = Buffer.from(key, 'hex');
    const match = timingSafeEqual(hashedBuffer, keyBuffer);

    if (match) {
        return 'login success!'
    } else {
        return 'login fail!'
    }
}

signup('evanlicubs@gmail.com','12345');
console.log(login('evanlicubs@gmail.com','12345'))

// hash function always returns same value, bad cause there are rainbow tables for common pswds 
// salt, adds random value to a pswd before hash, making it harder to guess