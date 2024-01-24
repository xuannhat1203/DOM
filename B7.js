let tds = document.getElementsByClassName("item");
    for (let i = 0; i < tds.length; i++) {
        tds[i].style.border = "1px solid black";
    }
    let button = document.getElementById("btn");
    button.onclick = function() {
        let table = document.getElementById("tb");
        let newRow = document.createElement("tr");
        for (let i = 0; i < tds.length; i++) {
            let cell = document.createElement("td");
            cell.textContent = tds[i].textContent;
            cell.style.border = "1px solid black";
            newRow.appendChild(cell);
        }
        table.appendChild(newRow);
            
    };