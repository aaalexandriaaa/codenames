CODENAMES JAVASCRIPT IMPLEMENTATION
=====

## Table of Contents
- [CODENAMES JAVASCRIPT IMPLEMENTATION](#codenames-javascript-implementation)
  - [Table of Contents](#table-of-contents)
  - [1. Objective](#1-objective)
  - [2. Technologies Used](#2-technologies-used)
  - [3. Wireframes](#3-wireframes)
  - [4. User Stories](#4-user-stories)
  - [5. Features List](#5-features-list)
  - [6. Stretch Goals:](#6-stretch-goals)
  - [7. Pseudocode](#7-pseudocode)

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

## 5. Features List
* 

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