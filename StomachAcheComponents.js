Crafty.c("Player", {
	displacement: 0,
	originX: 0,
	side: true,
	init: function() {
		this.addComponent("2D,Canvas,Color,Keyboard, Twoway");
		this.color("#0000FF");
		this.twoway(7,3);
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
