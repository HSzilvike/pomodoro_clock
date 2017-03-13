$(document).ready (function() {

$("#minutes").val(('0'+($("#session_time").val())).slice(-2));
$("#seconds").val('0'+0).slice(-2);

$("#whichpart").val("Session");


//$("#play").on('click', startagain());



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
	$("#minutes").val(('0'+($("#session_time").val())).slice(-2));
};



var startagain = function() {

var timeInMinutes = $("#minutes").val();
var timeInSeconds = $("#seconds").val();
var currentTime = Date.parse(new Date());
var deadline = new Date(currentTime + timeInMinutes*60*1000 + timeInSeconds*1000);

initializeClock(deadline);
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


    if(t.total<=0) {
    clearInterval(timeinterval);

    	if($("#whichpart").val()=="Session") {
    	$("#whichpart").val("Break");
    	$("#minutes").val(('0'+($("#break_time").val())).slice(-2));
      	$("#seconds").val('0'+0).slice(-2);
      	startagain();
    	}

    	else {
		$("#whichpart").val("Session");
		$("#minutes").val(('0'+($("#session_time").val())).slice(-2));
      	$("#seconds").val('0'+0).slice(-2);
      	startagain();
    	}

      

    }
  },1000);

$("#stop").on('click', function() {
clearInterval(timeinterval);
$("#whichpart").val("Session");
$("#minutes").val(('0'+($("#session_time").val())).slice(-2));
$("#seconds").val('0'+0).slice(-2);
});

$("#pause").on('click', function() {
clearInterval(timeinterval);
});


$("#reset").on('click', function() {
clearInterval(timeinterval);
$("#whichpart").val("Session");
$("#session_time").val(25);
$("#break_time").val(5);
$("#minutes").val(('0'+($("#session_time").val())).slice(-2));
$("#seconds").val('0'+0).slice(-2);
});



};