
// This function called when user/client click on the button
function loadCD(){

    //Creating XMLHttpRequest object
    var xhttp = new XMLHttpRequest(); 

    //open a request 
    xhttp.open('GET','cd.xml', true);
    //send the request to the server
    xhttp.send();

    //Get Response from the server and update on the user interface
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
           setCDInfo(this);
        }
    }
}

// function to process the response to display on the table 
function setCDInfo(xml){
    var xmlDoc = xml.responseXML; // save response to xmlDoc variable
    var table ="<table class='table table-striped'><tr class='table-dark'><th>Title</th><th>Author</th><th>Country</th><th>Company</th><th>Price</th><th>Year</th></tr>";
    var x =  xmlDoc.getElementsByTagName('CD'); //save xml data according to tagname to a variable name x

    //looping through the x to get all the info inside the CD tag in the XML document
    for(let i=0; i<x.length;i++)
    {
        table += "<tr><td>"+x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
        "</td><td>"+
        x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
        "</td><td>"+
        x[i].getElementsByTagName("COUNTRY")[0].childNodes[0].nodeValue +
        "</td><td>"+
        x[i].getElementsByTagName("COMPANY")[0].childNodes[0].nodeValue +
        "</td><td>"+
        x[i].getElementsByTagName("PRICE")[0].childNodes[0].nodeValue +
        "</td><td>"+
        x[i].getElementsByTagName("YEAR")[0].childNodes[0].nodeValue +
        "</td></tr>";
    }

    table += "</table>";

    document.getElementById('cd_info').innerHTML = table;
}

// End of the processing function