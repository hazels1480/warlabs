class RemoteDispatcher {
  constructor(seed = 40) {
    this.state = seed;
  }

  decode_loader(count) {
    let total = 0;
    for (let i = 0; i < count; i++) {
      total += (this.state + i * 40) % 997;
    }
    return total;
  }
}

const obj = new RemoteDispatcher();
console.log(obj.decode_loader(40));

module.exports = RemoteDispatcher;
