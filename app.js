$(document).ready(function () {
    //data base where information is stored
    var queryURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q="+x+"&key=AIzaSyBb9SLVx_0mHhYCPqnaZJjEX1Ii-iHEuuE";
    var apiKey1 = "AIzaSyBb9SLVx_0mHhYCPqnaZJjEX1Ii-iHEuuE"
    var apiKey2 = "d2b6366945a9a0c064fc4b1be7fadb4a932e099f"
    var queryURL2 = "https://wger.de/api/v2/exercise/?muscles=1&equipment=3";
    var x = "Cardio"
    function youVideo(x){
     $.ajax({
        url: queryURL,
        method: "GET"
     }).then(function (response) {
        console.log(response)
        console.log("https://www.youtube.com/watch?v="+response.items[0].id.videoId)
        var a = $("<a>").attr("href", "https://www.youtube.com/watch?v="+response.items[0].id.videoId)
        //assign to page and append
        $("#cardio").append(a)
 
     });
    }
        youVideo("cardio");
        function exerciseinfo(){
    $.ajax({
        url: queryURL2,
        method: "GET"
    }).then(function (response) {
        console.log(response.results)

    })
    };
});      