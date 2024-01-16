// create an HTML form with a text field and button
// when the button is clicked, the text field should be cleared and the button should display the number of times it has been clicked
// 
// Path: index.html
<html>
    <head>
        <title>Click Counter</title>
    </head>
    <body>
        <form>
            <input type="text" id="text-field">
            <button id="button">Click Me!</button>
        </form>
        <script src="index.js"></script>
    </body>
</html>

// Path: index.js
let button = document.getElementById("button");
let textField = document.getElementById("text-field");
let count = 0;

button.addEventListener("click", function() {
    count++;
    textField.value = "";
    button.innerText = count;
});
