// in node repl
const { default: SHA3 } = await import("crypto-js/sha3.js");
const { default: encHex } = await import("crypto-js/enc-hex.js");
const password = "" // password goes here
SHA3(password).toString(encHex)
