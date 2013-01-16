window.onload = (function() {

	var WIDTH = 1000,
		HEIGHT = 600;

	Crafty.init(WIDTH, HEIGHT);
	 Crafty.background("#000000");

	Crafty.scene("gameplay", function() {
		var player = Crafty.e("Player").attr({x: 500, y: 300, w: 50, h: 50});
		Crafty.e("Ground").attr({x: 0, y: 500, w: 2000, h: 100});
		Crafty.e("Target").attr({x: 700, y: 450, w: 50, h: 50});
		Crafty.bind("EnterFrame", function() {

			var vpx = (player.x - WIDTH / 2);
			// Sets the viewport to the position derived from the previous calculation
			Crafty.viewport.x = -vpx;
		});
	});
	Crafty.scene("gameOver", function() {
		var textHandler = Crafty.e("2D,DOM,Text,Keyboard").attr({x: 500, y:300}).text("Relief :)\nPress 'r' to restart").textColor("#FF0000");
		textHandler.bind("KeyDown", function() {
			if(this.isDown('R')) {
				Crafty.scene("gameplay"); }
			});
		});
	
	Crafty.scene("gameplay");
});
