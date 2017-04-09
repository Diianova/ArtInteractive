$(function(){

// Page slide down 
var btn = $('main').find('button');
var pageHead = ($('header').height()) + ($('.about').height());

btn.on('click',function(e){
    $('html,body').animate({scrollTop: pageHead}, 1500);
});



// Triangle cookie
var triangle = $('header').find('.cookies-icon');
var cookie = $('body').find('.cookies');

    triangle.on('mouseenter', function(){
        $(this).animate({opacity: 0.2}, 1000, function(){
            $(this).animate({opacity: 1}, 1000);
        }); 
    });

    triangle.on('click', function(){
        cookie.toggleClass('hidden').fadeOut(30000);
    });



// Back to top button action
var btt = $('.btt-bt-js');
console.log(btt);

btt.on('click', function(e){
    $('html, body').animate({
        scrollTop: 0}, 500);

        e.preventDefault();

});

$(window).on('scroll', function(){
    var height = $(this).height();
    var top = $(this).scrollTop();
    
    console.log(top);
    if(top > 250){
        if(!btt.is(':visible')){
            btt.show();
        }
    }else {
        btt.hide();
    }
});

// Back to top button animation

var btnButterfly = $('body').find('.btt-img');

function butterfly(){
    btnButterfly.animate({opacity: 0.1}, 2000, function(){
        $(this).animate({opacity: 1}, 1000, function(){
            setTimeout(butterfly);
        });
    }); 

}
setTimeout(butterfly);




});
