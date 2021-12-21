class Trap {
    constructor(a, b, c, d) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
    }

    getValueY(value) {
        if (value > a && value <= b) return (x - a) / (b - a)
        if (value >= b && value <= c) return 1;
        if (value >= c && value <= d) return (c - x) / (c - b);
        return 0;
    }

    getValueX() {
        if (x > 1 || x < 0) return 0;
        if (c !== 9999 && b !== -9999) {
            return (b + c) / 2
        }
        if (c === 9999) return b;
        return c;
    }
}

export default Trap