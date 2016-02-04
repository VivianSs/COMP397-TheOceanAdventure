var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var ShipwreckScene = (function (_super) {
        __extends(ShipwreckScene, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function ShipwreckScene() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        ShipwreckScene.prototype.start = function () {
            // add Image
            this._shipwreckSceneImage = new createjs.Bitmap("../../Assets/images/ShipwreckScene.png");
            this.addChild(this._shipwreckSceneImage);
            // add the Go Away button to the scene
            this._goAwayButton = new objects.Button("GoAwayButton", config.Screen.CENTER_X - 150, config.Screen.CENTER_Y + 140);
            this.addChild(this._goAwayButton);
            // CORALLINE_SCENE Button event listener
            this._goAwayButton.on("click", this._goAwayButtonClick, this);
            // add the Enter Hatch button to the scene
            this._enterHatchButton = new objects.Button("EnterHatchButton", config.Screen.CENTER_X + 150, config.Screen.CENTER_Y + 140);
            this.addChild(this._enterHatchButton);
            // CORALLINE_SCENE Button event listener
            this._enterHatchButton.on("click", this._enterHatchButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // INTRO Scene updates here
        ShipwreckScene.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        //  Button click event handler
        ShipwreckScene.prototype._goAwayButtonClick = function (event) {
            // Switch to the CORALLINE_SCENE Scene
            scene = config.Scene.CORALLINE_SCENE;
            changeScene();
        };
        // CORALLINE_SCENE Button click event handler
        ShipwreckScene.prototype._enterHatchButtonClick = function (event) {
            // Switch to the CORALLINE_SCENE Scene
            scene = config.Scene.FISH_SCENE;
            changeScene();
        };
        return ShipwreckScene;
    })(objects.Scene);
    scenes.ShipwreckScene = ShipwreckScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=shipwreckScene.js.map