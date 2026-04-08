let promptss = prompt("Type a sentence:");
function BiggestWord(prompts) {
    let words = prompts.split(" ");
    let biggestWord = "";
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > biggestWord.length) {
            biggestWord = words[i];
        }
    }
    return biggestWord;
}
let promptlength = promptss.split(" ").length;
console.log(`There are ${promptlength} words in the sentence.`);
console.log(BiggestWord(promptss));
let MappedWords = promptss.split(" ").map(word => word.toUpperCase());
console.log(MappedWords);
let FilteredWords = promptss.split(" ").filter(word => word.length < 4);
console.log(FilteredWords);
