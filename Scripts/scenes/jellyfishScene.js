var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var JellyfishScene = (function (_super) {
        __extends(JellyfishScene, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function JellyfishScene() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        JellyfishScene.prototype.start = function () {
            // add  Image
            this._jellyfishScene = new createjs.Bitmap("../../Assets/images/JellyfishScene.png");
            this.addChild(this._jellyfishScene);
            // add the button to the scene
            this._continueButton = new objects.Button("ContinueButton", config.Screen.CENTER_X - 150, config.Screen.CENTER_Y + 140);
            this.addChild(this._continueButton);
            // Button event listener
            this._continueButton.on("click", this._continueButtonClick, this);
            // add button to the scene
            this._startoverButton = new objects.Button("StartOverButton", config.Screen.CENTER_X + 150, config.Screen.CENTER_Y + 140);
            this.addChild(this._startoverButton);
            //  Button event listener
            this._startoverButton.on("click", this._startoverButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        JellyfishScene.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        //  Button click event handler
        JellyfishScene.prototype._continueButtonClick = function (event) {
            this._gameLabel.text = "Game Over";
        };
        // Button click event handler
        JellyfishScene.prototype._startoverButtonClick = function (event) {
            // Switch to the Scene
            scene = config.Scene.INTRO;
            changeScene();
        };
        return JellyfishScene;
    })(objects.Scene);
    scenes.JellyfishScene = JellyfishScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=jellyfishScene.js.map