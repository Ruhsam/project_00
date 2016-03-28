$(document).ready(function(){
   
var car1 = 0;

var car2 = 0;

var offset = 5;

  //movement on competitor 1
    $(document).keypress(function( event ) {
       if (event.which == 97 ) {
            event.preventDefault();
            var car1= car1+1;
            var pos = $('#car1').position();
          $('#car1').css('left', pos.left + offset);  
   }
            //finishing();
    });
  //movement on competitor 2
    $(document).keypress(function( event ) {
       if (event.which == 107 ) {
            event.preventDefault();

            car2 = car2+1;
           var pos = $('#car2').position();
          $('#car2').css('left', pos.left + offset);  
            //finishing();
       }
   });  
var carLoc1 = $('#car1').offset();

var carLoc2 = $('#car2').offset();

var finishLine = $('#finish').offset();

function finishing() {
if (carLoc1 >= finishLine) {
 alert('Top Player is the Winner!');
}
 else if (carLoc2 >= finishLine){
 alert('Bottom Player is the Winner!');
 }
}
});



