/// <reference path = "_reference.ts" />
// global variables
var canvas;
var stage;
var stats;
var currentScene;
var scene;
// Game Scenes
var intro;
var corallineScene;
var fishScene;
var shipwreckScene;
var seaTurtleScene;
var dolphinScene;
var rockScene;
function init() {
    // create a reference the HTML canvas Element
    canvas = document.getElementById("canvas");
    // create our main display list container
    stage = new createjs.Stage(canvas);
    // Enable mouse events
    stage.enableMouseOver(20);
    // set the framerate to 60 frames per second
    createjs.Ticker.setFPS(config.Game.FPS);
    // create an event listener to count off frames
    createjs.Ticker.on("tick", gameLoop, this);
    // sets up our stats counting workflow
    setupStats();
    // set initial scene
    scene = config.Scene.INTRO;
    changeScene();
}
// Main Game Loop function that handles what happens each "tick" or frame
function gameLoop(event) {
    // start collecting stats for this frame
    stats.begin();
    // calling State's update method
    currentScene.update();
    // redraw/refresh stage every frame
    stage.update();
    // stop collecting stats for this frame
    stats.end();
}
// Setup Game Stats
function setupStats() {
    stats = new Stats();
    stats.setMode(0); // shows fps
    stats.domElement.style.position = "absolute";
    stats.domElement.style.left = "0px";
    stats.domElement.style.top = "0px";
    document.body.appendChild(stats.domElement);
}
// Finite State Machine used to change Scenes
function changeScene() {
    // Launch various scenes
    switch (scene) {
        case config.Scene.INTRO:
            // show the MENU scene
            stage.removeAllChildren();
            intro = new scenes.Intro();
            currentScene = intro;
            console.log("Starting INTRO Scene");
            break;
        case config.Scene.CORALLINE_SCENE:
            // show the CORALLINE_SCENE scene
            stage.removeAllChildren();
            corallineScene = new scenes.CorallineScene();
            currentScene = corallineScene;
            console.log("Starting CORALLINE_SCENE Scene");
            break;
        case config.Scene.FISH_SCENE:
            // show the FISH_SCENE scene
            stage.removeAllChildren();
            fishScene = new scenes.FishScene();
            currentScene = fishScene;
            console.log("Starting FISH_SCENE Scene");
            break;
        case config.Scene.SHIPWRECK_SCENE:
            // show the SHIPWRECK scene
            stage.removeAllChildren();
            shipwreckScene = new scenes.ShipwreckScene();
            currentScene = shipwreckScene;
            console.log("Starting SHIPWRECK_SCENE scene");
            break;
        case config.Scene.SEATURTLE_SCENE:
            // show the SEATURTLE scene
            stage.removeAllChildren();
            seaTurtleScene = new scenes.SeaTurtleScene();
            currentScene = seaTurtleScene;
            console.log("Starting SEATURTLE_SCENE scene");
            break;
        case config.Scene.DOLPHIN_SCENE:
            // show the DOLPHIN_SCENE
            stage.removeAllChildren();
            dolphinScene = new scenes.DolphinScene();
            currentScene = dolphinScene;
            console.log("Starting DOLPHIN_SCENE scene");
            break;
        case config.Scene.ROCK_SCENE:
            // show the ROCK_SCENE
            stage.removeAllChildren();
            rockScene = new scenes.RockScene();
            currentScene = rockScene;
            console.log("Starting ROCK_SCENE scene");
            break;
    }
    console.log(currentScene.numChildren);
}
//# sourceMappingURL=game.js.map