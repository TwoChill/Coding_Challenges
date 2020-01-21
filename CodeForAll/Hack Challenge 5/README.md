---

# <Hacking Task #5>
For your fifth task, we need you to hack the terminal of an accounting firm employee whose identity is completely unknown but has been in some recent E-Corp top-secret meetings. 

We've installed keyloggers in most of the firm's terminals, and as soon as someone types his password, it will be sent to your laptop. 

An fSociety hacking tool will select the passcodes with the highest probability of being our target's terminal passcode. Plus, we have intel that confirms that his password has no odd numbers.

---
# Instructions

Write a function named getValidPassword that takes a two dimensional array as parameter.

Each entry in the first array represents a passcode. You need to find the passcode that has no odd digits and return that passcode from your function.

Here's an example:
```
var loggedPasscodes =[
    [1, 4, 4, 1],
    [1, 2, 3, 1],
    [2, 6, 0, 8],
    [5, 5, 5, 5],
    [4, 3, 4, 3]
];

getValidPassword(loggedPasscodes) // returns the array: [2, 6, 0, 8]
```

---