function calculate(){
    var tbl = document.getElementById('my-table');
    var functionData = Array(numActivities);
    var functionDataSum;
    var activityData = Array(numFunctions);
    var activityDataSum;
    var totalData = Array(2);
    var totalDataPercentage;
    var iD = "";
    var rowCount = 1;
    var colCount = 1;

    for(let i = 0; i < tbl.rows.length; i++)
    {
        var functionDataSum = 0;

        if(i == 0){
            createTextCell(tbl.rows[i].insertCell(tbl.rows[i].cells.length), "Total Hours per Function", 'col');
        }
        else if(i == 1){
            createTextCell(tbl.rows[i].insertCell(tbl.rows[i].cells.length), "", 'col');
        }        
        else
        {
            for(let j = 0; j < numActivities; j++){
                iD = colCount + "," + rowCount;
                functionData[j] = parseFloat(document.getElementById(iD).value);
                colCount++;
            }

            for(let j = 0; j < numActivities; j++){
                functionDataSum = functionDataSum + functionData[j];
            }

            createTextCell(tbl.rows[i].insertCell(tbl.rows[i].cells.length), functionDataSum, 'col');
            rowCount++;
            colCount = 1;
        }
    }
    
    
    var row = tbl.insertRow(tbl.rows.length);
    var rowCount = 1;
    var colCount = 1;

    for(let i = 0; i < tbl.rows[0].cells.length; i++)
    {
        activityDataSum = 0;
        functionDataSum = 0;

        if(i == 0){
            createTextCell(row.insertCell(i), "Total Hours per Activity", 'col');
        }
        else if(i == 1){
            createTextCell(row.insertCell(i), "", 'col');
        }
        else if(i == tbl.rows[0].cells.length - 1)
        {
            for(let j = 0; j < numActivities; j++){
                functionData[j] = parseFloat(tbl.rows[tbl.rows.length-1].cells.item(colCount+1).innerText);
                colCount++;
            }

            for(let j = 0; j < numActivities; j++){
                functionDataSum = functionDataSum + functionData[j];
            }

            var cell = row.insertCell(i);
            createTextCell(cell, functionDataSum, 'col');
            iD = (i-1) + "," + (tbl.rows.length - 2);
            cell.innerHTML = "<center><div type='col' id='" + iD +"'>" + functionDataSum + "</center>";   //HERE
            rowCount++;
            colCount = 1;
        }
        else{
            
            for(let j = 0; j < numFunctions; j++){
                iD = rowCount + "," + colCount;
                activityData[j] = parseFloat(document.getElementById(iD).value);
                colCount++;
            }

            for(let j = 0; j < numFunctions; j++){
                activityDataSum = activityDataSum + activityData[j];
            }

            var cell = row.insertCell(i);
            createTextCell(cell, activityDataSum, 'col');
            iD = (i-1) + "," + (tbl.rows.length - 2);
            cell.innerHTML = "<center><div type='col' id='" + iD +"' value='" +activityDataSum+"'>" + activityDataSum + "</center>";   //HERE
            rowCount++;
            colCount = 1;
        }
    }

    var row = tbl.insertRow(tbl.rows.length);
    rowCount = tbl.rows.length - 3;

    for(let i = 0; i < tbl.rows[0].cells.length; i++)
    {
        colCount = i - 1;
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
            
            for(let j = 0; j < 2; j++)
            {
                totalData[j] = parseFloat(tbl.rows[tbl.rows.length-2].cells.item(colCount+1).innerText);
                colCount = numActivities + 1;
            }

            totalDataPercentage = (totalData[0] / totalData[1]) * 100
            totalDataPercentage = totalDataPercentage.toFixed(1);

            var perc = totalDataPercentage + "%";

            createTextCell(row.insertCell(i), perc, 'col');
        }
    }
}