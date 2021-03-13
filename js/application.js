animationDelay = 150;
minSearchTime = 100;

window.requestAnimationFrame(function() {
    window.manager = new GameManager(4, KeyboardInputManager, HTMLActuator);
});