
// This loadData function will be hitted once user click on the button from the browser
function showHint(str) {
    if (str.length == 0) { 
      document.getElementById("txtHint").innerHTML = "";
      return;
    } else {
      var xmlhttp = new XMLHttpRequest(); // creating XMLHttpRequest
      xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          document.getElementById("txtHint").innerHTML = this.responseText; // saving data into an html element
        }
      };
      xmlhttp.open("GET", "server.php?q=" + str, true); // open a request 
      xmlhttp.send(); // sends a request
    }
  }