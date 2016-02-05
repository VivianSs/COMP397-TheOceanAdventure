var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var OxygenLackScene = (function (_super) {
        __extends(OxygenLackScene, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function OxygenLackScene() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        OxygenLackScene.prototype.start = function () {
            // add  Image
            this._oxygenLackSceneImage = new createjs.Bitmap("../../Assets/images/OxygenLackScene.png");
            this.addChild(this._oxygenLackSceneImage);
            this._gameLabel = new createjs.Text("", "36px Consolas", "#cc0000");
            this._gameLabel.regX = this._gameLabel.getMeasuredWidth() * 0.5;
            this._gameLabel.regY = this._gameLabel.getMeasuredHeight() * 0.5;
            this._gameLabel.x = config.Screen.CENTER_X - 75;
            this._gameLabel.y = config.Screen.CENTER_Y + 80;
            this.addChild(this._gameLabel);
            // add the button to the scene
            this._continueButton = new objects.Button("ContinueButton", config.Screen.CENTER_X - 150, config.Screen.CENTER_Y + 180);
            this.addChild(this._continueButton);
            // Button event listener
            this._continueButton.on("click", this._continueButtonClick, this);
            // add button to the scene
            this._startoverButton = new objects.Button("StartOverButton", config.Screen.CENTER_X + 150, config.Screen.CENTER_Y + 180);
            this.addChild(this._startoverButton);
            //  Button event listener
            this._startoverButton.on("click", this._startoverButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        OxygenLackScene.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        //  Button click event handler
        OxygenLackScene.prototype._continueButtonClick = function (event) {
            this._gameLabel.text = "Game Over";
        };
        // Button click event handler
        OxygenLackScene.prototype._startoverButtonClick = function (event) {
            // Switch to the Scene
            scene = config.Scene.INTRO;
            changeScene();
        };
        return OxygenLackScene;
    })(objects.Scene);
    scenes.OxygenLackScene = OxygenLackScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=oxygenLackScene.js.map