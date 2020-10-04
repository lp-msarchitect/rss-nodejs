const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';

const code = (str, shift, isEncode = true) => {
  const arr = str.split('');
  const alphabet = isEncode
    ? ALPHABET
    : ALPHABET.split('')
        .reverse()
        .join('');
  const codeArr = arr.map(char => {
    const isUp = char.toUpperCase() === char;
    char = char.toLowerCase();
    const index = alphabet.indexOf(char);
    const codeIndex = (index + shift) % alphabet.length;
    let codeChar = alphabet[codeIndex];
    codeChar = isUp ? codeChar.toUpperCase() : codeChar;
    return codeChar;
  });
  return codeArr.join('');
};

module.exports = code;
