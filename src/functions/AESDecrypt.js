const CryptoJS = require('crypto-js');

const AESDecrypt = (message, key) => {
  const bytes = CryptoJS.AES.decrypt(message, key);
  const decryptedImsMasterId = bytes.toString(CryptoJS.enc.Utf8);
  return decryptedImsMasterId;
};

module.exports = AESDecrypt;
