
$(window).load(function(){
    $('.banner__title').addClass('show');   
});

$(document).ready(function() {    
    $('.card').hover(function() {
        var $this = $(this);
        setTimeout(function() {
            $this.find('figure').removeClass('trans');
        },200);
    });
    $('.card').mouseleave(function() {
        var $this = $(this);
        setTimeout(function() {
            $this.find('figure').addClass('trans');
        },200);
    });
});
