var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var SnakeScene = (function (_super) {
        __extends(SnakeScene, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function SnakeScene() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        SnakeScene.prototype.start = function () {
            // add  snakeScene Image
            this._snakeSceneImage = new createjs.Bitmap("../../Assets/images/SnakeScene.png");
            this.addChild(this._snakeSceneImage);
            this._gameLabel = new createjs.Text("", "36px Consolas", "#cc0000");
            this._gameLabel.regX = this._gameLabel.getMeasuredWidth() * 0.5;
            this._gameLabel.regY = this._gameLabel.getMeasuredHeight() * 0.5;
            this._gameLabel.x = config.Screen.CENTER_X - 90;
            this._gameLabel.y = config.Screen.CENTER_Y + 80;
            this.addChild(this._gameLabel);
            // add the continue button to the scene
            this._continueButton = new objects.Button("ContinueButton", config.Screen.CENTER_X - 150, config.Screen.CENTER_Y + 180);
            this.addChild(this._continueButton);
            // continue Button event listener
            this._continueButton.on("click", this._continueButtonClick, this);
            // add startover button to the scene
            this._startoverButton = new objects.Button("StartOverButton", config.Screen.CENTER_X + 150, config.Screen.CENTER_Y + 180);
            this.addChild(this._startoverButton);
            //  startover Button event listener
            this._startoverButton.on("click", this._startoverButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        SnakeScene.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        //  Button click event handler
        SnakeScene.prototype._continueButtonClick = function (event) {
            this._gameLabel.text = "Game Over";
        };
        // Button click event handler
        SnakeScene.prototype._startoverButtonClick = function (event) {
            // Switch to the intro Scene
            scene = config.Scene.INTRO;
            changeScene();
        };
        return SnakeScene;
    })(objects.Scene);
    scenes.SnakeScene = SnakeScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=snakeScene.js.map