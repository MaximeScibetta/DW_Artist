(function() {
    /**************/
    // Create a lightbox
    /**************/
    var $lightbox = $("<div class='lightbox'></div>");
    var $img = $("<img>");
    var $caption = $("<p class='caption'></p>");

    // Add image and caption to lightbox

    $lightbox
        .append($img)
        .append($caption);

    // Add lighbox to document

    $('body').append($lightbox);

    $('.gallerie img').click(function(e) {
        e.preventDefault();

        // Get image link and description
        var src = $(this).attr("src");
        var cap = $(this).attr("alt");

        // Add data to lighbox

        $img.attr('src', src);
        $caption.text(cap);

        // Show lightbox

        $lightbox.fadeIn('fast');

        $lightbox.click(function() {
            $lightbox.fadeOut('fast');
        });
    });

    /**************/
    // Menu Gallery
    /**************/
    let $gallery;

    const fChangeGal = function(oEvent) {
        oEvent.preventDefault();

        $gallery.parent().filter(".active").removeClass("active");
        $(this).parent().addClass("active");
        $(".container-media .gallerie.here").removeClass("here").addClass("nothere");
        $(`#${ $( this ).data( "gal-target" ) }`).addClass("here").removeClass("nothere");
    };


    // 2. Tab
    ($gallery = $("ul.nav a")).on("click", fChangeGal);


    /**************/
    // Sidebar Menu
    /**************/
    let sidebarOpened = false
    let button = document.querySelector('#menu')

    button.addEventListener('click', function(e) {
        e.stopPropagation()
        e.preventDefault()
        document.body.classList.toggle('has-sidebar')
        button.classList.add('open')
        sidebarOpened = true
    });

    document.body.addEventListener('click', function() {
        if (sidebarOpened) {
            document.body.classList.remove('has-sidebar')
        }
    });

    /**************/
    // Trombinoscop
    /**************/

    let $trombinoFigures;
    const fHandleTrombino = function() {
        // On utilise fadeIn et fadeOut au lieu de show & hide
        $trombinoFigures.filter(":visible").fadeOut(function() {
            let $next = $(this).next();
            if ($next.length === 0) {
                $next = $trombinoFigures.first();
            }
            $next.fadeIn();
        });
    };

    // 3. Trombinoscope
    $(function() {
        $trombinoFigures = $("#trombino figure");
        $trombinoFigures.hide().first().show();
        setInterval(fHandleTrombino, 2500);
    });
}());

/**************/
// Formulaire
/**************/

// (function() {
//     "use strict";
//     var fieldEmpty = /^$/;
//     var fieldNameSurname = /^([^\s]|[^\s].*[^\s])\s[^\s]+$/;
//     var fieldEmail = /[A-Za-z0-9._%+\\-]+@[A-Za-z0-9._%+\\-]+\.[A-Za-z]{2,}$/;


//     var fVerifInputEmail = function(e) {
//         e.currentTarget.parentNode.parentNode.querySelector(".info").classList.remove("on");
//         if (!fieldEmail.test(document.getElementById("email").value)) {
//             e.currentTarget.parentNode.parentNode.querySelector(".error").classList.add("on");
//         }
//     };
//     var fVerifInputname = function(e) {
//         e.currentTarget.parentNode.parentNode.querySelector(".info").classList.remove("on");
//         if (!fieldNameSurname.test(document.getElementById("name").value)) {
//             e.currentTarget.parentNode.parentNode.querySelector(".error").classList.add("on");
//         }
//     };
//     var fFocusOnInput = function(e) {
//         //ajoute une classe "on" au div de la classe "info" correspondant à l'input qui vient de recevoir le focus
//         e.currentTarget.parentNode.parentNode.querySelector(".info").classList.add("on");

//         //elle supprime les classes "on" aux div de la classe "error"
//         e.currentTarget.parentNode.parentNode.querySelector(".error").classList.remove("on");

//         //et de la classe "atSubmit" correspondants au champ qui vient de recevoir le focus,
//         //afin que le message d'une éventuelle ancienne erreur soir rendu invisible.
//         e.currentTarget.parentNode.parentNode.querySelector(".atSubmit").classList.remove("on");
//     };
//     var fPageIsLoaded = function() {
//         // code pour démarrer le script ici

//         //fFocusOnInput
//         document.getElementById("pays").addEventListener("focus", fFocusOnInput, false);
//         document.getElementById("telFix").addEventListener("focus", fFocusOnInput, false);
//         document.getElementById("conf").addEventListener("focus", fFocusOnInput, false);

//         //fVerifInputname
//         document.getElementById("name").addEventListener("focus", fFocusOnInput, false);
//         document.getElementById("name").addEventListener("blur", fVerifInputname, false);

//         //fVerifInputEmail
//         document.getElementById("email").addEventListener("focus", fFocusOnInput, false);
//         document.getElementById("email").addEventListener("blur", fVerifInputEmail, false);
//     };

//     //gestion de l'événement "load" pour démarrer le script
//     window.addEventListener("load", fPageIsLoaded, false);
// }());