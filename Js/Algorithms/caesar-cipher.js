const caesarCipher = (text, num) => {
    const originalText = text.toLowerCase();
    const alphabet = `abcdefghijklmnopqrstuvwxyz`.split(``);
    let newText = '';

    for (let i = 0; i < originalText.length; i++) {
        const letter = originalText[i];
        if (letter === ` `) {
            newText += letter;
        } else {
            let index = alphabet.indexOf(letter) + num;
            if (index > 25) {
                index -= 26;
            }            
            if (index < 0) {
                index += 26
            }
            newText += alphabet[index];
        }    
    }
    return newText;   
}

caesarCipher(`ecmascript review`, 5);