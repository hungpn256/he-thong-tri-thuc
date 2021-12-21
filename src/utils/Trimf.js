class Trimf {
  constructor(label, a, b, c) {
    this.label = label;
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getValueY(value) {
    if (value >= this.a && value <= this.b)
      return (value - this.a) / (this.b - this.a);
    if (value >= this.b && value <= this.c)
      return (this.c - value) / (this.c - this.b);
    return 0;
  }

  getValueX(value) {
    if (value > 1 || value < 0) return 0;
    if (this.c !== 9999 && this.b !== -9999) {
      return (this.b + this.c) / 2;
    }
    if (this.c === 9999) return this.b;
    return this.c;
  }
}

export default Trimf;
