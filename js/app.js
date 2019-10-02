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
  game.start(userInput)

});

$('#left-button').on('click', () => {
  console.log('left button');
  game.feedPet()
  event.preventDefault();
});

$('#right-button').on('click', () => {
  console.log('right button');
  game.changeLights();
  event.preventDefault();
});

$('#middle-button').on('click', () => {
  console.log('middle button');
  game.play();
  event.preventDefault();
});

const game = {
	time: 0,
	inputArr: [],
	hunger: 0,
	newPet: function (){
	const newTom = new Tamagotchi(($('#input-box').val()), 0, 0, 0);
	console.log('newPet')
	},
	start: function (name) {

		const $timer = $('#timer');
        const interval = setInterval(() =>{
	    	this.time ++;
	        if(this.time % 100 === 0){
	        	this.increaseHunger()
	        	this.increaseBoredom()
	        	this.increaseAge()
	        } else {
	        	this.time++
	        }
	        $timer.text(`timer: ${this.time}s`)
	        }, 1000)
	},
	feedPet: function (){
		this.pet['hunger'] -= 1;
	},
	changeLights: function (){
		$('body').css('background-color', 'yellow')
	},
	play: function (){
		this.pet['boredom'] -= 1;
	},

	gameOver: function () {
		if (hunger === 10 || sleepiness === 10 || boredom === 10)
			console.log("Game Over")
	},
	printStats: function () {

  	},
  	increaseAge: function(){
  		this.pet['age'] += 1;
  	},
  	increaseHunger: function (){
  		this.pet['hunger'] += 2;
  	},
  	increaseBoredom: function (){
  		this.pet['boredom'] += 2;
  	}
}