// Do your work in this file.

for (var i = 0; i < 196; i++) {
    if (i % 2 == 0){
        var $divBox = $( "<div class='box type-1'></div>" );
    }
    else{
        var $divBox = $( "<div class='box type-2'></div>" );
    }
    $( "body" ).append( $divBox );
}

$( ".box" ).click(function() {
  $( this ).toggleClass("clicked");
});