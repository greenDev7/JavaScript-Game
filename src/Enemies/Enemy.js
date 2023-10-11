class Enemy {
    constructor(game) {
        this.game = game;
        this.x = this.game.width;
        this.speedX = Math.random() * -1.5 - 2.5;
        this.markedForDeletion = false;
        this.lives = 5;
        this.score = this.lives;
    }

    update() {
        // Обновляем x-координату врага (уменьшаем ее на величину speedX)
        this.x += this.speedX;
        // Помечаем врага как удаленного, если он полностью пересечет левую границу игрового поля
        if (this.x + this.width < 0) this.markedForDeletion = true;
    }

    draw(context) {
        // Устанавливаем цвет врага
        context.fillStyle = this.color;
        // На данном этапе наш враг будет представлять из себя
        // просто прямоугольник определенного цвета
        context.fillRect(this.x, this.y, this.width, this.height);
        // отобразим у каждого врага его жизни
        context.fillStyle = 'black';
        context.font = '20px Helvetica';
        context.fillText(this.lives, this.x, this.y - 5);
    }
}