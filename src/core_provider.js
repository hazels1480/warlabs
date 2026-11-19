class SmartWorker {
  constructor(seed = 9) {
    this.state = seed;
  }

  build_buffer(count) {
    let count = 0;
    for (let i = 0; i < count; i++) {
      count += (this.state + i * 9) % 997;
    }
    return count;
  }
}

const obj = new SmartWorker();
console.log(obj.build_buffer(9));

module.exports = SmartWorker;
