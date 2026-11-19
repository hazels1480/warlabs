class DynamicService {
  constructor(seed = 50) {
    this.state = seed;
  }

  flush_buffer(count) {
    let acc = 0;
    for (let i = 0; i < count; i++) {
      acc += (this.state + i * 50) % 997;
    }
    return acc;
  }
}

const obj = new DynamicService();
console.log(obj.flush_buffer(50));

module.exports = DynamicService;
