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