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
    slidesToShow: 3.9,
    slidesToScroll: 1,
    focusOnSelect: true,
    autoplaySpeed: 2000,
    adaptiveHeight: true,
    centerPadding: '24px',
    responsive: [
        {
            breakpoint: 1441,
            settings: {
                dots: false,
                arrows: false,
                autoplay: true,
                infinite: true,
                slidesToShow: 3,
                centerMode: true,
                slidesToScroll: 1,
                focusOnSelect: true,
                autoplaySpeed: 2000,
                adaptiveHeight: true,
                centerPadding: '24px',
            }
        },
        {
            breakpoint: 1025,
            settings: {
                dots: false,
                arrows: false,
                autoplay: true,
                infinite: true,
                slidesToShow: 2,
                centerMode: true,
                slidesToScroll: 1,
                focusOnSelect: true,
                autoplaySpeed: 2000,
                adaptiveHeight: true,
                centerPadding: '24px',
            }
        },
        {
            breakpoint: 769,
            settings: {
                dots: false,
                arrows: false,
                autoplay: true,
                infinite: true,
                slidesToShow: 2,
                centerMode: true,
                slidesToScroll: 1,
                focusOnSelect: true,
                autoplaySpeed: 2000,
                adaptiveHeight: true,
                centerPadding: '24px',
            }
        },
        {
            breakpoint: 640,
            settings: {
                dots: false,
                arrows: false,
                autoplay: true,
                infinite: true,
                slidesToShow: 1,
                centerMode: true,
                slidesToScroll: 1,
                focusOnSelect: true,
                autoplaySpeed: 2000,
                adaptiveHeight: true,
                centerPadding: '24px',
            }
        }
    ]
});