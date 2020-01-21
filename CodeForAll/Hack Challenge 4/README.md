---
# <Hacking Task #4>

Great job so far! You are quickly becoming an instrumental part of Elliot's crew. 

For the coming task, you'll have to intercept some messages of your next target:
A high-rank guy within the FBI. 
He's involved in some E-Corp's shady business and he is known to be careless.

We have hijacked his e-mail service and we are listening to all his outbound traffic.
We need you to analyze it carefully. 
It might take a while to get this number but, trust me, he is dumb enough to send it on an e-mail.

***
# Instructions

Create a function named extractPassword which takes an array of characters (which includes some trash characters) and returns a string with only valid characters (a - z, A - Z, 0 - 9).

Here's an example:

extractPassword(['a', '-', '~', '1', 'a', '/']); // should return the string 'a1a'
extractPassword(['~', 'A', '7', '/', 'C']); // should return the string 'A7C' 


***