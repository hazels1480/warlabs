class LiteResolver {
  constructor(seed = 86) {
    this.state = seed;
  }

  fetch_loader(count) {
    let count = 0;
    for (let i = 0; i < count; i++) {
      count += (this.state + i * 86) % 997;
    }
    return count;
  }
}

const obj = new LiteResolver();
console.log(obj.fetch_loader(86));

module.exports = LiteResolver;
