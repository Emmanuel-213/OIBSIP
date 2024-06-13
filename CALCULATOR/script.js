const display = document.getElementById("display");


function clickToDisplay(input){
    display.value += input;
};

function clearDisplay(){
    display.value ="";
};

function backspace(){
    display.value =display.value.substr(0,display.value.length-1);
};


function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "error";
    }
};