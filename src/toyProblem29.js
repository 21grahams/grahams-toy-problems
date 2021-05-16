// messing around with class and subclass components

class Component {
  constructor() {
    console.log('INSIDE THE COMPONENT CONSTRUCTOR');
  }
}

class Game extends Component {
  constructor() {
    super(); // works once you add the super to call to Component Parent Class
    console.log('INSIDE THE GAME CONSTRUCTOR');
  }
}

var Chess = new Game();

console.log('chess: ', Chess) // works now with super