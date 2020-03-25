$(document).ready(function () {
    //data base where information is stored
    //var queryURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q="+x+"&key=AIzaSyBb9SLVx_0mHhYCPqnaZJjEX1Ii-iHEuuE";
    var apiKey2 = "d2b6366945a9a0c064fc4b1be7fadb4a932e099f"
    var queryURL2 = "https://wger.de/api/v2/exerciseinfo/?page=5";
    var x = ""
    exerciseinfo();
    function youVideo(x){
    
     $.ajax({
        url: "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q="+x+"&key=AIzaSyBb9SLVx_0mHhYCPqnaZJjEX1Ii-iHEuuE",
        method: "GET"
     }).then(function (response) {
        console.log(response)
        console.log("https://www.youtube.com/watch?v="+response.items[0].id.videoId)
        var a = $("<a>").attr("href", "https://www.youtube.com/watch?v="+response.items[0].id.videoId)

        window.location.href = "https://www.youtube.com/watch?v="+response.items[0].id.videoId;
 
     });
    }
       $("#endurance").on("click", function(){
         youVideo("cardio")
       })
        function exerciseinfo(){
    $.ajax({
        url: queryURL2,
        method: "GET"
    }).then(function (response) {
        //console.log(response)

    })
    };
});      