CODENAMES JAVASCRIPT IMPLEMENTATION
=====

## Table of Contents
- [CODENAMES JAVASCRIPT IMPLEMENTATION](#codenames-javascript-implementation)
  - [Table of Contents](#table-of-contents)
  - [0. Website Link](#0-website-link)
  - [1. Objective](#1-objective)
  - [2. Technologies Used](#2-technologies-used)
  - [3. Wireframes](#3-wireframes)
  - [4. User Stories](#4-user-stories)
  - [5. User Experience](#5-user-experience)
  - [6. Stretch Goals:](#6-stretch-goals)
  - [7. Pseudocode](#7-pseudocode)
  - [8. Attributions](#8-attributions)

## 0. Website Link
(Play Codenames!)[google.com]

## 1. Objective
Implementation of a fair, equitable, and just website that: 
   1. Faithfully recreates the gameplay logic of Vlaada Chvátil's 2015 card game Codenames
   2. visually recreates a stylized representation of the game board that is accessible to users who:
      1. are visually impaired
      2. have processing deficits
   

## 2. Technologies Used
1. JavaScript
2. HTML
3. CSS
   
## 3. Wireframes
[View wireframes here](https://www.canva.com/design/DAEEDmlvdQE/XlOWR4xfqbIZHaSOLQMzwg/view?utm_content=DAEEDmlvdQE&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton)

## 4. User Stories
   The Jemisin family has gathered for an evening of board games. As a quick games warm up, the Smith family has decided they'd like to play Codenames. Unfortunately, Nora has left her copy of Codenames at home. Fortunately, she knows of a website where she can pull up a digital version of the game. 

   Zenobia and her courtiers love the game Codenames. What they don't love is setting up the 5x5 grid of words where they can see it. Zenobia's favorite courtier has come across a website where the game set up is completed for them. Now Zenobia doesn't have to patiently wait for the board to be set up; she can play any time she wants! 

## 5. User Experience
*  The users will navigate to the game page and will see an image similar to first wireframe with text letting them know whose turn it is (e.g., Red Team, input your clue!).
*  The spymasters will view the spymasters page, which will give them the following information: red words, blue words, neutral words, and the instant-death word.
*  The spymasters will navigate back to the previous page, and the red spymaster will input a one word clue and the number of cards that are related to that clue (e.g., Amazon, 3 - could map to the 'box' card, the 'river' card, and the 'Greece' card.)
*  The Red Team code guesser(s) will click on the cards they believe the clue is indicating. 
   *  If they're correct, they can try another card. If each guess is correct, the guessers will have n+1 opportunities to click a card (where n is equal to the numerical input from the Spymaster).
   * If they click a neutral card, the turn is passed to the other team.
   * If they click the instant death card, they game is over and the other team (in this case, the Blue Team) wins.

## 6. Stretch Goals: 
* Full compliance with [WCAG](https://www.w3.org/WAI/WCAG21/quickref/)
* 
* acessibility things? (should never be stretch goals, but i'm v. limited in time) (like push a button to see the red/blue/white/black cards in a list - making sure that the words on the original game play board can be read or not read based on whether or not they've been chosen - having the number of cards left in a screen reader readable format.)
* Implement spymaster & code guesser pages that load to two different so that everyone can play on their own devices.
* statistics based on what cards you have left (specifically: "you have a 25% chance of choosing the instant death card; you have a 10% chance of choosing a neutral card.)# codenames
* impletment Codenames: Duets

## 7. Pseudocode
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

## 8. Attributions
* [A list of suggestions for a more robustly accessible website](https://www.solidstart.info)
* [WCAG](https://www.w3.org/WAI/WCAG21/quickref/)
* [Red team card image](https://www.pexels.com/photo/red-orange-waves-wallpaper-1998479/)
* [Blue team card image](https://www.pexels.com/photo/blue-abstract-painting-1568607/)
* [Good Background Colors for Readers: A Study of People with and without Dyslexia](https://www.cs.cmu.edu/~jbigham/pubs/pdfs/2017/colors.pdf) 
* [Accessibility Subreddit](reddit.com/r/Accessibility)