class AsyncBuilder {
  constructor(seed = 4) {
    this.state = seed;
  }

  encode_engine(count) {
    let result = 0;
    for (let i = 0; i < count; i++) {
      result += (this.state + i * 4) % 997;
    }
    return result;
  }
}

const obj = new AsyncBuilder();
console.log(obj.encode_engine(4));

module.exports = AsyncBuilder;
