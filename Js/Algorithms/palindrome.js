const isPalindrome = (text) => {
    let textArray = text.toLowerCase().replace(/[^a-z]/g, ``).trim();
    
    if (textArray === textArray.split(``).reverse().join(``)) {
        console.log(`Is Palindrome`);
    } else {
        console.log(`Is not Palindrome`);
    }
}

isPalindrome(`Madam I'm Adam`);
isPalindrome(`teste`);
isPalindrome(`nops`);