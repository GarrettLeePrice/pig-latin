# _Pig Latin Translator_

#### _Takes word(s) input by user and translates into pig latin_

#### By _**{Josh Huffman & Garrett Price}**_

## Description

_User enters a word(s) and the program translates into pig latin and outputs new pig latin word(s)_

## Setup/Installation Requirements

* _Web browser_
* _Internet connection_


## Support and contact details

_{j.m.huffman@gmail.com or garrettleeprice@gmail.com}_

## Technologies Used

_{HTML, Javascript}_

### License

*{MIT}*


### Specs

* The program does nothing to non-alphabetical characters, since they do not contain consonants or vowels.
    - Example Input:3
    - Example Output:3

* The program adds "ay" to the end of single-letter words beginning with a vowel.
    - Example Input: i
    - Example Output: iay

* The program adds "ay" to the end of multiple-letter words beginning with a vowel.
    - Example Input: apple
    - Example Output: appleay


* The program moves first consonant to the end of the word, and adds ay.
    - Example Input: word
    - Example Output: ordway

* The program moves the letter "y" to the end of the word, in words that begin with "y".

    - Example Input: yellow
    - Example Output: ellowyay

* The program moves first consecutive consonants(for words beginning with one or more consonants) to the end, and adds ay.
    - Example Input: play
    - Example Output: ayplay

* The program moves the letter "u" to the end of the word with the first consonant, if the first consonant is the letter "q".

    - Example Input: quiet
    - Example Output: ietquay

* The program moves the letter "u" to the end of the word with the first consonant, if the first consonant is the letter "q", even if the "qu" doesn't come first.

    - Example Input: squeal
    - Example Output: ealsquay

* The program takes sentences with multiple words and applies all previous steps.

    - Example Input: this is a sentence
    - Example Output: isthay isay aay entencesay













Copyright (c) 2016 **_{Josh Huffman & Garrett Price}_**
