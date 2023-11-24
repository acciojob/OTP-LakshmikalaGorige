//your JS code here. If required.
let inputs = document.querySelectorAll("input");
let ind = 0;
for ( let i = 0; i < inputs.length; i++ ){
    inputs[i].addEventListener("keyup", onKeyup);
}

inputs[ind].focus();

function onKeyup(event){
    if(event.key === "Backspace"){
        if(ind == 0){
            return;
        }
        else{
            ind--;
            inputs[ind].focus();
        }
    }
    else{
        if(ind < 5){
        ind++;
        inputs[ind].focus();
        }
        else{
            inputs[ind].blur();
        }
    }
    
}