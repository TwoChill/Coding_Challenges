---
# <Hacking Task #2>

Congratulations, you now know the *very* basics of the JavaScript language!

To proceed on your mad journey from programming n00b to full-fledged Code Cadet, you must now work alongside fSociety's ultra dope hacking crew and show them your awesome recently acquired skills in a series of <Hacking Tasks>.

For this task you'll need to gain access to a target's account, which is password protected. We know the password is only four characters long, but we have no idea of what it looks like. 

With today's computing power, brute-forcing weak passwords is not that hard and, as in any brute-force technique, it only requires time and luck.

---
# Instructions


You know that your target's password is 4 characters long, so you'll just have to brute force 1 character at a time. We already declared the variable correctGuesses which you should use to keep track of how many characters you have guessed.

Now you need to create a loop that only stops when all 4 characters have been guessed. On each loop iteration there are 3 possible outcomes:

1.    You guess correctly which increases correctGuesses by 1 and prints the message 'Found X characters' (where X is replaced with the current number of correct guesses).

2.    You guess incorrectly and your target's terminal has detected too many attempts, which resets correctGuesses to 0 and prints the message 'Starting over' to the console.

3.    You guess incorrectly, but correctGuesses is kept with the same value.
Each outcome has the same probability of happening, but it is random.

Once the password is cracked you should print the message 'Terminal hacked!'.

Make sure all the messages in your code are in the correct format in order to advance!
34/59

---