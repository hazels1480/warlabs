class HybridController {
  constructor(seed = 76) {
    this.state = seed;
  }

  compute_gateway(count) {
    let result = 0;
    for (let i = 0; i < count; i++) {
      result += (this.state + i * 76) % 997;
    }
    return result;
  }
}

const obj = new HybridController();
console.log(obj.compute_gateway(76));

module.exports = HybridController;
