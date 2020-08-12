/*------Constants------*/
const words = ['alexandria', 'betty', 'catherine', 'donna', 'ella', 'faith', 'geraldine', 'hannah', 'inez', 'jillian', 'katie', 'louise', 'mary', 'nancy', 'olivia', 'penelope', 'rose', 'samantha', 'tabitha', 'ursula', 'valerie', 'willa', 'xiomara', 'yoshiko', 'zenobia']; // prepopulating a words array so that I can 
const board = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]; //
const colorScheme = {
    spymaster: false, 
    changeColorScheme: function (){
        colorScheme.spymaster ? colorScheme.spymaster = false : colorScheme.spymaster = true
        const color = colorScheme.spymaster ? "spymaster" : ""
        body.setAttribute("class", color) //took this from David's code
    }
};

/*------Variables (state)------*/
let size = 25; // board size
let control = 'r'; // set to team character to quickly check array, etc
let guesses = -1; // set guess count to -1 so that if the player hasn't input a number, it won't default to 1 guess 
let cardsTried = 0;

/*------Cached Element References------*/
const gridEls = document.getElementsByClassName("grid")[0];
const squares = gridEls.children;
const numEl = document.getElementById("num"); 
const clueEl = document.getElementById("clue"); 
const submitEl = document.getElementById("numSubmit");
const passEl = document.getElementById("pass")
const spymasterEl = document.getElementById("spymaster")
const body = document.getElementById('body');

/*------Event Listeners------*/
for (let index = 0; index < squares.length; index++) {
    const square = squares[index];
    square.onclick = playerClick;
}

submitEl.addEventListener('click', clueInfo);
passEl.addEventListener('click', passTurn);
spymasterEl.addEventListener('click', colorScheme.changeColorScheme);

