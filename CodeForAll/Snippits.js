// https://www.arealme.com/         // IQ test //

// LISTS WITH LETTERS AND NUMBERS
var vowels = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u'];
var consonants = ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'X', 'Z', 'W', 'Y', 'b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'x', 'z'];
var chars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var charNums = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

// A SIMPLE WHILE LOOP
// var age = 10;
// var num = 0;

// while (age <= 50){
//     num++;
//     age++;
//     console.log('This is run nr:', num, 'and age is:', age);

// }

// STRING METHODES
var string = '1a2345';
console.log(string.indexOf('a'));       //  1
console.log(string.charAt(1));          //  a
console.log(string.slice(1, 3));         //  a2
console.log('1a2b'.slice(2, 3));         //  2


// RANDOM GUESSING GAME
var target = Math.ceil(Math.random() * 10);
console.log('\nTarget is:', target);
var guess;
var tries = 5;

while (tries > 0) {
    guess = Math.ceil(Math.random() * 10);
    console.log(guess);
    tries--;
    if (guess === target) {
        console.log('You guessed:', guess, '\nIn only', (5 - tries), 'try!');
        break;

    } else if (tries === 0) {
        console.log('No more tries!');
        break;
    }

}

var random = Math.ceil(Math.random(0) * 50);

// check if the number can be multiplied by 2 and print them
for (var x = random; x <= random.length; x++) {
    if (x % 2 === 0) {
        console.log(x, 'is divisible by 3!');
    }
}
