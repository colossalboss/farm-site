let model = {
  // category: null,

  clarias: ['fish_1.jpg', 'fish_2.jpg', 'fish_3.jpg', 'fish_4.jpg', 'fish_5.jpg', 'fish_6.jpg'],

  hybrid: ['fish-1.jpg', 'fish-2.jpg', 'fish-3.jpg', 'fish-4.jpg', 'fish-5.jpg', 'fish-6.jpg'],

  hetero: ['fish1.jpg', 'fish2.jpg', 'fish3.jpg', 'fish4.jpg', 'fish5.jpg', 'fish6.jpg'],

  getCategory: function() {
    let select = document.getElementById('button').textContent;
    let text = select.toLowerCase();
    if (text === 'clarias') {
      return this.clarias;
    } else if (text === 'hybrid') {
      return this.hybrid;
    } else if (text === 'heterobronchus') {
      return this.hetero;
    }
  }
};

let octopus = {
  init: function() {
    view.render();
  },

  getCategory: function() {
    return model.getCategory();
  }
};

let view = {
  render: function() {
    let fishes = octopus.getCategory();
    this.displayArea = document.getElementById('display-div');

    this.displayArea.innerHTML = '';

    for (let i = 0; i < fishes.length; i++) {
      let fish = fishes[i];

      let fishDiv = document.createElement('div');
      let image = document.createElement('img');
      image.setAttribute('src', fish);
      fishDiv.append(image);

      this.displayArea.append(fishDiv);
    };

  }
};

document.getElementById('choose').addEventListener('click', function(e) {
  octopus.init();
})