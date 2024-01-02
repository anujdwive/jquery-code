// When your script tags put on the body tags
$("h1").css("color", "red");


// Using all thees propertys we get colorand fon-size and other things in console
// console.log($("h1").css("color"));
// console.log($("h1").css("font-size"));

// we can also add the class with the help of jQuery
// $("h1").addClass("first-title");

// we can also remove the class
// $("h1").removeClass("first-title");

// special mathods (it is give the answer in boolean on console)
// $("h1").hasClass("first-title");

// Using jQuery add the text
// $("h1").text("Bye");
// $("h1").html("<em>hy</em>");

// Using jQuery we can also change the attribute
$("a").attr("href", "http://www.facebook.com");

// When your script tags put on the head tags
// $(document).ready(function() {
//     $("h1").css("color", "green");
// })

// eventListioner by jQuery
// $("h1").click(function () {
//         $("h1").css("color", "yellow");
// });

// $("h1").on("mouseover", function(){
//     $("h1").css("color", "brown")
// })


// Animation
// $("button").click(function (){
//     $("h1").hide();
// });
// $("button").click(function (){
//     $("h1").show();
// });
$("button").click(function (){
    // $("h1").toggle();
    // $("h1").fadeOut(); // it is for hide something very slowly
    // $("h1").fadeIn(); // it is just oposit above statment
    // $("h1").fadeToggle();

    //$("h1").slideUp(); // it is for hide something in the face of slide
    //$("h1").slideDown(); // it is just oposit above statment
    // $("h1").slideToggle();
});

$("button").click(function (){

    // $("h1").animate({opacity: 0.5});// it is only for numeric value
    // $("h1").animate({color: red});// it is not working
    $("h1").animate({fontSize: "60px"});
    $("h1").slideUp().slideDown().animate({opacity: 0.5});//we can also use more than one methods

})
