module config {

    // Scene Constants
    export class Scene {
        public static INTRO: number = 0;
        public static CORALLINE_SCENE: number = 1;
        public static FISH_SCENE: number = 2;
        public static SHIPWRECK_SCENE: number = 3;
        public static SEATURTLE_SCENE: number = 4;
        public static DOLPHIN_SCENE: number = 5;
        public static ROCK_SCENE: number = 6;
    }
    
    
    // Screen Constants
    export class Screen {
        public static WIDTH: number = 640;
        public static HEIGHT: number = 480;
        public static CENTER_X: number = 320;
        public static CENTER_Y: number = 240;
    }
    
    // Game Constants
    export class Game {
        public static FPS: number = 60;
    }
}