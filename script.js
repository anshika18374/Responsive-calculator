const display = document.getElementById("display");
const themeBtn = document.getElementById("theme-btn");

function appendValue(value){
    display.value += value;
}

function clearDisplay(){
    display.value = "";
}

function backspace(){
    display.value = display.value.slice(0, -1);
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch{
        display.value = "Error";
    }
}

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        themeBtn.textContent = "☀️";
    }else{
        themeBtn.textContent = "🌙";
    }
});

/* Keyboard Support */

document.addEventListener("keydown", (event) => {

    const key = event.key;

    if(
        (key >= "0" && key <= "9") ||
        key === "+" ||
        key === "-" ||
        key === "*" ||
        key === "/" ||
        key === "."
    ){
        appendValue(key);
    }

    if(key === "Enter"){
        calculate();
    }

    if(key === "Backspace"){
        backspace();
    }

    if(key === "Escape"){
        clearDisplay();
    }
});