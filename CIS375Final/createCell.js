// create DIV element and append to the table cell
function createInputCell(cell, style) {
    var div = document.createElement('div'), // create DIV element
        input = document.createElement('input'); // create text node
    div.appendChild(input);                    // append text node to the DIV
    div.setAttribute('class', style);        // set DIV class attribute
    div.setAttribute('className', style);    // set DIV class attribute for IE (?!)
    cell.appendChild(div);                   // append DIV to the table cell
}

function createTextCell(cell, text, style){
    var div = document.createElement('div');
    var txt = document.createTextNode(text);
    div.appendChild(txt);
    div.setAttribute('class', style)
    div.setAttribute('className', style)
    cell.appendChild(div);
}