const CryptoJS = require('crypto-js');

const AESEncrypt = (message, key) => {
  const encryptedImsMasterId = CryptoJS.AES.encrypt(message, key).toString();
  return encryptedImsMasterId;
};

module.exports = AESEncrypt;
