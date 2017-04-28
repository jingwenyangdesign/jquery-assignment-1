// Do your work in this file.

var $divView = $( "<div class='view'></div>" );
$( "body" ).append( $divView );

var $divGrass = $( "<div class='grass'></div>" );
var $divSun = $( "<div class='sun'></div>" );
var $divMountain = $( "<div class='mountain'></div>" );
$( ".view" ).append( $divGrass,$divSun,$divMountain );

var $divMountainTop = $( "<div class='mountain-top'></div>" );
$( ".mountain" ).append( $divMountainTop );

var t = 1;
while (t < 6) {
    $("<div>").addClass("ray-" + t).appendTo( ".sun" );
    t++;
}

var m = 1;
do {
    $("<div>").addClass("mountain-cap-" + m).appendTo( ".mountain" );
    m++;
} while (m < 4);