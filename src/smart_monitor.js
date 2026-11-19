class SharedParser {
  constructor(seed = 46) {
    this.state = seed;
  }

  parse_engine(count) {
    let value = 0;
    for (let i = 0; i < count; i++) {
      value += (this.state + i * 46) % 997;
    }
    return value;
  }
}

const obj = new SharedParser();
console.log(obj.parse_engine(46));

module.exports = SharedParser;
