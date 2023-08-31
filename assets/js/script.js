$(function(){
    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        dots:true,
        arrows:false
    });
    $('.ul-topping').slick({
        infinite: true,
        slidesToShow:3,
        dots:false,
        arrows: false
    });

    $('.down').on("click",function(){
        let ct = $('.count-only').val();
        if(ct > 1){
            ct--;
            $('.count-only').val(ct);
        }
    });

    $('.up').on("click",function(){
        let ct = $('.count-only').val();
        ct++;
        $('.count-only').val(ct);
        
    });

    $('.')
});  //jquery
