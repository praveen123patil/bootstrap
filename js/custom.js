

// $(document).ready(function() {
//     $(".hoverli").hover(
//         function() {
//             $('ul.file_menu').stop(true, true).slideDown('medium');
//         },
//         function() {
//             $('ul.file_menu').stop(true, true).slideUp('medium');
//         }
//     });

$(function() {
    var header = $(".collapse");
  
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        if (scroll >= 10) {
            $('#mynav').css("background-color",'brown');
        } else {
            $('#mynav').css("background-color",'#585858');
        }
    });
  
});

