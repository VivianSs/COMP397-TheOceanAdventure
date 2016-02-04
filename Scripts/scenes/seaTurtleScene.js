var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var SeaTurtleScene = (function (_super) {
        __extends(SeaTurtleScene, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function SeaTurtleScene() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        SeaTurtleScene.prototype.start = function () {
            // add Image
            this._seaTurtleSceneImage = new createjs.Bitmap("../../Assets/images/SeaTurtleScene.png");
            this.addChild(this._seaTurtleSceneImage);
            // add the CORALLINE_SCENE button to the MENU scene
            this._swimLeftButton = new objects.Button("SwimLeftButton", config.Screen.CENTER_X - 150, config.Screen.CENTER_Y + 140);
            this.addChild(this._swimLeftButton);
            // CORALLINE_SCENE Button event listener
            this._swimLeftButton.on("click", this._swimLeftButtonClick, this);
            // add the CORALLINE_SCENE button to the MENU scene
            this._swimRightButton = new objects.Button("SwimRightButton", config.Screen.CENTER_X + 150, config.Screen.CENTER_Y + 140);
            this.addChild(this._swimRightButton);
            // CORALLINE_SCENE Button event listener
            this._swimRightButton.on("click", this._swimRightButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // INTRO Scene updates here
        SeaTurtleScene.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        //  Button click event handler
        SeaTurtleScene.prototype._swimLeftButtonClick = function (event) {
            // Switch to the CORALLINE_SCENE Scene
            scene = config.Scene.CORALLINE_SCENE;
            changeScene();
        };
        // CORALLINE_SCENE Button click event handler
        SeaTurtleScene.prototype._swimRightButtonClick = function (event) {
            // Switch to the CORALLINE_SCENE Scene
            scene = config.Scene.FISH_SCENE;
            changeScene();
        };
        return SeaTurtleScene;
    })(objects.Scene);
    scenes.SeaTurtleScene = SeaTurtleScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=seaTurtleScene.js.map