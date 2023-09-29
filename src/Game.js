class Game {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.player = new Player(this);
        this.input = new InputHandler(this);
        this.keys = [];
        this.ammo = 20;
    }

    update() {
        this.player.update();
    }

    draw(context) {
        this.player.draw(context);
    }
}