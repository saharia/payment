"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateApiKey = void 0;
const crypto_1 = require("crypto");
function generateApiKey() {
    const secretKey = (Math.random() + 1).toString(36).substring(7);
    const secretIV = (Math.random() + 1).toString(36).substring(7);
    const key = (0, crypto_1.createHash)('sha512').update(secretKey, 'utf-8').digest('hex').substring(0, 32);
    const iv = (0, crypto_1.createHash)('sha512').update(secretIV, 'utf-8').digest('hex').substring(0, 16);
    let cipher = (0, crypto_1.createCipheriv)('aes-256-cbc', Buffer.from(key), iv);
    let encrypted = cipher.update(crypto.randomUUID());
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    console.log(encrypted.toString('hex'));
    return encrypted.toString('hex');
}
exports.generateApiKey = generateApiKey;
//# sourceMappingURL=generate-api-key.js.map