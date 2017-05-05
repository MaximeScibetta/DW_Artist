/* skred/DW_Artist
 *
 * /src/js/gallery.js - Main scripts
 *
 * coded by skred@DW_Artist !
 * started at 01/03/2017
 */
let $gallery;

// const fChangeGal = function ( oEvent ) {
//     oEvent.preventDefault();
//     console.log($( $gallery );
//     $( `#${ ( gallery ).data( "gal-target" ) }` ).addClass( "here" );
// };
const fChangeGal = function(oEvent) {
    oEvent.preventDefault();

    $gallery.parent().filter(".active").removeClass("active");
    $(this).parent().addClass("active");
    $(".container-media .gallerie.here").removeClass("here").addClass("nothere");
    $(`#${ $( this ).data( "gal-target" ) }`).addClass("here").removeClass("nothere");
};

$(function() {

    // 2. Tab
    ($gallery = $("ul.nav a")).on("click", fChangeGal);

});