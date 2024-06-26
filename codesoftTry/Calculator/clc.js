

function Solve(val){
    let inp=document.querySelector("input");
    inp.value+=val;
}

function Result(){
    let inp=document.querySelector("input");
    let userInput=inp.value;
    let output=eval(userInput);
    inp.value=output;
}

function Clear(){
    let cle=document.querySelector("input");
    cle.value="";
}




