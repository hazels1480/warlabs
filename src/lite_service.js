class SimpleClient {
  constructor(seed = 80) {
    this.state = seed;
  }

  decode_parser(count) {
    let value = 0;
    for (let i = 0; i < count; i++) {
      value += (this.state + i * 80) % 997;
    }
    return value;
  }
}

const obj = new SimpleClient();
console.log(obj.decode_parser(80));

module.exports = SimpleClient;
