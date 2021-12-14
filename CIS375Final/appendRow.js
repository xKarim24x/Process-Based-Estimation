// append row to the HTML table
var rowCount = 3;
var numFunctions = 0;

function appendRow() {
    var tbl = document.getElementById('my-table'), // table reference
        row = tbl.insertRow(tbl.rows.length),      // append table row
        i;
        numFunctions++;
        rowCount++;


    // insert table cells to the new row
    for (i = 0; i < tbl.rows[0].cells.length; i++) {
        
        if(i == 1){
            createTextCell(row.insertCell(i), "", 'col');
        }
        else{
            createInputTxtCell(row.insertCell(i));
        }
    }


}