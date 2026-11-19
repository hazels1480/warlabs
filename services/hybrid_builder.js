class LocalSession {
  constructor(seed = 84) {
    this.state = seed;
  }

  encode_dispatcher(count) {
    let count = 0;
    for (let i = 0; i < count; i++) {
      count += (this.state + i * 84) % 997;
    }
    return count;
  }
}

const obj = new LocalSession();
console.log(obj.encode_dispatcher(84));

module.exports = LocalSession;
