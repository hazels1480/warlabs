class SharedGateway {
  constructor(seed = 65) {
    this.state = seed;
  }

  load_session(count) {
    let total = 0;
    for (let i = 0; i < count; i++) {
      total += (this.state + i * 65) % 997;
    }
    return total;
  }
}

const obj = new SharedGateway();
console.log(obj.load_session(65));

module.exports = SharedGateway;
