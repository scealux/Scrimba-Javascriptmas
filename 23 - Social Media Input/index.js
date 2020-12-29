/*
DESCRIPTION:
We are making a Social Media Character Counter! We want to display the available characters LEFT.
Using the Keydown event should help you here. When the characters reach 20 and below, we want them to turn red. So we will use Javascript to add that styling to it. If the characters drop below 0, we want the button to be disabled BUT if there are only 0 characters left, we should still be able to tweet.

Keydown, addEventListeners, add and remove a class

Tips:
1. We want to create our variables first
2. Add the event listener
3. Look in the CSS to see what could be used to disable the button
4. Create conditions to check the count of the characters
*/
const maxChars = 10;
const textBox = document.getElementById("string")
const charCount = document.getElementById("counterFooter")
const tweetButton = document.getElementById("btn")

textBox.addEventListener( "keyup", (e) => {
    let chars = e.target.value.length
    charCount.innerText = `${maxChars-chars} / ${maxChars}`
    tweetButton.classList = (chars > maxChars) ? "buttonDisabled" : ""
    charCount.style.color = (chars > maxChars) ? "crimson" : "white"
})