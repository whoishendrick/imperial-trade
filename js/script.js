$(document).ready(function (){
    // Side Nav
    $('.sidenav').sidenav({
        edge: 'right'
    });

    // Back to top
    $(window).scroll(function(){
        if($(this).scrollTop()>800){
            $("#back-to-top").addClass("show-back-to-top");
        }else {
            $("#back-to-top").removeClass("show-back-to-top");
        }
    });
    $("#back-to-top").on("click", function(){
        $("html, body").animate({
            scrollTop: 0
        }, 800);
        return false;
    });
    /* ---------------------------------------
        PRELOADER
    ----------------------------------------- */
    $(window).on("load", function(){
     if($("#preloader")[0]){
         $("#preloader").delay(500).fadeTo(500, 0, function(){
             $(this).remove();
         });
     };
    });
});
