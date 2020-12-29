//HINT: ONLY EDIT THE SPIN() AND STOP() FUNCTIONS

//globals
var pushed = false //Has the stop button been pushed - false is default
var targetInt; //The target number to stop the wheel on
const spinningElem = document.getElementById('spinning') //The spinning number
const resultsElem = document.getElementById('result')

//event listener
document.getElementById("buttonPressed").addEventListener("mousedown", buttonPressed);

//When the stop button is pushed
function buttonPressed(){
    pushed = true;
}

//set the target Int
function setTargetInt(){
    var targetElem = document.getElementById('targetNum');
    targetInt=Math.floor(Math.random() * 101)
    targetElem.innerHTML = targetInt;
}

//sleep const
const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

//EDIT THIS FUNCTION
const spin = async () => {
    //WRITE YOUR CODE HERE
    let currentVal = 0;
    while (!pushed && currentVal < 101) {
        await sleep(75)
        currentVal++
        spinningElem.innerText = currentVal
    }
    if (pushed) stop(currentVal)
}

//EDIT THIS FUNCTION
function stop(i){
    let diff = targetInt - i;
    let message = ''
    
    if ( diff === 0 ){ message = "Right on!" }
    else if ( diff < 0 ) { message = `Too late! Off by ${Math.abs(diff)}` }
    else { message = `Too soon! Off by ${diff}`}
    
    resultsElem.innerText = message;
}

//main
setTargetInt();
spin()