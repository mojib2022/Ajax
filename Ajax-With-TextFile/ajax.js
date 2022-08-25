//Ajax with text file

//step1(This function is called when user clicked on the Button
    function ajaxWithTextFile(){
        
        //step2(Create an object)
        var xhttp = new XMLHttpRequest(); 
        
        // step3 (send request)
        xhttp.open("GET", "ajax_info.txt", true);
        xhttp.send();  

        //step6 and step7(process the response data and update the page content
        xhttp.onreadystatechange = function() {
            
            if (this.readyState == 4 && this.status == 200) {
                    // step7 update page content
                    document.getElementById("ajax_text_file").innerHTML = this.responseText;
            }
        };
    }

//End of Ajax with text file



//Ajax 