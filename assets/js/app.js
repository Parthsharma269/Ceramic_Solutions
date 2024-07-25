const menuicon = document.querySelector(".menuicon");
const menulist = document.querySelector(".menulist");
menuicon.addEventListener("click", () => {
    menulist.classList.toggle("show");
    document.body.classList.toggle("overflow-hidden")
    menuicon.classList.toggle("show");
})

$('.Slider_1').slick({
    dots: false,
    arrows: false,
    autoplay: true,
    infinite: true,
    slidesToShow: 4.9,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
});