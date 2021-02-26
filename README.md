

Description: This project's goal was to take the given starter code and build a password generator utilizing JS. When the user clicks the generate password button, 
the code will send out prompts that will ask the user if they want special characters, lower case letters, uppercase letters, or numbers in their password along with
how long they want the password to be. Depending on the user's input, the password output will carry those inputs. 

What was done: 
1. I created a function called generate password, and ran the entire code under that one function. 
2. In order to validate the prompts, I created a variable to store the input from
each seperate prompt and ran a while loop for each prompt to check for valid inputs of "y", "yes", "n", or "no". 
3. I created a variable with objects to hold boolean values for each yes input from the user.
    a. If user said yes, then the object would store true)
4. I created an array for the potential password characters, the password, and variables holding lowercase, uppercase, special characters, and numbers.
5. I ran a while loop to fill the password:
    a. The while loop was built on the premise that as long as the length of the password array was less than the defined length, it would have to loop through the conditionals. 
    b. If there the object that was called had a true boolean, then the if condition would run. This helped guarantee the outputs that the user wanted, and remove the outputs that 
    the user didn't want. 
6. In order to actually show the output in the provided box, I had to make the overall function return the password array.
    a. By using the .join() function, I was able to put all the characters in the password array into one string and output that string. 


