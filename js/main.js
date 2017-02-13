var main = function(){
    $('.list').click(function() {
       $('li').animate({
           width: "50px" 
       },
       300); 
    });
};
$(document).ready(main);

