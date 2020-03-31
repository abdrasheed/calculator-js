function getNumber(number){
    var input_value = document.getElementById("screen");
    switch(number){
        case 1:
            input_value.value += "1";
            break;
        case 2:
            input_value.value += "2";
            break;
        case 3:
            input_value.value += "3";
            break;
        case 4:
            input_value.value += "4";
            break;            
        case 5:
            input_value.value += "5";
            break;            
        case 6:
            input_value.value += "6";
            break;           
        case 7:
            input_value.value += "7";
            break;              
        case 8:
            input_value.value += "8";
            break;           
        case 9:
            input_value.value += "9";
            break; 
        case 0:
            input_value.value += "0";
            break;        
    }
}

// THIS FUNCTION TO CLEAR SCREEN
function clearScreen(){
    document.getElementById("screen").value = "";
    answer = null;
}

//THIS FUNCTION TO GET OPERATOR
function getOperation(oper){
    var input_value = document.getElementById("screen");
    if (input_value.value[input_value.value.length-1] == "/" || input_value.value[input_value.value.length-1] == "+" ||
    input_value.value[input_value.value.length-1] == "-" || input_value.value[input_value.value.length-1] == "*"){
    input_value.value = input_value.value.slice(0,-1);
    switch(oper){
        case "+":
            input_value.value += "+";
            break;           
        case "-":
            input_value.value += "-";
            break;           
        case "X":
            input_value.value += "*";
            break;            
        case "/":
            input_value.value += "/";
            break;
    }
}else{
    switch(oper){
        case "+":
            input_value.value += "+";
            break;           
        case "-":
            input_value.value += "-";
            break;           
        case "X":
            input_value.value += "*";
            break;            
        case "/":
            input_value.value += "/";
            break;
}
}
}
//THIS FUNCTION FOR COMPUTE
function compute(answer){
    var input_value = document.getElementById("screen");
    var len = input_value.value[input_value.value.length-1];
    if (len == "-" || len == "+" || len == "*" || len == "/"){
        input_value.value = input_value.value.slice(0,-1);
    }
    var answer = Math.floor(+eval(input_value.value));
    document.getElementById("screen").value = answer;
}