Rough PseudoCode for Codenames Implementation

1. variables:
   1. game board array (5x5) - including 25 words
      1. RNG that takes 25 random words from the text file for dictionary and inputs them. 
         1. maybe set each array a random number (let's say 100 words in file, so generate 25 random numbers that don't repeat)
   2. secret color board (5x5) (9 red, 8 blue, 7 white, 1 kill)
      1. => maybe an object for both array 1 & 2?
      2. => alternatively, use individual arrays that have corresponding data at equal indices - "data oriented design - more efficient for large datasets"
   3. player 1 & 2 variables
      1. maybe this includes their word arrays or their card count (how many correct, how many left?)
   4. clue input field - just displays it for the turn it's put in
   5. number input field - maximum number of clicks is n + 1
2. functions
   1. swap game turn
   2. check click against game array(s)
   3. win & insta-death
   4. update card counts 
   5. update game board
   6. render()
3. CERs
   1. take a click and check it against which css grid cell it is in
   2. pull in dictionary text file
   3. visual stuff



Stretch Goals: 
* acessibility things? (should never be stretch goals, but i'm v. limited in time) (like push a button to see the red/blue/white/black cards in a list - making sure that the words on the original game play board can be read or not read based on whether or not they've been chosen - having the number of cards left in a screen reader readable format.)
* statistics based on what cards you have left (specifically: "you have a 25% chance of choosing the instant death card; you have a 10% chance of choosing a neutral card.)# codenames
