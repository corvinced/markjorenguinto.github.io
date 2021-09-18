$(document).ready(function () {
    //Disable full page
    // $("body").on("contextmenu",function(e){
    //     return false;
    // });
    
    // Disable part of page
    $("#serts_box").on("contextmenu",function(e){
        return false;
    });

    $("#navlogo").on("contextmenu",function(e){
        return false;
    });
});