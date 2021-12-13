// append column to the HTML table
function appendColumn() {
    var tbl = document.getElementById('my-table'), // table reference
        i;
    // open loop for each row and append cell
    for (i = 0; i < tbl.rows.length; i++) {
        createCell(tbl.rows[i].createInputCell(tbl.rows[i].cells.length), 'col');
    }
    
}