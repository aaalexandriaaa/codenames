/*------Constants------*/
const words = ['alexandria', 'betty', 'catherine', 'donna', 'ella', 'faith', 'geraldine', 'hannah', 'inez', 'jillian', 'katie', 'louise', 'mary', 'nancy', 'olivia', 'penelope', 'rose', 'samantha', 'tabitha', 'ursula', 'valerie', 'willa', 'xiomara', 'yoshiko', 'zenobia']; // prepopulating a words array so that I can 
const board = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]; //

/*------Variables (state)------*/
let size = 25; // board size
let control = 'r'; // set to team character to quickly check array, etc
let guesses = -1; // set guess count to -1 so that if the player hasn't input a number, it won't default to 1 guess 

/*------Cached Element References------*/
const gridEls = document.getElementsByClassName("grid")[0];
const squares = gridEls.children;
const numEl = document.getElementById("num"); 
const submitEl = document.getElementById("numSubmit");

/*------Event Listeners------*/
for (let index = 0; index < squares.length; index++) {
    const square = squares[index];
    square.onclick = playerClick;
}

submitEl.addEventListener('click', tries);

/*------FUNCTIONS, FUNC YEAH------*/
// Random Number Generator Function
function randomizer(range){     // range should equal 25
    return Math.floor(Math.random() * range);  
} 

// Team Assignment Array
function teamAssignment(size){      
    board[randomizer(size)] = 'a';  // assassin card
    
    for (i = 0; i < 9; i++){        // randomly generating 9 red cards
        let x = randomizer(size);
        while (board[x] !== null){
            x = randomizer(size);
        } 
        board[x] = 'r';
    } 

    for (i = 0; i < 8; i++){        // randomly generating 8 blue cards
        let x = randomizer(size);
        while (board[x] !== null){
            x = randomizer(size);
        } 
        board[x] = 'b';
    }
    
    for (i = 0; i < 7; i++){        // randomly generating 7 neutral cards
        let x = randomizer(size);
        while (board[x] !== null){
            x = randomizer(size);
        } 
        board[x] = 'n';
    }

    console.log(board)
}

// How many tries a player has before turn is flipped
function tries(){
    if (numEl.value === 0){
        guesses = 1;
    } else {
        guesses = parseInt(numEl.value) + 1;
    }
};

// Initialization Function
function init(){
    words.forEach((elem, idx) => {
        document.getElementById(idx).innerHTML = elem;
    })
    teamAssignment(size)
}
// Player Click Function
function playerClick(evt){
    if (board[evt.target.id] === board[evt.target.id].toUpperCase()){
        console.log('invalid choice')
        return
    } else if (guesses < 1){
        console.log('please input a guess')
        return
    }
    console.log(evt.target.id, board[evt.target.id]) // logs: 16 b    // use document.addClassName or whatever to add a class to the card (class = red or class = blue or neutral) that will HIDE the word, and then put the "spy card" over it. 
        if (board[evt.target.id] === 'a'){
            assassino();
            // player has chosen Assassin card, and the game is over. run assassino function
        } else if (board[evt.target.id] === control){ // player chooses their card
            board[evt.target.id] = board[evt.target.id].toUpperCase() // set that element to upper case 
            if (board.some(elem => elem === control)){ // if there are still lower case control variables, the game continues, control continues their turn, and the guesses decrement
                console.log('keep playing')
                guesses--
                if (guesses < 1){
                    console.log("your turn is over.")
                    numEl.value = "";
                    control = flipVariable(control);
                }
                console.log('you have ' + guesses + ' left')
            } else { // if there are no more lower case control variables, the game is over. 
                console.log('you win') // the game is over, you win.
            }
        } else { // player chooses opponent's or neutral card
            board[evt.target.id] = board[evt.target.id].toUpperCase() // set that element to upper case 
            guesses = -1; //reset guess count
            control = flipVariable(control);
            if (!board.some(elem => elem === control)){
                console.log('Opponent wins!')
             }
        } 
    render();
}

function flipVariable(control){
    if (control === 'b'){
        return 'r'
    } else {
        return 'b'
    }
}

function assassino(){
    console.log("ASSASSINO")
}

function render(){
    console.log("I'm rendering!")
    // use document.addClassName or whatever to add a class to the card (class = red or class = blue and class = neutral) that will sync with board array and 
    
}


init()