function increase(){
    var text=document.getElementById("screen").value
    var result=eval(text)+1
    document.getElementById('screen').value=result
}

function reset(){
    document.getElementById("screen").value="0"
}

function decrease(){
    var text=document.getElementById("screen").value
    var result=eval(text)-1
    document.getElementById('screen').value=result
}

function darkMode(){
    var element = document.body;
    element.classList.toggle("counter-dark.css");
}

function lightMode(){
    var element = document.body;
    element.classList.toggle("counter-light.css")
}

