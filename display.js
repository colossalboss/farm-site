// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
  let copy = array;
  let currentIndex = copy.length, temporaryValue,
    randomIndex;

  while (currentIndex !== 0) {
	randomIndex = Math.floor(Math.random() * currentIndex);
	currentIndex -= 1;
	temporaryValue = copy[currentIndex];
	copy[currentIndex] = copy[randomIndex];
	copy[randomIndex] = temporaryValue;
  }

  return copy;
}

let model = {
  // category: null,

  clarias: ['images/the-images/fish_1.jpeg', 'images/the-images/fish_2.jpeg', 'images/the-images/fish_3.jpeg', 'images/the-images/fish_4.jpeg', 'images/the-images/fish_5.jpeg', 'images/the-images/fish_6.jpeg', 'images/the-images/fish_7.jpeg', 'images/the-images/fish_8.jpeg', 'images/the-images/fish_9.jpeg', 'images/the-images/fish_10.jpeg', 'images/the-images/fish_11.jpeg', 'images/the-images/fish_12.jpeg', 'images/the-images/fish_13.jpeg', 'images/the-images/fish_14.jpeg', 'images/the-images/fish_15.jpeg'],

  hybrid: function() {
    return shuffle(this.clarias);
  },

  hetero: ['images/the-images/fish1.jpeg', 'images/the-images/fish2.jpeg', 'images/the-images/fish3.jpeg', 'images/the-images/fish4.jpeg', 'images/the-images/fish5.jpeg', 'images/the-images/fish6.jpeg'],

  getCategory: function() {
    if (octopus.type === 'clarias') {
      return this.clarias;
    } else if (octopus.type === 'hybrid') {
      return this.hybrid();
    } else if (octopus.type === 'heterobronchus') {
      return this.hetero;
    }
  console.log(octopus.type)
  }
};

let octopus = {
  init: function(text) {
    this.type = text;
    view.render();
  },

  getCategory: function() {
    return model.getCategory();
  }
};

let view = {
  render: function() {
    'use strict'
    let name = document.getElementById('name');
    let nameDiv = document.querySelector('.name-space');
    let fishes = octopus.getCategory();
    this.displayArea = document.getElementById('display-div');

    this.displayArea.innerHTML = '';

    for (let i = 0; i < fishes.length; i++) {
      let fish = fishes[i];

      let fishDiv = document.createElement('div');
      let round = document.createElement('p');
      let image = document.createElement('img');
      image.setAttribute('src', fish);
      image.setAttribute('alt', octopus.type);
      round.append(image);
      fishDiv.append(round);

      this.displayArea.append(fishDiv);
    };
    name.innerHTML = octopus.type;
    nameDiv.setAttribute('id', 'name-div');
  }
};

let elemArray = document.querySelectorAll('.button');

elemArray.forEach(function(elem) {
  elem.addEventListener('click', function(e) {
    let select = e.target.innerHTML.toLowerCase();
    octopus.init(select);
  });
});