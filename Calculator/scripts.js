var utopia = ["1", "dot", "0", "4", "8", "5", "9", "6"];

var t, tRange= 1000, p = 0, euthanasia = 0;
function theTrue() {
	$("#key-"+utopia[p++]).addClass("animated fadeOut");
	if(p == utopia.length) clearTimeout(t);
	t = setTimeout("theTrue()", tRange = tRange - p*23);
}


function keyboardDisable(s) {
	for(var i = 0; i <= 9; i++) {
		$("#key-"+i).prop("disabled", s);
	}
	var key = ["div", "X", "-", "plus", "dot", "equal"];
	for(var i = 0; i < key.length; i++) {
		$("#key-"+key[i]).prop("disabled", s);
	}
}
function screen() {
	return $("p#result").html();
}
function print(num) {
	if(opOn) return;

	if(num.length > 14) {
		$("p#result").html("Error");
		keyboardDisable(true);
	} else $("p#result").html(num);
}

var op, opOn = false, preNum;
function opStart_check() {
	if(!opOn) return;
	opOn = false;
	preNum = Number(screen());
	print("");
}
function figure() {
	if(preNum === undefined) return;
	else if(!opOn) {
		var num = Number(screen());
		switch(op) {
			case "+":
				print(String(preNum += num));
				break;
			case "-":
				print(String(preNum -= num));
				break;
			case "*":
				print(String(preNum *= num));
				break;
			case "/":
				print(String(preNum /= num));
		}
	}
}



$(function() {
	$("#key-cal").click(function() {
		if(euthanasia === 0) {
			theTrue();
			euthanasia = 1;
		} else $(".device").addClass("animated fadeOut");
	});


	$("#key-0").click(function() {
		opStart_check();
		var num = screen();
		print((num === "0")? "0" : num+"0");
	});
	$("#key-1").click(function() {
		opStart_check();
		var num = screen();
		print((num === "0")? "1" : num+"1");
	});
	$("#key-2").click(function() {
		opStart_check();
		var num = screen();
		print((num === "0")? "2" : num+"2");
	});
	$("#key-3").click(function() {
		opStart_check();
		var num = screen();
		print((num === "0")? "3" : num+"3");
	});
	$("#key-4").click(function() {
		opStart_check();
		var num = screen();
		print((num === "0")? "4" : num+"4");
	});
	$("#key-5").click(function() {
		opStart_check();
		var num = screen();
		print((num === "0")? "5" : num+"5");
	});
	$("#key-6").click(function() {
		opStart_check();
		var num = screen();
		print((num === "0")? "6" : num+"6");
	});
	$("#key-7").click(function() {
		opStart_check();
		var num = screen();
		print((num === "0")? "7" : num+"7");
	});
	$("#key-8").click(function() {
		opStart_check();
		var num = screen();
		print((num === "0")? "8" : num+"8");
	});
	$("#key-9").click(function() {
		opStart_check();
		var num = screen();
		print((num === "0")? "9" : num+"9");
	});
	$("#key-dot").click(function() {
		opStart_check();
		var num = screen();
		if(num.match(/\./g) !== null) return;
		print((num === "")? "0." : num+".");
	});

	$("#key-AC").click(function() {
		keyboardDisable(false);
		print("");
		opOn = false;
		preNum = undefined;
	});
	$("#key-div").click(function() {
		figure();
		opOn = true;
		op = "/";
	});
	$("#key-X").click(function() {
		figure();
		opOn = true;
		op = "*";
	});
	$("#key--").click(function() {
		figure();
		opOn = true;
		op = "-";
	});
	$("#key-plus").click(function() {
		figure();
		opOn = true;
		op = "+";
	});

	$("#key-equal").click(function() {
		figure();
		keyboardDisable(true);
	});
});
