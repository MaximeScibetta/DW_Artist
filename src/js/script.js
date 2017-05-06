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
        document.body.classList.add('has-sidebar')
        sidebarOpened = true
    })


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