var input;
var output;
var term1="";
var term2="";
var operation;
var flagV=false, flagDone=false;

var display = document.getElementById("dispar");

function key(id){
    if (flagDone ===true){
        erase();
    }
    input = document.getElementById(id).innerHTML;
    if(flagV===false){
        term1 += input;
    }
    else {
        term2 += input;
    }
    display.innerHTML += input;
}

function oper(id){
    flagV=true;
    input = document.getElementById(id).innerHTML;
    if(display.innerHTML[display.innerHTML.length-1] !== "+"){
        operation = document.getElementById(id).innerHTML;
        display.innerHTML += input;
    }
    return operation;
}

function operate(term1, term2, operation) {
    var t1 = parseInt(term1);
    var t2 = parseInt(term2);

    switch (operation) {
        case "+":
            output= t1+t2;
            break;
        case "-":
            output = t1-t2;
            break;
    }
   return output;
}

function equalskey() {
    if(term1!=="" && term2!==""){
        display.innerHTML = operate(term1, term2, operation);
        flagV=false;
        flagDone = true;
    }

}

function erase(){
    flagDone=false;
    display.innerHTML = "";
    term1 = "";
    term2 = "";
}


/*
    while(inputs.length<8){
        inputs.innerHTML += id;
    }
}

function operator (){

    if(inputs.innerHTML.includes("+")){
        return oper = "+";
    }
    else if(inputs.innerHTML.includes("-")){
        return oper = "-";
    }
}



function calc(){

    oper = operator();
    part = inputs.innerHTML.split(oper);
    term1 = parseInt(part[0]);
    term2 = parseInt(part[1]);



    switch (oper){
        
        case "+":
            result = term1+term2;
            break;
        
        case "-":
            result = term1-term2;
            break;

    }
    inputs.innerHTML = parseInt(result);
}

function erase(){
    inputs.innerHTML = "";
}*/
