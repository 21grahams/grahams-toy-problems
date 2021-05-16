// messing around with class and subclass components

class Component {
  constructor() {
    console.log('INSIDE THE COMPONENT CONSTRUCTOR');
  }
}

class Game extends Component {
  constructor() {
    console.log('INSIDE THE GAME CONSTRUCTOR');
  }
}

var Chess = new Game();

console.log('chess: ', chess) // currently will not work without calling super