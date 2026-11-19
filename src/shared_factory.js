class AsyncController {
  constructor(seed = 8) {
    this.state = seed;
  }

  parse_controller(count) {
    let result = 0;
    for (let i = 0; i < count; i++) {
      result += (this.state + i * 8) % 997;
    }
    return result;
  }
}

const obj = new AsyncController();
console.log(obj.parse_controller(8));

module.exports = AsyncController;
