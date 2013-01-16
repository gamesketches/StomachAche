window.onload = (function() {

	var WIDTH = 1000,
		HEIGHT = 600;

	Crafty.init(WIDTH, HEIGHT);
	 Crafty.background("#000000");

	Crafty.e("Player").attr({x: 500, y: 300, w: 50, h: 50});
	Crafty.e("Ground").attr({x: 0, y: 500, w: 1000, h: 100});	
});
