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
  - [5. Screenshots](#5-screenshots)
  - [6. User Experience](#6-user-experience)
  - [7. Stretch Goals:](#7-stretch-goals)
  - [8. Pseudocode](#8-pseudocode)
  - [9. Accessibility Discussion](#9-accessibility-discussion)
  - [10. Attributions](#10-attributions)

## 0. Website Link
[Play Codenames!](http://www.jscodenames.surge.sh)

## 1. Objective
Implementation of a fair, equitable, and just website that: 
   1. faithfully recreates the gameplay logic of Vlaada Chvátil's 2015 card game Codenames.
   2. visually recreates a stylized representation of the game board that is accessible to users who:
      1. are visually impaired or
      2. have processing deficits.
   3. is designed from the ground up with  data-oriented design philosophy.
   4. the fulfills the requirements of the Unit 1 project for my Software Engineering Immersive program.
   

## 2. Technologies Used
1. JavaScript
2. HTML
3. CSS
4. Bootstrap
   
## 3. Wireframes
[View wireframes here.](https://www.canva.com/design/DAEEDmlvdQE/XlOWR4xfqbIZHaSOLQMzwg/view?utm_content=DAEEDmlvdQE&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton)

## 4. User Stories
   The Jemisin family has gathered for an evening of board games, and they have decided to play Codenames. Unfortunately, Nora has left her copy of Codenames at home. Fortunately, she knows of a website where she can pull up a digital version of the game. 

   Zenobia and her courtiers love the game Codenames. What they don't love is setting up the 5x5 grid of words so that everyone can see. Zenobia's favorite courtier has come across a website where the game set up is completed for them. Now Zenobia doesn't have to patiently wait for the board to be set up; she can play any time she wants! 

## 5. Screenshots
![Player View](images/playerMode.png) </br></br></br>
![Spymaster View](images/spymasterMode.png)</br></br></br>
![End Game View](images/endGame.png)</br></br>

## 6. User Experience
*  The users will navigate to the game page and will see an image similar to first wireframe with text letting them know whose turn it is (e.g., Red Team, input your clue!).
*  The spymasters will view the spymasters page, which will give them the following information: red words, blue words, neutral words, and the instant-death word.
*  The spymasters will navigate back to the previous page, and the red spymaster will input a one word clue and the number of cards that are related to that clue (e.g., Amazon, 3 - could map to the 'box' card, the 'river' card, and the 'Greece' card.)
*  The Red Team code guesser(s) will click on the cards they believe the clue is indicating. 
   *  If they're correct, they can try another card. If each guess is correct, the guessers will have n+1 opportunities to click a card (where n is equal to the numerical input from the Spymaster).
   * If they click a neutral card, the turn is passed to the other team.
   * If they click the instant death card, they game is over and the other team (in this case, the Blue Team) wins.

## 7. Stretch Goals: 
* Full compliance with [WCAG](https://www.w3.org/WAI/WCAG21/quickref/)
  * starting with full keyboard implementation & responsive sizing.
* Implement spymaster & code guesser pages that load to two different so that everyone can play on their own devices.
* Statistics based on what cards are left on the board. (specifically: "you have a 25% chance of choosing the instant death card; you have a 10% chance of choosing a neutral card.)
* Implementation of Codenames: Duets - a 2 player varient of Codenames.
* Allowing users to upload their own dictionary of words used for the game for a customizable experience.

## 8. Pseudocode
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

## 9. Accessibility Discussion
From the beginning of this project, I knew I wanted to create a facsimile of Codenames that would be accessible to anyone who wanted to play. I also knew that was a big and complicated goal. For one, accessibility doesn't mean the same thing for every one; we all have different strengths in terms of how we process information (e.g., we all have different learning styles). For another, I'm not the ideal user for some accessibility requirements. To that end, I have done some research [linked in the attributions section](#9-attributions) and have attempted to implement as much as I could realistically implement in the project time frame. 

I recognize that I have fallen short in some areas. The entire website relies on JavaScript manipulation (a prerequisite of the project) and clicking a mouse. I also have hard coded a lot of font sizes and layouts. In the future, I believe styling the page before generating the logic may help with that. 

If you have any suggestions for improving the accessibility, please message me on [LinkedIn](www.linkedin.com/in/alexandriastephenson)


## 10. Attributions
* [A list of suggestions for a more robustly accessible website](https://www.solidstart.info)
* [WCAG](https://www.w3.org/WAI/WCAG21/quickref/)
* [Red team card image used in wireframes](https://www.pexels.com/photo/red-orange-waves-wallpaper-1998479/)
* [Blue team card image used in wireframes](https://www.pexels.com/photo/blue-abstract-painting-1568607/)
* [Good Background Colors for Readers: A Study of People with and without Dyslexia](https://www.cs.cmu.edu/~jbigham/pubs/pdfs/2017/colors.pdf) 
* [Accessibility Subreddit](reddit.com/r/Accessibility)
* [Bootstrap](getbootstrap.com)
* [Spymaster & Field Operative color schemes were taken from Ethan Schoonover's Solarized](https://ethanschoonover.com/solarized/)
* [Orbitron Font](https://fonts.google.com/specimen/Orbitron)
* [Web Accessibility; How to Design Websites for Blindness, Deaf, Disability, & Dyslexia](https://www.hobo-web.co.uk/design-website-for-blind/)