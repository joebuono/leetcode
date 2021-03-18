/*

The trick with a encrypt/decrypt problem is to reverse/flip the operations. 

For example, to encrypt a message, we do these steps:
1. Add the value of the previous letter (or 1, in the first case)
2. Subtract 26 until the ascii value is within the range of lowercase letters (97 - 122)

To reverse this process:
1. Subtract the value of the previous step
2. Add 26 until its within range

*/

function decrypt(word) {
  let secondStep = 1;
  let originalWord = '';
  
  for (let i = 0; i < word.length; i++) {
    let newLetterAscii = word[i].charCodeAt(0) - secondStep;
    
    while (newLetterAscii < 97) {
      newLetterAscii += 26;
    }
    
    originalWord += String.fromCharCode(newLetterAscii);
    secondStep += newLetterAscii; // notice that it's +=, not =
  }
  
  return originalWord;
}