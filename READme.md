Password-Generator-H3
=============

![Password generator screenshot](./assets/generatedpassword.PNG) 

First I started by adding the variable arrays in the generatePassword function. Made one for each of the types of characters. Then I made two blank arrays to use later. Then of course I had to prompt the user so I started with how many characters long they'd like. I made sure to return here in case they selected something outside the specified range. Then they have to start over. I used confirm for the rest of the prompts because you can only answer "Okay" or "Cancel" in this case yes and no. It seemed to me less breakable. After I wrote the conditions for those prompts and made sure to concat all the arrays into one of the blank arrays. I console logged this just to insure that it was working. After, I wrote the for loop that will randomly select characters from the full character array and push them into the other blank array. Which I then just returned that array as a string with join to the user. 

[Link to deployed webpage](https://skruphold.github.io/Password-Generator-H3/)