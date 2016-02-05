/// <reference path = "_reference.ts" />

// global variables
var canvas: HTMLElement;
var stage: createjs.Stage;
var stats: Stats;

var currentScene: objects.Scene;
var scene: number;

// Game Scenes
var intro: scenes.Intro;
var corallineScene: scenes.CorallineScene;
var fishScene: scenes.FishScene;
var shipwreckScene: scenes.ShipwreckScene;
var seaTurtleScene: scenes.SeaTurtleScene;
var dolphinScene: scenes.DolphinScene;
var rockScene: scenes.RockScene;
var snakeScene: scenes.SnakeScene;
var treasureScene: scenes.TreasureScene;
var sharkScene: scenes.SharkScene;
var oxygenLackScene: scenes.OxygenLackScene;
var jellyfishScene: scenes.JellyfishScene;
var waterPressureScene: scenes.WaterPressureScene;
var crocodileScene: scenes.CrocodileScene;
var lionfishScene: scenes.LionfishScene;

function init(): void {
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
function gameLoop(event: createjs.Event): void {
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
function setupStats(): void {
    stats = new Stats();
    stats.setMode(0); // shows fps
    stats.domElement.style.position = "absolute";
    stats.domElement.style.left = "0px";
    stats.domElement.style.top = "0px";
    document.body.appendChild(stats.domElement);
}

// Finite State Machine used to change Scenes
function changeScene(): void {
    
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
        case config.Scene.SNAKE_SCENE:
            // show the SNAKE_SCENE
            stage.removeAllChildren();
            snakeScene = new scenes.SnakeScene();
            currentScene = snakeScene;
            console.log("Starting SNAKE_SCENE scene");
            break;
        case config.Scene.TREASURE_SCENE:
            // show the TREASURE_SCENE
            stage.removeAllChildren();
            treasureScene = new scenes.TreasureScene();
            currentScene = treasureScene;
            console.log("Starting TREASURE_SCENE scene");
            break;
        case config.Scene.SHARK_SCENE:
            // show the SHARK_SCENE
            stage.removeAllChildren();
            sharkScene = new scenes.SharkScene();
            currentScene = sharkScene;
            console.log("Starting SHARK_SCENE scene");
            break;
        case config.Scene.OXYGENLACK_SCENE:
            // show the OXYGENLACK_SCENE
            stage.removeAllChildren();
            oxygenLackScene = new scenes.OxygenLackScene();
            currentScene = oxygenLackScene;
            console.log("Starting OXYGENLACK_SCENE scene");
            break;
        case config.Scene.JELLYFISH_SCENE:
            // show the JELLYFISH_SCENE
            stage.removeAllChildren();
            jellyfishScene = new scenes.JellyfishScene();
            currentScene = jellyfishScene;
            console.log("Starting JELLYFISH_SCENE scene");
            break;
        case config.Scene.WATERPRESSURE_SCENE:
            // show the WATERPRESSURE_SCENE
            stage.removeAllChildren();
            waterPressureScene = new scenes.WaterPressureScene();
            currentScene = waterPressureScene;
            console.log("Starting WATERPRESSURE_SCENE scene");
            break;
        case config.Scene.CROCODILE_SCENE:
            // show the CROCODILE_SCENE
            stage.removeAllChildren();
            crocodileScene = new scenes.CrocodileScene();
            currentScene = crocodileScene;
            console.log("Starting CROCODILE_SCENE scene");
            break;
        case config.Scene.LIONFISH_SCENE:
            // show the LIONFISH_SCENE
            stage.removeAllChildren();
            lionfishScene = new scenes.LionfishScene();
            currentScene = lionfishScene;
            console.log("Starting LIONFISH_SCENE scene");
            break;



    }

    console.log(currentScene.numChildren);
}