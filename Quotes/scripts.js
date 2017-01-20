var quote = [
	"You have to understand, most of these people are not ready to be unplugged. And many of them are so inert, so hopelessly dependent on the system that they will fight to protect it.@Morpheus",
	"Talk is cheap show me the code@Linus Torvalds",
	"Stay hungry... ...stay foolish.@Steve Jobs",
	"その代わり、もう一生無理とは言わないこと。 それは、可能性を自ら押しとどめる良くない言葉よ。@神崎・H・アリア",
	"君は忘れられるの？ううん、絶対に無理！！私達は、あの瞬間のために生きているんだもん。君は私と同じ、演奏家だもの。@宮園 かをり",
	"Those that can, do. Those that can't, complain.@Linus Torvalds"
];
$(document).ready(function() {
	$("button").addClass("animated bounce");

  var preId = -1;
	$("#start").click(function() {
		var id;
    do { /* let next quote not the same with previous one. */
      id = Math.floor(Math.random()*quote.length);
    } while(id === preId);
    preId = id;
    
		var content = quote[id].split("@");
		$("#quote").text(content[0]);
		$("#author").text(content[1]);
	});
});
