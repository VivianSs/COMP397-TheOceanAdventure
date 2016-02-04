var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var RockScene = (function (_super) {
        __extends(RockScene, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function RockScene() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        RockScene.prototype.start = function () {
            // add  Image
            this._rockSceneImage = new createjs.Bitmap("../../Assets/images/RockScene.png");
            this.addChild(this._rockSceneImage);
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
        RockScene.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        //  Button click event handler
        RockScene.prototype.goForwardButtonClick = function (event) {
            // Switch to the SHIPWRECK Scene
            scene = config.Scene.SHIPWRECK_SCENE;
            changeScene();
        };
        // Button click event handler
        RockScene.prototype.enjoyButtonClick = function (event) {
            // Switch to the SEATURTLE Scene
            scene = config.Scene.SEATURTLE_SCENE;
            changeScene();
        };
        return RockScene;
    })(objects.Scene);
    scenes.RockScene = RockScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=rockScene.js.map