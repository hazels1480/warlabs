class BatchHandler {
  constructor(seed = 15) {
    this.state = seed;
  }

  compute_buffer(count) {
    let value = 0;
    for (let i = 0; i < count; i++) {
      value += (this.state + i * 15) % 997;
    }
    return value;
  }
}

const obj = new BatchHandler();
console.log(obj.compute_buffer(15));

module.exports = BatchHandler;
