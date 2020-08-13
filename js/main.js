/*------Constants------*/
const dictionary = [
    "bench", "venus", "oasis", "saw", "patient", "rubber", "bacon", "rat", "saddle", "desk", 
    "beam", "curry", "apron", "parade", "wizard", "Noah", "sign", "hamburger", "parrot", "bicycle", 
    "tornado", "virus", "map", "battle", "jockey", "coffee", "silk", "rodeo", "meter", "gymnast", 
    "chalk", "road", "St. Patrick", "makeup", "marathon", "skates", "scarecrow", "Notre Dame", "kilt", "walrus", 
    "lunch", "taste", "blizzard", "shed", "bonsai", "Wonderland", "sling", "ant", "lemonade", "doll", 
    "squirrel", "hose", "potter", "jumper", "flag", "cave", "pew", "pine", "locust", "ranch", 
    "soap", "bucket", "craft", "golf", "comb", "glasses", "pizza", "Big Ben", "sled", "violet", 
    "bubble", "spoon", "onion", "genie", "tank", "sherlock", "bay", "dryer", "brother", "mess", 
    "ladder", "tattoo", "dash", "sticker", "rifle", "blues", "viking", "vampire", "biscuit", "pen",
    "butter", "pillow", "castle", "scroll", "disk", "drone", "hammer", "floor", "battleship", "snake", 
    "mark", "rail", "drawing", "mother", "squash", "tank", "miss", "elephant", "greenhouse", "bulb", 
    "country", "wood", "purse", "break", "lace", "valentine", "cloud", "steam", "bunk", "bread", 
    "cane", "team", "moses", "cherry", "christmas", "turtle", "cake", "snap", "potato", "coach",
    "iceland", "pea", "mosquito", "frost", "blade", "hercules", "jeweler", "flat", "cuckoo", "tin", 
    "pocket", "memory", "mud", "mill", "maracas", "foam", "hair", "yellowstone", "ice age", "attic", 
    "pepper", "puppet", "spray", "microwave", "igloo", "musketeer", "monkey", "lip", "dust", "bowler", 
    "fuel", "quarter", "sweat", "thunder", "slipper", "tunnel", "bucket", "jail", "boil", "driver", 
    "delta", "nerve", "volume", "smoothie", "shower", "earthquake", "easter", "ski", "rip", "glacier", 
    "roll", "russia", "pizza", "sloth", "salt", "troll", "quack", "pearl", "powder", "second", 
    "chain", "werewolf", "garden", "smell", "door", "sail", "crow", "salsa", "magician", "pacific"
    ]
const board = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]; //
const words = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]; //

