var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
var consonants = ["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","y","z"];
function checkWord(word){
  if (vowels.includes(word[0])){
    var newWord = word + "ay";
    return newWord;
  } else if (consonants.includes(word[0])){
    var newWord = word.split("");
    var removeLetter = [];
    for(;consonants.includes(newWord[0]);){
      removeLetter.push(newWord.splice(0,1));

    }
    removeLetter.push("ay");
    newWord = newWord.join("") + removeLetter.join("");
    return newWord;
  } else {
    return word;
  }
}

$(document).ready(function(){
  $("#submitBtn").click(function(){
    var word = $("#input").val();
    alert(checkWord(word));
  });

});








// * The program does nothing to non-alphabetical characters, since they do not contain consonants or vowels.
//     - Example Input:3
//     - Example Output:3
//
// * The program adds "ay" to the end of single-letter words beginning with a vowel.
//     - Example Input: i
//     - Example Output: iay
//
// * The program adds "ay" to the end of multiple-letter words beginning with a vowel.
//     - Example Input: apple
//     - Example Output: appleay
//
//
// * The program moves first consonant to the end of the word, and adds ay.
//     - Example Input: word
//     - Example Output: ordway
//
// * The program moves the letter "y" to the end of the word, in words that begin with "y".
//
//     - Example Input: yellow
//     - Example Output: ellowyay
//
// * The program moves first consecutive consonants(for words beginning with one or more consonants) to the end, and adds ay.
//     - Example Input: play
//     - Example Output: ayplay
//
// * The program moves the letter "u" to the end of the word with the first consonant, if the first consonant is the letter "q".
//
//     - Example Input: quiet
//     - Example Output: ietquay
//
// * The program moves the letter "u" to the end of the word with the first consonant, if the first consonant is the letter "q", even if the "qu" doesn't come first.
//
//     - Example Input: squeal
//     - Example Output: ealsquay
//
// * The program takes sentences with multiple words and applies all previous steps.
//
//     - Example Input: this is a sentence
//     - Example Output: isthay isay aay entencesay
