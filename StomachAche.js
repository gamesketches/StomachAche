window.onload = (function() {

	var WIDTH = 1000,
		HEIGHT = 600;

	Crafty.init(WIDTH, HEIGHT);
	 Crafty.background("#000000");

	Crafty.scene("gameplay", function() {
		var player = Crafty.e("Player").attr({x: 500, y: 300, w: 50, h: 50});
		var ground = Crafty.e("Ground").attr({x: 0, y: 500, w: 2000, h: 100});
		ground.direction = 0;
		Crafty.e("Target").attr({x: 100, y: 200, w: 50, h: 50});
		var platform = Crafty.e("Ground").attr({x: 100, y: 300, w: 200, h: 50});
		var otherGround = Crafty.e("Ground").attr({x: 900, y: 400, w: 100, h: 200});
		otherGround.direction = 0;
		
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
