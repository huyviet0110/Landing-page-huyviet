$(".customer-list").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    prevArrow: `<button type='button' class='slick-prev pull-left'><img src="./images/arrow-left.svg" alt="arrow-left-icon"/></button>`,
    nextArrow: `<button type='button' class='slick-next pull-right'><img src="./images/arrow-right.svg" alt="arrow-right-icon"/></button>`,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                arrows: false,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                arrows: false,
            },
        },
    ],
});
