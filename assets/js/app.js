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
    autoplaySpeed: 2000,
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
                autoplaySpeed: 2000,
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
                autoplaySpeed: 2000,
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
                autoplaySpeed: 2000,
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
                slidesToScroll: 1,
                autoplaySpeed: 2000,
            }
        }
    ]
});

$('.Slider_2').slick({
    dots: true,
    arrows: true,
    autoplay: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 320,
            settings: {
                dots: true,
                arrows: false,
                autoplay: true,
                infinite: true,
                slidesToShow: 1,
                centerMode: true,
                slidesToScroll: 1,
                autoplaySpeed: 2000,
            }
        },
    ]
});

let mybutton = document.getElementById("myBtn");
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}