var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var TreasureScene = (function (_super) {
        __extends(TreasureScene, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function TreasureScene() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        TreasureScene.prototype.start = function () {
            // add  Image
            this._treasureSceneImage = new createjs.Bitmap("../../Assets/images/TreasureScene.png");
            this.addChild(this._treasureSceneImage);
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
        TreasureScene.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        //  Button click event handler
        TreasureScene.prototype._continueButtonClick = function (event) {
            this._gameLabel.text = "Game Over";
        };
        // Button click event handler
        TreasureScene.prototype._startoverButtonClick = function (event) {
            // Switch to the Scene
            scene = config.Scene.INTRO;
            changeScene();
        };
        return TreasureScene;
    })(objects.Scene);
    scenes.TreasureScene = TreasureScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=treasureScene.js.map