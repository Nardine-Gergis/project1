$(document).ready(function () {
    //data base where information is stored
    //var queryURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q="+x+"&key=AIzaSyBb9SLVx_0mHhYCPqnaZJjEX1Ii-iHEuuE";
    var apiKey2 = "d2b6366945a9a0c064fc4b1be7fadb4a932e099f"
    var queryURL2 = "https://wger.de/api/v2/exerciseinfo/?page=5";
    var x = ""
    exerciseinfo();

    //function that runs the first call
    function youVideo(x){
    
     $.ajax({
        url: "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q="+x+"&key=AIzaSyBb9SLVx_0mHhYCPqnaZJjEX1Ii-iHEuuE",
        method: "GET"
     }).then(function (response) {
        console.log(response)
        console.log("https://www.youtube.com/watch?v="+response.items[0].id.videoId)
        var a = $("<a>").attr("href", "https://www.youtube.com/watch?v="+response.items[0].id.videoId)

    
        window.open("https://www.youtube.com/watch?v="+response.items[0].id.videoId, "_blank")
 
     });
    }
        //event listener for endurance
       $("#endurance").on("click", function(){
         youVideo("cardio")
       })
       //event listener for hiit
       $("#Hiit").on("click", function(){
        youVideo("hiit")
      })
      //event listener for low intensity cardio
      $("#low").on("click", function(){
        youVideo("running")
      })
      //event listener for zumba
      $("#zumba").on("click", function(){
        youVideo("dance workout")
      })
      //event listener for chest
      $("#chest").on("click", function(){
        youVideo("chest workout")
      })
      //event listener for back
      $("#back").on("click", function(){
        youVideo("back workout")
      })
      //event listener for legs
      $("#legs").on("click", function(){
        youVideo("leg workout")
      })
      //event listener for abs
      $("#abs").on("click", function(){
        youVideo("abs workout")
      })
      //event listener for karma
      $("#karma").on("click", function(){
        youVideo("karma yoga")
      })
      //event listener for zumba
      $("#bhakti").on("click", function(){
        youVideo("bhakti yoga")
      })
      //event listener for zumba
      $("#jnana").on("click", function(){
        youVideo("jnana yoga")
      })
      //event listener for zumba
      $("#raja").on("click", function(){
        youVideo("raja yoga")
      })
      //event listener for zumba
      $("#calisthenics").on("click", function(){
        youVideo("calisthenics workout")
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