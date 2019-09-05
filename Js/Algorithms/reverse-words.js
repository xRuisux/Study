const reverseWords = (text) => {
    const textArray = text.toLowerCase().split(` `);
    const newTextArray = [];
    
    textArray.forEach(word => {
        let newWord = ``
        word = word.split(``);

        for (let i = word.length - 1; i >= 0; i--) {
            newWord += word[i];
        };
        newTextArray.push(newWord);        
    });
    return newTextArray.join(` `);
}

console.log(reverseWords(`texto teste testando`)); // otxet etset