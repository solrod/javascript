
function matematik() {
    var firstNumber = prompt("Enter the first number");
    var secondNumber = prompt("Enter the second number"); 
    var total = Number(firstNumber) + Number(secondNumber); 
    document.getElementById('visResultat').innerHTML += total;
    
};

function visDatoTid() {
    const dato = new Date();
    document.getElementById('showDateAndTime').innerHTML = " ";
    document.getElementById('showDateAndTime').innerHTML += `${dato.getUTCDate()}.${dato.getUTCMonth()}.${dato.getFullYear()} Klokken er ${dato.getHours()} : ${dato.getMinutes()}`;
};

function changeBackground() {
    const colors = ["red", "pink", "blue", "grey", "purple", "AliceBlue", "Aquamarine", "Khaki", "LavenderBlush", "LawnGreen", "LightGoldenRodYellow" ,"LightPink", "Maroon", "MediumTurquoise", "MidnightBlue", "PapayaWhip", "Sienna", "Wheat", "Tan"];
    const randomNumber = Math.floor(Math.random() * colors.length);
    const choosenColor = colors[randomNumber];
    document.body.style.backgroundColor = choosenColor;
    document.getElementById('baggrundsFarve').innerHTML = " ";
    document.getElementById('baggrundsFarve').innerHTML = `BaggrundsFarven er nu: ${choosenColor}`;
}
 
