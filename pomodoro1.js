$(document).ready (function() {

$("#minutes").val($("#session_time").val());
$("#seconds").val('0'+0).slice(-2);










$("#play").on('click', function() {

var timeInMinutes = $("#minutes").val();
var timeInSeconds = $("#seconds").val();
var currentTime = Date.parse(new Date());
var deadline = new Date(currentTime + timeInMinutes*60*1000 + timeInSeconds*1000);

initializeClock(deadline);

});







});



//adjusting the session and break time with the arrows:

var changeValue = function (change, whichtime) {
	var currentTime = $(whichtime).val();
	if (change == "felfele") {
		currentTime++;
	}
		else {
			if (currentTime == 1) {
				var currentTime = 1;
			}
			else 
				{currentTime--; };
	};
	$(whichtime).val(currentTime);
	$("#minutes").val($("#session_time").val());
};





function getTimeRemaining(endtime){
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor( (t/1000) % 60 );
  var minutes = Math.floor( (t/1000/60) % 60 );
  return {
    'total': t,
    'minutes': minutes,
    'seconds': seconds
  };
};


//this function controls all the buttons

function initializeClock(endtime){
  
  var timeinterval = setInterval(function(){
    var t = getTimeRemaining(endtime);
   
    $("#minutes").val(('0'+t.minutes).slice(-2));
    $("#seconds").val(('0'+t.seconds).slice(-2));


    if(t.total<=0){
      clearInterval(timeinterval);
    }
  },1000);

$("#stop").on('click', function() {
clearInterval(timeinterval);
$("#minutes").val($("#session_time").val());
$("#seconds").val('0'+0).slice(-2);
});

$("#pause").on('click', function() {
clearInterval(timeinterval);
});


$("#reset").on('click', function() {
clearInterval(timeinterval);
$("#session_time").val(25);
$("#break_time").val(5);
$("#minutes").val($("#session_time").val());
$("#seconds").val('0'+0).slice(-2);
});



};