// NOT PASSED //

var correctGuesses = 0;
var chars = ['A','B', 'C', 'D'];

var randomPwd = chars[Math.ceil(Math.random() * (chars.length - 1))] + chars[Math.ceil(Math.random() * (chars.length - 1))] + chars[Math.ceil(Math.random() * (chars.length - 1))] + chars[Math.ceil(Math.random() * (chars.length - 1))];

var guess = [];
var correct = '';


var maxTries = randomPwd.length;
//console.log('randomPwd =', randomPwd);

    for (var x = 0; x < chars.length; x++){
        //console.log('This is randPwd = ', randomPwd[x]);
        for (var y = 0; y < chars.length; y++){
            //console.log('This is charY = ', chars[y]);
            if (chars[y] === randomPwd[x]){
                guess.push(chars[y]);
                correctGuesses++;
                console.log('Found', correctGuesses, 'character');
                break;
            }else if (chars[y] !== randomPwd[x] && correctGuesses > 4){switch(chars[y] !==randomPwd[x]){
                case correctGuesses >= randomPwd.length:
                    correctGuesses = 0;
                    console.log('Starting over');
                    break;
                default:
                    //correctGuesses = correctGuesses;
                    break;
            }
                                                                      }
        }
    }
	// For loop to make a sting from elements in the array .
    for (var i =0; i < guess.length; i++){
        correct += guess[i];
        
    }if (correct === randomPwd){
        console.log('Terminal hacked!');
    }

/*var correctGuesses = 0;
var incorrectGuesses = 0;
var guess = 'damn'; // random gen with math.ceil as index and for look x 4
var chars = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
var pwd = 'damn';
var crckdpwd;

while (guess.length !== correctGuesses){
    for (var i = 0; i < 26; i++){
        if (chars.charAt(i) === guess.charAt(i)){
            correctGuesses++;
            correct = correct + guess.charAt(i);
            console.log('Found ' + correctGuesses + ' characters');
            if (guess.length === correct.lenght){
                break;
            }break;
        }else if ((chars.charAt(i) !== guess.charAt(i))&& correctGuesses > 4){
            correctGuesses = 0;
            console.log('Starting over');
        }else if (chars.charAt(i) !== guess.charAt(i)){
            console.log('Hallo');
            break;
        }else {
            console.log('Terminal hacked!');
        }break;
    }
} */

// while loop
// burte force one charter * 4
// each iter is correcGuesses++
// and has 3 possible outcomes


/* while (correctGuesses < 5){
    for (var i = 0; i < 25; i++){
       // console.log('This is i: ', guess.charAt(i));
        switch(guess.charAt(i) !== pwd.charAt(i)){
            case (guess.charAt(i) === pwd.charAt(i)):
                correctGuesses++;
                console.log('Found ' + correctGuesses + ' characters');
                crckdpwd = crckdpwd + guess.charAt(i);
                break;
			case (guess.charAt(i) !== pwd.charAt(i) && incorrectGuesses < (26)):
                incorrectGuesses++;
                correctGuesses = 0;
                console.log('Starting over.');
                break;
            case guess.charAt(i) !== pwd.charAt(i):
                  incorrectGuesses++;
                break;
            default:
                correctGuesses++;
                crckdpwd = crckdpwd + guess.charAt(i);
                break;
                  
        }

     }break;
 }

if (guess === crckdpwd){
    console.log('Terminal hacked!');
}
console.log('Incorrect Guesses: ',incorrectGuesses); */

