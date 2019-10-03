class Tamagotchi {
	constructor(name, age, hunger, sleepiness, boredom ) {
	this.name = name;
	this.age = age;
	this.hunger = hunger;
	this.sleepiness = sleepiness;
	this.boredom = boredom;
	}
};

const game = {
	time: 0,
	inputArr: [],
	pet: null,


	newPet: function (name) {
		const newTom = new Tamagotchi(name, 0, 0, 0, 0);
		console.log(newTom)
		this.pet = newTom
		this.start()
	},

	start: function () {

		const $timer = $('#timer');
        const interval = setInterval(() => {
	    	this.time++;
	        if(this.time % 10 === 0){
	        	this.increaseHunger()
	        	this.increaseBoredom()
	        	this.increaseAge()
	       		// 	
	        }
	        // 
	        $timer.text(`timer: ${this.time}s`)
	    }, 1000)
	},
	feedPet: function (){
		this.newTom['hunger'] -= 1;
	},
	changeLights: function (){
		$('body').css('background-color', 'yellow')
	},
	play: function (){
		this.newTom['boredom'] -= 1;
	},

	gameOver: function () {
		if (this.pet['hunger'] === 10 || this.pet['sleepiness'] === 10 || this.pet['boredom'] === 10)
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



$('#submit-btn').on('click', () => {
  console.log('clicked');
  console.log( $('#input-box').val());
  const input = $('#input-box').val();
  // game.inputArr.push(input)
  game.newPet(input);
  event.preventDefault();

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
