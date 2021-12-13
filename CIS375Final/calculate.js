function calculate(){
    var tbl = document.getElementById('my-table');
    
    for(let i = 0; i < tbl.rows.length; i++)
    {
        if(i == 0){
            createTextCell(tbl.rows[i].insertCell(tbl.rows[i].cells.length), "Total Hours per Function", 'col');
        }
        else if(i == 1){
            createTextCell(tbl.rows[i].insertCell(tbl.rows[i].cells.length), "", 'col');
        }        
        else
        {
            createTextCell(tbl.rows[i].insertCell(tbl.rows[i].cells.length), "0", 'col');
        }
    }
    
    
    var row = tbl.insertRow(tbl.rows.length);

    for(let i = 0; i < tbl.rows[0].cells.length; i++)
    {
        if(i == 0){
            createTextCell(row.insertCell(i), "Total Hours per Activity", 'col');
        }
        else if(i == 1){
            createTextCell(row.insertCell(i), "", 'col');
        }
        else{
            //perform calculations FIRST and add them into these boxes
            createTextCell(row.insertCell(i), "0", 'col');
        }
    }

    var row = tbl.insertRow(tbl.rows.length);

    for(let i = 0; i < tbl.rows[0].cells.length; i++)
    {
        if(i == 0){
            createTextCell(row.insertCell(i), "% of Effort", 'col');
        }
        else if(i == 1){
            createTextCell(row.insertCell(i), "", 'col');
        }
        else if(i == tbl.rows[0].cells.length-1){
            createTextCell(row.insertCell(i), "100%", 'col');
        }
        else{
            //perform calculations FIRST and add them into these boxes
            createTextCell(row.insertCell(i), "0%", 'col');
        }
    }
}