
//

$(document).ready(function(){

  var resizer = function () {
    var hWid = $('#header').width();
    var hHt = $('#header').height();
    var newFontSize = getMin(hWid, hHt, .7);
    if( newFontSize > hHt - 35 ){
      $('.icons').addClass('outside');
      newFontSize = getMin(hWid-150, hHt, .9);
    } else {
      $('.outside').removeClass('outside');
    }
    $('#name').css('font-size', newFontSize +'px');
  };

  var getMin = function (width, height, pct){
    var desHeight = height * pct;
    var desWidth = width / 8;
    if ( desWidth < (desHeight / 2) ){
      $('#name').width(desWidth * 4);
    } else {
      $('#name').width('100%');
    }
    return Math.min(desHeight, desWidth);
  }

  resizer();
  $(window).on('resize', resizer);

});
