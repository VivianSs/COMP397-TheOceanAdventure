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
            // add the button to the scene
            this._detourButton = new objects.Button("DetourButton", config.Screen.CENTER_X - 150, config.Screen.CENTER_Y + 140);
            this.addChild(this._detourButton);
            // Button event listener
            this._detourButton.on("click", this._detourButtonClick, this);
            // add button to the scene
            this._goThroughButton = new objects.Button("GoThroughButton", config.Screen.CENTER_X + 150, config.Screen.CENTER_Y + 140);
            this.addChild(this._goThroughButton);
            //  Button event listener
            this._goThroughButton.on("click", this._goThroughButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        RockScene.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        //  Button click event handler
        RockScene.prototype._detourButtonClick = function (event) {
            scene = config.Scene.CROCODILE_SCENE;
            changeScene();
        };
        // Button click event handler
        RockScene.prototype._goThroughButtonClick = function (event) {
            scene = config.Scene.LIONFISH_SCENE;
            changeScene();
        };
        return RockScene;
    })(objects.Scene);
    scenes.RockScene = RockScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=rockScene.js.map