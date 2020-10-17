const CryptoJS = require('crypto-js');

const AESDecrypt = (message) => {
  const bytes = CryptoJS.AES.decrypt(message, process.env.AES_KEY);
  const decryptedImsMasterId = bytes.toString(CryptoJS.enc.Utf8);
  return decryptedImsMasterId;
};

module.exports = AESDecrypt;
