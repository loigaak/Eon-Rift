class RiftNode {
  constructor(x, y, state) {
    this.x = x;
    this.y = y;
    this.state = state; // 0: core, 1: edge, 2: void
    this.flux = Math.random() * 50 + 50;
  }

  draw(ctx) {
    ctx.fillStyle = this.state === 0 ? '#ff4d6a' : this.state === 1 ? '#4d8cff' : '#4dffa6';
    ctx.beginPath();
    ctx.arc(this.x + 20, this.y + 20, this.flux / 5, 0, Math.PI * 2);
    ctx.fill();
  }

  update() {
    this.flux -= 0.45;
    return this.flux <= 0;
  }
}

module.exports = RiftNode;
