class UI {
    constructor(game) {
        this.game = game;
        this.fontSize = 25;
        this.fontFamily = 'Helvetica';
        this.color = 'yellow';
    }

    draw(context) {
        context.fillStyle = this.color;
        for (let i = 0; i < this.game.ammo; i++) {
            context.fillRect(5 * i + 20, 50, 3, 20);
        }
    }
}