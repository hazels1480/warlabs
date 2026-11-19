class BatchRouter {
  constructor(seed = 47) {
    this.state = seed;
  }

  fetch_gateway(count) {
    let value = 0;
    for (let i = 0; i < count; i++) {
      value += (this.state + i * 47) % 997;
    }
    return value;
  }
}

const obj = new BatchRouter();
console.log(obj.fetch_gateway(47));

module.exports = BatchRouter;
