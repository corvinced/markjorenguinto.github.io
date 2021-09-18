// function test() {
// 	if(e.button == 2) { // right click
//     return false; // do nothing!
//   }
// }

// $('img').mousedown(function (e) {
//   if(e.button == 2) { // right click
//     return false; // do nothing!
//   }
// }

$(document).ready(function () {
    //Disable full page
    // $("body").on("contextmenu",function(e){
    //     return false;
    // });
    
    // Disable part of page
    $("#navlogo").on("contextmenu",function(e){
        return false;
    });

    // $('#pops').bind('open image in new tab', function (e) {
    //     e.preventDefault();
    // });
});