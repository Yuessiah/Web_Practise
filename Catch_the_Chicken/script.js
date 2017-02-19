$.ajax({
	type: "GET",
	url: "http://ctc.ccns.ncku.edu.tw/api/rank",
	dataType: "jsonp",
	success: function(res) {
		var data = res.data;
		var cntdown = 5;
		for(i in data) {
			if(cntdown-- == 0) break;
			var d = data[i];
			var divName = $('<div class="name"></div>').text(d.name);
			var divScore = $('<div class="score"></div>').text(d.score);
			var divBody = $('<div class="body"></div>').append(divName).append(divScore);
			$("#scoreboard").append(divBody);
		}
	}
});

$("#submit-btn").click(function() {
	var name = $("#submit-name").val();
	var flag = $("#submit-flag").val();

	var something = flag.slice("CHICKEN:".length, flag.lastIndexOf(":ATTACK", flag.length-1));
	console.log(something);
	if(something.match(":") === null) {
		$.ajax({
			type: "GET",
			url: "http://ctc.ccns.ncku.edu.tw/api/submit?id="+name+"&flag="+flag,
			dataType: "jsonp",
			success: function(res) {
				var status = res.status;
				if(status == 1) {
					$("#submit-btn").addClass("btn-warning");
					$("#submit-btn").html("Wrong!");
				}
				else {
					$("#submit-btn").addClass("btn-success");
					$("#submit-btn").html("Correct!");
				}
				$("#submit-btn").removeClass("btn-default");
			}
		});
	}
});

$.ajax({
	type: "GET",
	url: "http://ctc.ccns.ncku.edu.tw/api/problems",
	dataType: "jsonp",
	success: function(res) {
		var data = res.data;
		for(i in data) {
			var d = data[i];
			var divType = $('<div class="type"></div>').text(d.type);
			var divNo = $('<div class="no"></div>').text(d.no);
			var divTitle = $('<div class="title"></div>').text(d.title);
			var divScore = $('<div class="score"></div>').text(d.score);

			var detail = "https://github.com/ccns/106-club-fair-game-problems"
			var divDetail = $('<div class="detail"></div>').append($('<a target="_blank"><button class="btn btn-default">Detail</button></a>').attr("href", detail));

			var divBody = $('<div class="body"></div>').append(divType).append(divNo).append(divTitle).append(divScore).append(divDetail);
			$("#problems").append(divBody);
		}
	}
});