const colorScheme = {
    spymaster: false, 
    changeColorScheme: function (){
        colorScheme.spymaster ? colorScheme.spymaster = false : colorScheme.spymaster = true
        const color = colorScheme.spymaster ? "spymaster" : ""
        body.setAttribute("class", color) //took this from David's code
        if (colorScheme.spymaster === true){
            spymasterEl.classList.add("spymaster")
            spymasterEl.innerHTML = "PLAYERS"
            document.getElementById("pass").disabled = true; 
            document.getElementById("numSubmit").disabled = false; 
            for (let x = 0; x < 25; x++){
                document.getElementById(x).classList.add(color)
            }
        } else {
            spymasterEl.classList.remove("spymaster")
            spymasterEl.innerHTML = "SPYMASTER"
            document.getElementById("pass").disabled = false; 
            document.getElementById("numSubmit").disabled = true; 
            for (let x = 0; x < 25; x++){
                document.getElementById(x).classList.remove("spymaster")
            }
        }
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
function boardAssignment(dictionary, words){
    words.forEach((elem, idx) => {
        let x = randomizer(dictionary.length);
        while (words.includes(dictionary[x])){
            x = randomizer(dictionary.length);
        }
        words[idx] = dictionary[x]
    })
}

// How many tries a player has before turn is flipped
function clueInfo(){
    if (numEl.value >= 0){
        guesses = parseInt(numEl.value) + 1;
        document.getElementById("guessInfo").innerHTML = `<h2>${control === 'r'? "Red" : "Blue"} team, </br>you have ${guesses} ${guesses > 1? "guesses" : "guess"}.</h2>`;
        document.getElementById(`${control === 'r'? "redList" : "blueList"}`).innerHTML += `${clueEl.value.bold()}, ${numEl.value}</br>`
    } else {
        document.getElementById("guessInfo").innerHTML = `<h2>${control === 'r'? "Red" : "Blue"} team, </br>please input a valid number.</h2>`
    }
};
// Control Team Passes their Turn
function passTurn(){
    if (cardsTried === 0) {
        document.getElementById("guessInfo").innerHTML = `<h2>${control === 'r'? "Red" : "Blue"} team, </br> You must click a card before passing. You have ${guesses === -1 ? "no" : guesses} ${guesses === 1? "guess" : "guesses"}.</h2>`
    } else {
        flipTurn()
    }
}
// Initialization Function
function init(){
    document.getElementById("guessInfo").innerHTML = `<h2>${control === 'r'? "Red" : "Blue"} team's Spymaster: </br> View your board by clicking the "SPYMASTER" button </br>and input a one-word clue and number of guesses </h2>`
    document.getElementById("pass").disabled = true; 
    document.getElementById("numSubmit").disabled = true; 
    clueEl.value = '';
    numEl.value = '';
    boardAssignment(dictionary, words)
    words.forEach((elem, idx) => {
        document.getElementById(idx).innerHTML = elem;
    })
    teamAssignment(size);
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
    document.getElementById(evt.target.id).className = board[evt.target.id].toUpperCase()
        if (board[evt.target.id] === 'a'){
            winner("assassin");
        } else if (board[evt.target.id] === control){ // player chooses their card
            board[evt.target.id] = board[evt.target.id].toUpperCase() // set that element to upper case 
            if (board.some(elem => elem === control)){ // if there are still lower case control variables, the game continues, control continues their turn, and the guesses decrement
                guesses--
                document.getElementById("guessInfo").innerHTML = `<h2>${control === 'r'? "Red" : "Blue"} team, </br>you have ${guesses} ${guesses > 1? "guesses" : "guess"} left</h2>`
                if (guesses < 1){
                    flipTurn();
                }
            } else { // if there are no more lower case control variables, the game is over. 
                winner("ctrl");
            }
        } else { // player chooses opponent's or neutral card
            board[evt.target.id] = board[evt.target.id].toUpperCase() // set that element to upper case 
            flipTurn();
            if (!board.some(elem => elem === control)){
                winner("ctrl");
             }
        } 
}
// Flips Control Variable
function flipVariable(control){
    if (control === 'b'){
        return 'r'
    } else {
        return 'b'
    }
}
// Flips Full Control of the Board
function flipTurn(){
    guesses = -1;
    numEl.value = "";
    clueEl.value = "";
    cardsTried = 0;
    control = flipVariable(control);
    document.getElementById("guessInfo").innerHTML = `<h2>It's ${control === 'r'? "Red" : "Blue"} team's turn! </br> Please input a one-word clue and number of guesses.</h2>`
}
// Winner Function 
function winner(str){
    if (str === "assassin"){
        document.getElementById("guessInfo").innerHTML = `<h2>ASSASSINO! </br> ${flipVariable(control) === 'r'? "RED" : "BLUE"} TEAM WINS</h2>`
    } else if (str === "ctrl"){
        document.getElementById("guessInfo").innerHTML = `<h2>${control === 'r'? "Red" : "Blue"} team wins!</h2>`;
    } else {
        document.getElementById("guessInfo").innerHTML = `the winner function has malfunctioned`;
        return
    }
    colorScheme.spymaster = true;
    spymasterEl.classList.add("spymaster")
    spymasterEl.innerHTML = "GAME OVER"
    document.getElementById("pass").disabled = true; 
    document.getElementById("numSubmit").disabled = true; 
    spymasterEl.disabled = true;
    for (let x = 0; x < 25; x++){
        document.getElementById(x).classList.add("spymaster")
    }
    document.getElementById("redListWords").innerHTML += `Red Words</br>`
    document.getElementById("blueListWords").innerHTML += `Blue Words</br>`
    board.forEach((elem, idx) => {
        console.log(typeof(elem))
        if (elem.toUpperCase() ==="R"){
            document.getElementById("redListWords").innerHTML += `${words[idx]}</br>`
        } else if (elem.toUpperCase() ==="B"){
            document.getElementById("blueListWords").innerHTML += `${words[idx]}</br>`
        }
    });
}
init()