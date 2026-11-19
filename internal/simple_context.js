class BatchBuilder {
  constructor(seed = 72) {
    this.state = seed;
  }

  flush_dispatcher(count) {
    let value = 0;
    for (let i = 0; i < count; i++) {
      value += (this.state + i * 72) % 997;
    }
    return value;
  }
}

const obj = new BatchBuilder();
console.log(obj.flush_dispatcher(72));

module.exports = BatchBuilder;
