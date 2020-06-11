/* menu */


/* menu */
const menu = document.querySelector('.ham');
const menuSlide = document.querySelector('.menu');
const main = document.querySelector('.list-main');
const about = document.querySelector('.list-about');
const portfolio = document.querySelector('.list-portfolio');
const contact = document.querySelector('.list-contact');

menu.addEventListener('click', function(){
    this.classList.toggle('active');
    menuSlide.classList.toggle('active');
});

main.addEventListener('click', function(){
    menu.classList.toggle('active');
    menuSlide.classList.toggle('active');
});
about.addEventListener('click', function(){
    menu.classList.toggle('active');
    menuSlide.classList.toggle('active');
});
portfolio.addEventListener('click', function(){
    menu.classList.toggle('active');
    menuSlide.classList.toggle('active');
});
contact.addEventListener('click', function(){
    menu.classList.toggle('active');
    menuSlide.classList.toggle('active');
});


/* main */
$('.skip').click(function(){
    $('.cut1').fadeOut();
    $('.cut2').fadeOut();
    $('.skip').fadeOut();
    $('.main-bg').show();
    $('.intro').show();
    $('.goto').show();
});


/* about */
$(window).on("scroll",function(){
    var sc_top = $(this).scrollTop();
    
    if (sc_top >= 800) {
        $('#bg2').fadeIn();
        $('#bg1').delay("fast").fadeIn();
        $('#sd').delay("slow").fadeIn();
        $('.per').each(function(){
            var $this = $(this);
            var per = $this.attr('per');
            $this.css("width", per + '%');
        });
    }
});

$('.night').click(function(){
    $('.about-bg').fadeIn();
    $('.right').css({'background':'rgba(255,255,255,0.7)'});
    $('.right .info td span').css({'color':'#000'});
    $('.night').css({'box-shadow':'0px 0px 30px rgba(255, 255, 255, 1)'});
    $('.day').css({'box-shadow':'none'});
});

$('.day').click(function(){
    $('.about-bg').fadeOut();
    $('.right').css({'background':'none'});
    $('.right .info td span').css({'color':'#aaa'});
    $('.day').css({'box-shadow':'0px 0px 30px rgba(136, 204, 255, 1)'});
    $('.night').css({'box-shadow':'none'});
});


/* contact */
$(window).on("scroll",function(){
    var sc_top = $(this).scrollTop();
    
    if (sc_top >= 7250) {
        $('.contact > div').css({'height':'100%'});
        $('.moon2').delay(1500).fadeIn("slow");
        $('.contact .content').delay(1000).fadeIn();
        $('.rocket').delay(3000).fadeIn("slow");
    }
});