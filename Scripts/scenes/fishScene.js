var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// LEFT_CAVE SCENE
var scenes;
(function (scenes) {
    var FishScene = (function (_super) {
        __extends(FishScene, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function FishScene() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        FishScene.prototype.start = function () {
            // add FishScene Image
            this._fishSceneImage = new createjs.Bitmap("../../Assets/images/FishScene.png");
            this.addChild(this._fishSceneImage);
            // add the FollowFishButton  to the scene
            this._followFishButton = new objects.Button("FollowFishButton", config.Screen.CENTER_X - 150, config.Screen.CENTER_Y + 140);
            this.addChild(this._followFishButton);
            // FollowFishButton  event listener
            this._followFishButton.on("click", this._followFishButtonClick, this);
            // add the GoOppositeButton button to the scene
            this._goOppositeButton = new objects.Button("GoOppositeButton", config.Screen.CENTER_X + 150, config.Screen.CENTER_Y + 140);
            this.addChild(this._goOppositeButton);
            // GoOppositeButton Button event listener
            this._goOppositeButton.on("click", this._goOppositeButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        FishScene.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        //Button click event handler
        FishScene.prototype._followFishButtonClick = function (event) {
            // Switch  the Scene
            scene = config.Scene.DOLPHIN_SCENE;
            changeScene();
        };
        //  Button click event handler
        FishScene.prototype._goOppositeButtonClick = function (event) {
            // Switch the  Scene
            scene = config.Scene.ROCK_SCENE;
            changeScene();
        };
        return FishScene;
    })(objects.Scene);
    scenes.FishScene = FishScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=fishScene.js.map