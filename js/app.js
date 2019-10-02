class Tamagotchi {
	constructor(name, age, hunger, sleepiness, boredom ) {
	this.name = name;
	this.age = age;
	this.hunger = hunger;
	this.sleepiness = sleepiness;
	this.boredom = boredom;

	}
}

$('#submit-btn').on('click', () => {
  console.log('clicked');
  console.log( $('#input-box').val());
});

const game = {
	time: 0,
	feedPet: function (){

	},
	changeLights: function (){

	},
	play: function (){

	},
	name: function (){

	},
	gameOver: function () {
		if (hunger === 10 || sleepiness === 10 || boredom === 10)
			console.log("Game Over")
	},
	printStats: function () {

	},
  	startTimer: function (){

  	},
}