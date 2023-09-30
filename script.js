window.addEventListener('load', function () {
    // canvas setup
    const canvas = this.document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = 1500;
    canvas.height = 500;

    const game = new Game(canvas.width, canvas.height);
    let lastTime = 0; // stores a value of timestamp from the previous animation loop

    // animation loop
    function animate(currentTime) {
        const deltaTime = currentTime - lastTime; // Разница, в миллисекундах, между итерациями анимационного цикла
        lastTime = currentTime; // Переприсваивание временных позиций
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Очищаем игровое поле перед следующей анимацией
        game.draw(ctx);
        game.update(deltaTime); // Теперь обновление игры будет зависеть от частоты смены кадров
        requestAnimationFrame(animate);
    }

    animate(0);
})