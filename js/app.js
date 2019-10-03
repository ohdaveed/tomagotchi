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
	light: false,


	newPet: function (name) {
		const newTom = new Tamagotchi(name, 0, 0, 0, 0);
		console.log(newTom)
		this.pet = newTom
		this.start()
	},

	start: function () {

		const $timer = $('#timer');
		const $name = $('.toma-display')
        const interval = setInterval(() => {
	    	this.time++;
	        if(this.time % 2 === 0){
	        	this.increaseHunger()
	        	this.increaseBoredom()
	        	this.increaseAge()
	       		this.printStats()
	        }
	        // 
	        $timer.text(`timer: ${this.time}s`)
	        $name.text(`${this.pet.name}`)
	    }, 1000)
	},
	feedPet: function (){
		this.pet['hunger'] -= 2;
		this.printStats()

	},
	changeLights: function (){
		$('body').css('background-color', 'yellow')
	},
	play: function (){
		this.pet['boredom'] -= 1;
		this.printStats()
	},

	gameOver: function () {
		if (this.pet['hunger'] === 10 || this.pet['sleepiness'] === 10 || this.pet['boredom'] === 10)
			console.log("Game Over")
	},
	printStats: function () {
		const $hunger = $('#hunger');
		$hunger.text(`hunger: ${this.pet.hunger}`)

		const $boredom = $('#boredom');
		$boredom.text(`boredom: ${this.pet.boredom}`)

		const $sleepiness = $('#sleepiness');
		$sleepiness.text(`sleepiness: ${this.pet.sleepiness}`)

		const $age = $('#age');
		$age.text(`age: ${this.pet.age}`)
  	},
  	increaseAge: function(){
  		this.pet.age += 1;
  	},
  	increaseHunger: function (){
  		this.pet.hunger += 2;
  	},
  	increaseBoredom: function (){
  		this.pet.boredom += 2;
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


