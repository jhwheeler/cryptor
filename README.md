# Cryptor
## Simple utilities for basic cryptanalysis

* Currently supports mono- and polyalphabetic substitution ciphers

### How To Use

#### Install
* `yarn` or `npm install`

#### Run
* For monoalphabetic substitution ciphers, run `yarn start /path/to/encrypted/file`. This will ouput the cipher alphabet with the count and frequency for each letter. With this information, you can easily do frequency analysis on the text to decipher it. (To see a sample, simply run `yarn start`.)
* For polyalphabetic substitution ciphers (specifically the Vigenère cipher), run `yarn vigenere /path/to/encrypted/file`. This will ouput the repeated sequences with the count for each and the distances between each instance. (To see a sample, simply run `yarn vigenere`.)

_____________________________________________________________________________________________________________

### TODO

#### v0.1
* Compare ouputted frequencies with standard frequency tables for various topics in the English language
* Convert to proper CLI

#### v0.2
* Create interactive UI with file upload and written input

#### v0.3
* Implement suggested frequency analysis results that can be modified by the user

