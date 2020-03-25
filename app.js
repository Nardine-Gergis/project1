$(document).ready(function () {
    //data base where information is stored
    var key2 = "d2b6366945a9a0c064fc4b1be7fadb4a932e099f";

    var queryURL3 = "https://wger.de/api/v2/exerciseinfo/?page=3";
    $.ajax({
        url: queryURL3,
        method: "GET"
    }).then(function (response) {
        console.log(response)
        var number8 = response.results[8].description;
        var number10 = response.results[10].description;
        var number2 = response.results[2].description;
        var number15 = response.results[15].description;
        var p8 = number8;
        var p10 = $("<p>").text(number10);
        var p2 = number2;
        var p15 = number15
        $(".des8").append(p8);
 
        $(".des10").append(p10);
        $(".des2").append(p2);
        $(".des15").append(p15);
    });

    var queryURL4 = "https://wger.de/api/v2/exerciseinfo/?page=4";
    $.ajax({
        url: queryURL4,
        method: "GET"
    }).then(function (response) {
        console.log(response)
        //var number12 = response.results[12].description;
        var number18 = response.results[18].description;
        //var p12 = number12;
        var p18 = number18;
        $(".des18").append(p18);
 


    });

// var queryURL5 = "https://wger.de/api/v2/exerciseinfo/?page=5";
// $.ajax({
// url: queryURL5,
// method: "GET"
// }).then(function (response) {
//    console.log(response)
//    console.log(response.results[9].description);

// });

});      