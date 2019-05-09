$(document).ready(function() {

	$(".one").mouseenter(function() {
		$(".leftone").animate({"left":"-500px"}, 500);
		$(".rightone").animate({"right":"-500px"}, 500);
		$(".textone").fadeIn(500);
	});

	$(".one").mouseleave(function() {
		$(".leftone").animate({"left":"0px"}, 1000);
		$(".rightone").animate({"right":"0px"}, 1000);
		$(".textone").fadeOut(500);
	});

	$(".two").mouseenter(function() {
		$(".lefttwo").animate({"left":"-500px"}, 500);
		$(".righttwo").animate({"right":"-500px"}, 500);
		$(".texttwo").fadeIn(500);
	});

	$(".two").mouseleave(function() {
		$(".lefttwo").animate({"left":"0px"}, 1000);
		$(".righttwo").animate({"right":"0px"}, 1000);
		$(".texttwo").fadeOut(500);
	});

	$(".three").mouseenter(function() {
		$(".leftthree").animate({"left":"-500px"}, 500);
		$(".rightthree").animate({"right":"-500px"}, 500);
		$(".textthree").fadeIn(500);
	});

	$(".three").mouseleave(function() {
		$(".leftthree").animate({"left":"0px"}, 1000);
		$(".rightthree").animate({"right":"0px"}, 1000);
		$(".textthree").fadeOut(500);
	});

		$(".four").mouseenter(function() {
		$(".leftfour").animate({"left":"-500px"}, 500);
		$(".rightfour").animate({"right":"-500px"}, 500);
		$(".textfour").fadeIn(500);
	});

	$(".four").mouseleave(function() {
		$(".leftfour").animate({"left":"0px"}, 1000);
		$(".rightfour").animate({"right":"0px"}, 1000);
		$(".textfour").fadeOut(500);
	});

	$(".five").mouseenter(function() {
		$(".leftfive").animate({"left":"-500px"}, 500);
		$(".rightfive").animate({"right":"-500px"}, 500);
		$(".textfive").fadeIn(500);
	});

	$(".five").mouseleave(function() {
		$(".leftfive").animate({"left":"0px"}, 1000);
		$(".rightfive").animate({"right":"0px"}, 1000);
		$(".textfive").fadeOut(500);
	});


});