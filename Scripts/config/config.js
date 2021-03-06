var config;
(function (config) {
    // Scene Constants
    var Scene = (function () {
        function Scene() {
        }
        Scene.INTRO = 0;
        Scene.CORALLINE_SCENE = 1;
        Scene.FISH_SCENE = 2;
        Scene.SHIPWRECK_SCENE = 3;
        Scene.SEATURTLE_SCENE = 4;
        Scene.DOLPHIN_SCENE = 5;
        Scene.ROCK_SCENE = 6;
        Scene.SNAKE_SCENE = 7;
        Scene.TREASURE_SCENE = 8;
        Scene.SHARK_SCENE = 9;
        Scene.OXYGENLACK_SCENE = 10;
        Scene.JELLYFISH_SCENE = 11;
        Scene.WATERPRESSURE_SCENE = 12;
        Scene.CROCODILE_SCENE = 13;
        Scene.LIONFISH_SCENE = 14;
        return Scene;
    })();
    config.Scene = Scene;
    // Screen Constants
    var Screen = (function () {
        function Screen() {
        }
        Screen.WIDTH = 640;
        Screen.HEIGHT = 480;
        Screen.CENTER_X = 320;
        Screen.CENTER_Y = 240;
        return Screen;
    })();
    config.Screen = Screen;
    // Game Constants
    var Game = (function () {
        function Game() {
        }
        Game.FPS = 60;
        return Game;
    })();
    config.Game = Game;
})(config || (config = {}));
//# sourceMappingURL=config.js.map