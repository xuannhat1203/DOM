let button = document.getElementById("btn");
let ul = document.getElementById("ul");
button.onclick = function(){
    let li = document.createElement("li");
    li.innerHTML = input.value;
    ul.appendChild(li);
}