/*------FUNCTIONS, FUNC YEAH------*/
// Random Number Generator Function
function randomizer(range){     // range should equal 25
    return Math.floor(Math.random() * range);  
} 
// Team Assignment Array
function teamAssignment(size){      
    let x = randomizer(size)
    board[x] = 'a';  // assassin card
    document.getElementById(x).className += "a"
    // document.getElementById("x") = document.getElementById("x").className("a");
    for (i = 0; i < 9; i++){        // randomly generating 9 red cards
        x = randomizer(size);
        while (board[x] !== null){
            x = randomizer(size);
        } 
        board[x] = 'r';
        document.getElementById(x).className += "r"
    } 

    for (i = 0; i < 8; i++){        // randomly generating 8 blue cards
        x = randomizer(size);
        while (board[x] !== null){
            x = randomizer(size);
        } 
        board[x] = 'b';
        document.getElementById(x).className += "b"
    }
    
    for (i = 0; i < 7; i++){        // randomly generating 7 neutral cards
        x = randomizer(size);
        while (board[x] !== null){
            x = randomizer(size);
        } 
        board[x] = 'n';
        document.getElementById(x).className += "n"
    }
}
// How many tries a player has before turn is flipped
function clueInfo(){
    console.log(numEl.value)
    console.log(clueEl.value)
    if (numEl.value >= 0){
        guesses = parseInt(numEl.value) + 1;
        document.getElementById("guessInfo").innerHTML = `<h2>${control === 'r'? "Red" : "Blue"} team, </br>you have ${guesses} ${guesses > 1? "guesses" : "guess"}.</h2>`;
        document.getElementById(`${control === 'r'? "redList" : "blueList"}`).innerHTML += `${clueEl.value}, ${numEl.value}</br>`
    } else {
        document.getElementById("guessInfo").innerHTML = `<h2>${control === 'r'? "Red" : "Blue"} team, </br>please input a valid number.</h2>`
    }
};
// Control Team Passes their Turn
function passTurn(){
    console.log(cardsTried)
    if (cardsTried === 0) {
        document.getElementById("guessInfo").innerHTML = `<h2>${control === 'r'? "Red" : "Blue"} team, </br> You must click a card before passing. You have ${guesses === -1 ? "no" : guesses} ${guesses === 1? "guess" : "guesses"}.</h2>`
    } else {
    console.log("turn passed!")
    control = flipVariable(control);
    guesses = 0;
    cardsTried = 0;
    numEl.value = '';
    clueEl.value = '';
    console.log(control)
    document.getElementById("guessInfo").innerHTML = `<h2>It's ${control === 'r'? "Red" : "Blue"} team's turn!</h2>`
    }
}
// Initialization Function
function init(){
    document.getElementById("guessInfo").innerHTML = `<h2>${control === 'r'? "Red" : "Blue"} team: </br> Please input a one-word clue and number of guesses.</h2>`
    clueEl.value = '';
    numEl.value = '';
    words.forEach((elem, idx) => {
        document.getElementById(idx).innerHTML = elem;
    })
    teamAssignment(size)
}
// Player Click Function
function playerClick(evt){
    if (board[evt.target.id] === board[evt.target.id].toUpperCase()){
        document.getElementById("guessInfo").innerHTML = `<h2>${control === 'r'? "Red" : "Blue"} team, </br>please click a valid card.</h2>`
        return
    } else if (guesses < 1){
        document.getElementById("guessInfo").innerHTML = `<h2>${control === 'r'? "Red" : "Blue"} team, </br>please input a valid guess.</h2>`
        return
    }
    cardsTried++
    console.log(evt.target.id, board[evt.target.id]) // use document.addClassName or whatever to add a class to the card (class = red or class = blue or neutral) that will HIDE the word, and then put the "spy card" over it. 
    document.getElementById(evt.target.id).className = board[evt.target.id].toUpperCase()
        if (board[evt.target.id] === 'a'){
            document.getElementById("guessInfo").innerHTML = `<h2>ASSASSINO! </br> ${flipVariable(control) === 'r'? "RED" : "BLUE"} TEAM WINS</h2>`
            assassino();
            // player has chosen Assassin card, and the game is over. run assassino function
            // pop up a new modal with YOU LOST TOO BAD.
        } else if (board[evt.target.id] === control){ // player chooses their card
            board[evt.target.id] = board[evt.target.id].toUpperCase() // set that element to upper case 
            if (board.some(elem => elem === control)){ // if there are still lower case control variables, the game continues, control continues their turn, and the guesses decrement
                guesses--
                document.getElementById("guessInfo").innerHTML = `<h2>${control === 'r'? "Red" : "Blue"} team, </br>you have ${guesses} ${guesses > 1? "guesses" : "guess"} left</h2>`
                if (guesses < 1){
                    numEl.value = "";
                    clueEl.value = '';
                    control = flipVariable(control);
                    cardsTried = 0;
                    document.getElementById("guessInfo").innerHTML = `<h2>It's ${control === 'r'? "Red" : "Blue"} team's turn!</h2>`
                }
            } else { // if there are no more lower case control variables, the game is over. 
                console.log('you win') // the game is over, you win.
                document.getElementById("guessInfo").innerHTML = `<h2>${control === 'r'? "Red" : "Blue"} team wins!</h2>`
            }
        } else { // player chooses opponent's or neutral card
            board[evt.target.id] = board[evt.target.id].toUpperCase() // set that element to upper case 
            guesses = -1; //reset guess count
            control = flipVariable(control);
            cardsTried = 0;
            numEl.value = '';
            clueEl.value = '';
            document.getElementById("guessInfo").innerHTML = `<h2>It's ${control === 'r'? "Red" : "Blue"} team's turn</h2>`
            if (!board.some(elem => elem === control)){
                document.getElementById("guessInfo").innerHTML = `<h2>${flipVariable(control)} wins!!</h2>`
             }
        } 
    render();
}
// Flips Control Variable
function flipVariable(control){
    if (control === 'b'){
        return 'r'
    } else {
        return 'b'
    }
}
// Will ultimately run the "opposite team wins!" 
function assassino(){
    console.log("ASSASSINO")
}
// I should refactor my code so that I'm using this function.
function render(){
    console.log("I'm rendering!")
    console.log(`you've tried ${cardsTried} card(s)`)
    // use document.addClassName or whatever to add a class to the card (class = red or class = blue and class = neutral) that will sync with board array and 
    
}
// Basic functionality is like a dark mode button


init()