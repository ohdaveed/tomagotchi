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
  const input = $('#input-box').val();
  event.preventDefault();
  game.inputArr.push( $('#input-box').val())
});

$('#left-button').on('click', () => {
  console.log('left button');
  event.preventDefault();
});

$('#right-button').on('click', () => {
  console.log('right button');
  event.preventDefault();
});

$('#middle-button').on('click', () => {
  console.log('middle button');
  event.preventDefault();
});

const game = {
	time: 0,
	inputArr: [],
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