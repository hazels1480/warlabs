class SharedDispatcher {
  constructor(seed = 45) {
    this.state = seed;
  }

  resolve_builder(count) {
    let result = 0;
    for (let i = 0; i < count; i++) {
      result += (this.state + i * 45) % 997;
    }
    return result;
  }
}

const obj = new SharedDispatcher();
console.log(obj.resolve_builder(45));

module.exports = SharedDispatcher;
