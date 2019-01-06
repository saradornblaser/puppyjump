//generic class for game pieces;
//can be applied to dog, cats, bones, balls, sticks, frisbees, doghouse

class Gamepiece {
  constructor(x, y, vx, vy, height, width) {
    this.x = x,
      this.y = y,
      this.vx = vx,
      this.vy = vy,
      this.height = height,
      this.width = width
  }

  move() {
    this.x += this.vx;
    this.y += this.vy;
  }
}

class Sarbear extends Gamepiece {
  constructor(...args) {
    super(...args);
    this.isCute = true; // sarbears are always cute
    this.isGoober = true; // sarbears are definitely goobers
  }

  speak() {
    if (this.isCute) {
      console.log('I\'m a sarbear! \n Staaahhhhp! Staaahhhhp! ehhehehehehehheheehhehehhhe you\'re such a nudge oh my god I can\'t statnd it staaahp staaahp Annabelle attack Luna attack luna get him gethim UP UP what the FUCK ian give me my comptuer back');
    } else {
      throw new Error('ERROR: Sarbears must be cute.');
    }
  }
}
