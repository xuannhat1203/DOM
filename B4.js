let button = document.getElementById("btn");
button.style.backgroundColor = "blue";
button.style.width = "200px";
button.style.height = "50px";
let text = document.getElementById("text");
text.innerHTML = "This text is optional";
button.onclick = function(){
    text.style.color = "red";
    text.style.backgroundColor = "yellow";
}