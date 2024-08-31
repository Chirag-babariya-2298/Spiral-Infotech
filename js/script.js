var owl = $('.owl-carousel');
owl.owlCarousel({
    items:1,
    margin:20,
    nav:true,
    loop:true,
    // autoplay:true,
    // autoplayTimeout:3000,
    // autoplayHoverPause:true
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[3000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})
$(".owl-prev").html('<i class="fa-solid fa-angle-left" style="color: #362a50;  background-color: #FFBD3B; width: 30px; padding-top: 5px; padding-bottom: 5px; border-radius: 20px;"></i>')
$(".owl-next").html('<i class="fa-solid fa-angle-right" style="color: #362a50;  background-color: #FFBD3B; width: 30px; padding-top: 5px; padding-bottom: 5px; border-radius: 20px;"></i>')