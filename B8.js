var buttons = document.getElementsByClassName("delete");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", deleteRow);
    }
    function deleteRow() {
        let row = this.parentNode.parentNode;
        row.parentNode.removeChild(row);
    }