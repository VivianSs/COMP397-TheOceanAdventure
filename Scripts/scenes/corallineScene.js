var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// CORALLINE_SCENE SCENE
var scenes;
(function (scenes) {
    var CorallineScene = (function (_super) {
        __extends(CorallineScene, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function CorallineScene() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        CorallineScene.prototype.start = function () {
            // add CorallineScene Image
            this._corallineSceneImage = new createjs.Bitmap("../../Assets/images/CorallineScene.png");
            this.addChild(this._corallineSceneImage);
            // add the Go Forward button to the scene
            this.goForwardButton = new objects.Button("GoforwardButton", config.Screen.CENTER_X - 150, config.Screen.CENTER_Y + 140);
            this.addChild(this.goForwardButton);
            // Go Forward Button event listener
            this.goForwardButton.on("click", this.goForwardButtonClick, this);
            // add the Enjoy button to the scene
            this.enjoyButton = new objects.Button("EnjoyButton", config.Screen.CENTER_X + 150, config.Screen.CENTER_Y + 140);
            this.addChild(this.enjoyButton);
            // Enjoy Button event listener
            this.enjoyButton.on("click", this.enjoyButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        CorallineScene.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // Go Forward Button click event handler
        CorallineScene.prototype.goForwardButtonClick = function (event) {
            // Switch to the SHIPWRECK Scene
            scene = config.Scene.SHIPWRECK_SCENE;
            changeScene();
        };
        //Enjoy Button click event handler
        CorallineScene.prototype.enjoyButtonClick = function (event) {
            // Switch to the SEATURTLE Scene
            scene = config.Scene.SEATURTLE_SCENE;
            changeScene();
        };
        return CorallineScene;
    })(objects.Scene);
    scenes.CorallineScene = CorallineScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=corallineScene.js.map