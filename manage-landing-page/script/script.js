
// : Submit msg test on submit

document.querySelector( '#js-submit' ).addEventListener( 'click', function ( e ) {
    document.querySelector( '#js-message' ).classList.toggle( 'is-hidden' );
} );

// : Slider

const sliderEl = document.querySelector( '#js-reviews' );
if ( sliderEl ) {

    const slider = new A11YSlider( sliderEl, {
        autoplay: true,
        arrows: false,
        adaptiveHeight: true,
        infinite: true,
        dots: true,
        responsive: {
            500: { // 500 to 740
                slidesToShow: 1,
            },
            740: { // 740 to 960
                slidesToShow: 1,
            },
            960: { // 960px to 1279px
                slidesToShow: 2,
            },
            1280: { // 1280px and up
                slidesToShow: 3,
            },
            1900: { // 1280px and up
                slidesToShow: 4,
            }
        }
    } );

}