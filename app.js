$(document).ready(function () {
               //data base where information is stored
    var queryURL = ("");
      //var queryURL2 =  ("");
        //youtube api key = AIzaSyBb9SLVx_0mHhYCPqnaZJjEX1Ii-iHEuuE
        //wger api key = d2b6366945a9a0c064fc4b1be7fadb4a932e099f


        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response)

        });
 
   });      