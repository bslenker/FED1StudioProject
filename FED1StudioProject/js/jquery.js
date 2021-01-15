//<reference path="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"/>


$(function () {
    //....Custom Lightbox....//
    //When a user clicks on a thumbnail img, display the lightbox container and insert <img>
    $('.thumb').on('click', function () {
        //Find the src attribute of the img tag that was clicked and store it as a var
        var imgSrc = $(this).attr('src');

        //Plug an img tag into the #lightbox-content
        $('#lightbox-content').html('<img src="' + imgSrc + '" class="img-responsive"/>');

        //Make the lightbox visible by fading in...
        $('#lightbox-container').fadeIn(500);

        //when the user clicks anywhere in the lightbox-container, fadeOut()
        $('#lightbox-container').on('click', function () {
            $(this).fadeOut(500);
        });

    });
})

//1. Create a new date in a variable
let currentYear = new Date().getFullYear();//empty constructor which defaults to todays date
//var year = document.getFullYear();

//2. Get the year part of the day
console.log(currentYear + "-- Current Year");

let copyright = document.getElementById("copyright");
//in the variable called copyright we have all information about the span element, not just 
//not just the content it contains
//4.Inject the date into the element
copyright.textContent = `${currentYear} -BEN SLENKER`;