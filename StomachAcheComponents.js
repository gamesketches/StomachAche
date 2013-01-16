Crafty.c("Player", {
	displacement: 0,
	side: true,
	init: function() {
		this.addComponent("2D,Canvas,Color,Keyboard, Twoway, Gravity");
		this.color("#0000FF");
		this.twoway(7,7);
		this.gravity("Ground");
		this.bind("EnterFrame", this.coolDown);
		this.bind("KeyDown", function() {
			this.unbind("EnterFrame", this.coolDown);
			this.bind("EnterFrame", this.incrementDisplacement);
			});
		this.bind("KeyUp", function() {
			this.unbind("EnterFrame", this.incrementDisplacement);
			this.bind("EnterFrame", this.coolDown);
			});
		},
	incrementDisplacement: function() {
		this.displacement += 0.1;
		if(this.side){
			this.x += this.displacement;
			this.side = false;
			}
		else	{
			this.x -= this.displacement;
			this.side = true;
			}
	},
	coolDown: function() {
		this.displacement -= 0.05;
		if(this.displacement < 0){
			this.displacement = 0;
			}
		else {
			if(this.side){
				this.x += this.displacement;
				this.side = false;
				}
			else	{
				this.x -= this.displacement;
				this.side = true;
				}
		}
	}
});

Crafty.c("Ground", {
	displacement: 0,
	direction: 1,
	side: true,
	init: function() {
		this.addComponent("2D,Canvas,Color");
		this.color("#888888");
		this.bind("EnterFrame", this.coolDown);
		this.bind("KeyDown", function() {
			this.unbind("EnterFrame", this.coolDown);
			this.bind("EnterFrame", this.incrementDisplacement);
			});
		this.bind("KeyUp", function() {
			this.unbind("EnterFrame", this.incrementDisplacement);
			this.bind("EnterFrame", this.coolDown);
			});
		this.bind("EnterFrame", function() {
			this.x += this.direction;
			if(this.x >= 500 && this.direction == 1){
				this.direction = -1;
				}
			else if(this.x <= 100 && this.direction == -1){
				this.direction = 1;
				}
			});
		},
	incrementDisplacement: function() {
		if(this.displacement < 100){
			this.displacement += 1;
			}
		if(this.side){
			this.x += this.displacement;
			this.side = false;
			}
		else	{
			this.x -= this.displacement;
			this.side = true;
			}
	},
	coolDown: function() {
		this.displacement -= 0.8;
		if(this.displacement < 0){
			this.displacement = 0;
			}
		else {
			if(this.side){
				this.x += this.displacement;
				this.side = false;
				}
			else	{
				this.x -= this.displacement;
				this.side = true;
				}
		}
	}
});

Crafty.c("Target", {
	displacement: 0,
	side: true,
	init: function() {
		this.addComponent("2D,Canvas,Color, Collision");
		this.color("#FFFF00");
		this.collision();
		this.onHit("Player", function() {
			Crafty.scene("gameOver");
			});
		this.bind("EnterFrame", this.coolDown);
		this.bind("KeyDown", function() {
			this.unbind("EnterFrame", this.coolDown);
			this.bind("EnterFrame", this.incrementDisplacement);
			});
		this.bind("KeyUp", function() {
			this.unbind("EnterFrame", this.incrementDisplacement);
			this.bind("EnterFrame", this.coolDown);
			});
		},
	incrementDisplacement: function() {
		this.displacement += 0.1;
		if(this.side){
			this.x += this.displacement;
			this.side = false;
			}
		else	{
			this.x -= this.displacement;
			this.side = true;
			}
	},
	coolDown: function() {
		this.displacement -= 0.05;
		if(this.displacement < 0){
			this.displacement = 0;
			}
		else {
			if(this.side){
				this.x += this.displacement;
				this.side = false;
				}
			else	{
				this.x -= this.displacement;
				this.side = true;
				}
		}
	}
});
	
