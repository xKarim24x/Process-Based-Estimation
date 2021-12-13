function calculate(){
    var tbl = document.getElementById('my-table');
    var row = tbl.insertRow(tbl.rows.length);

    for(let i = 0; i < tbl.rows[0].cells.length; i++)
    {
        if(i == 0){
            createTextCell(row.insertCell(i), "Total Hours per Task", 'col');
        }
        else if(i == 1){
            createTextCell(row.insertCell(i), "", 'col');
        }
        else{
            //perform calculations FIRST and add them into these boxes
            createTextCell(row.insertCell(i), "0", 'col');
        }
        
    }
}