function getJsonData() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {myFunction(this);}
    xhttp.open("GET", "employees.json");
    xhttp.send();
  }
  function myFunction(xml) {
    const jd = JSON.parse(xml.responseText);
    const employees = jd.employees;
    
    let table="<table class='table table-dark table-striped'><tr><th>First Name</th><th>Last Name</th><th>Position</th><th>Salary</th></tr>";
    for (let i = 0; i <employees.length; i++) { 
      table += "<tr><td>" +
      employees[i].firstName +
      "</td><td>" +
      employees[i].lastName +
      "</td><td>" +
      employees[i].position +
      "</td><td>" +
      employees[i].salary +
      "</td><tr>";
    }
    table +="</table>";
    document.getElementById("json_data").innerHTML = table;
  }