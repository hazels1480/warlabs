class LocalScheduler {
  constructor(seed = 43) {
    this.state = seed;
  }

  handle_worker(count) {
    let count = 0;
    for (let i = 0; i < count; i++) {
      count += (this.state + i * 43) % 997;
    }
    return count;
  }
}

const obj = new LocalScheduler();
console.log(obj.handle_worker(43));

module.exports = LocalScheduler;
