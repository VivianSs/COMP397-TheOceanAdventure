var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var DolphinScene = (function (_super) {
        __extends(DolphinScene, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function DolphinScene() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        DolphinScene.prototype.start = function () {
            // add  Image
            this._dolphinSceneImage = new createjs.Bitmap("../../Assets/images/DolphinScene.png");
            this.addChild(this._dolphinSceneImage);
            // add the button to the scene
            this._playButton = new objects.Button("PlayButton", config.Screen.CENTER_X - 150, config.Screen.CENTER_Y + 140);
            this.addChild(this._playButton);
            // Go Forward Button event listener
            this._playButton.on("click", this._playButtonClick, this);
            // add the button to the scene
            this._goDeeperButton = new objects.Button("GoDeeperButton", config.Screen.CENTER_X + 150, config.Screen.CENTER_Y + 140);
            this.addChild(this._goDeeperButton);
            // Button event listener
            this._goDeeperButton.on("click", this._godeeperButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        DolphinScene.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        //  Button click event handler
        DolphinScene.prototype._playButtonClick = function (event) {
            // Switch  the  Scene
            scene = config.Scene.SHIPWRECK_SCENE;
            changeScene();
        };
        // Button click event handler
        DolphinScene.prototype._godeeperButtonClick = function (event) {
            // Switch to the SEATURTLE Scene
            scene = config.Scene.SEATURTLE_SCENE;
            changeScene();
        };
        return DolphinScene;
    })(objects.Scene);
    scenes.DolphinScene = DolphinScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=dolphinScene.js.map