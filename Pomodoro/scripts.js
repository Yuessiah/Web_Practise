var timerButton = 0, timerRunning = 0;

var min, sec, modeSwitch = 0, t;
function timerStop() {
	clearTimeout(t);
}
function countdown() {
	sec--;
	t = setTimeout("countdown()", 1000);

	var time = String(min) + ":";
	if(sec < 10) time += 0 + String(sec);
	else time += String(sec);
	document.getElementById('time').innerHTML = time;

	if(sec === 0) {
		if(min === 0) {
			if(modeSwitch === 0) {
				document.getElementById('mode').innerHTML = "Break";
				min = document.getElementById('break-len').innerHTML;
				modeSwitch = 1;
			} else {
				document.getElementById('mode').innerHTML = "Session";
				min = document.getElementById('session-len').innerHTML;
				modeSwitch = 0;
			}
		}
		min--;
		sec = 60;
	}
}

$(function() {
	$(document).ready(function() {
		$(".minus,.plus").addClass("animated shake");
	});

	var m =".minus", p =".plus", s =".session", b =".break";
	$(s+">"+m).click(function() {
		timerRunning = 0; modeSwitch = 0;
		$(".timer>p:first-child").html("Session");
		var value = Number($("#session-len").html());
		if(value === 1) value = 2;
		$("#session-len,#time").html(String(value-1));
	});
	$(b+">"+m).click(function() {
		timerRunning = 0; modeSwitch = 1;
		$(".timer>p:first-child").html("Break");
		var value = Number($("#break-len").html());
		if(value === 1) value = 2;
		$("#break-len,#time").html(String(value-1));
	});
	$(s+">"+p).click(function() {
		timerRunning = 0; modeSwitch = 0;
		$(".timer>p:first-child").html("Session");
		var value = Number($("#session-len").html());
		$("#session-len,#time").html(String(value+1));
	});
	$(b+">"+p).click(function() {
		timerRunning = 0; modeSwitch = 1;
		$(".timer>p:first-child").html("Break");
		var value = Number($("#break-len").html());
		$("#break-len,#time").html(String(value+1));
	});


	$("h1").click(function() { $(".timer").addClass("animated fadeOut") });

	$(".timer").click(function() {
		if(timerButton === 0) {
			timerButton = 1;
      $(".minus,.plus").prop("disabled", true);
			if(timerRunning === 0) {
				min = $("#time").html() - 1;
				sec = 60;
				timerRunning = 1;
			}
			countdown();
		} else {
			timerButton = 0;
			$(".minus,.plus").prop("disabled", false);
			timerStop();
		}
	});
});
