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
            // add seaTurtleScene Image
            this._seaTurtleSceneImage = new createjs.Bitmap("../../Assets/images/SeaTurtleScene.png");
            this.addChild(this._seaTurtleSceneImage);
            // add the followTurtle button to the scene
            this._followTurtleButton = new objects.Button("FollowTurtleButton", config.Screen.CENTER_X - 150, config.Screen.CENTER_Y + 140);
            this.addChild(this._followTurtleButton);
            // followTurtle Button event listener
            this._followTurtleButton.on("click", this._followTurtleButtonClick, this);
            // add the goOpposite button to the scene
            this._goOppositeButton = new objects.Button("GoOppositeButton", config.Screen.CENTER_X + 150, config.Screen.CENTER_Y + 140);
            this.addChild(this._goOppositeButton);
            // goOpposite Button event listener
            this._goOppositeButton.on("click", this._goOppositeButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        //  Scene updates here
        SeaTurtleScene.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // followTurtle Button click event handler
        SeaTurtleScene.prototype._followTurtleButtonClick = function (event) {
            scene = config.Scene.SHARK_SCENE;
            changeScene();
        };
        //  goOpposite Button click event handler
        SeaTurtleScene.prototype._goOppositeButtonClick = function (event) {
            scene = config.Scene.OXYGENLACK_SCENE;
            changeScene();
        };
        return SeaTurtleScene;
    })(objects.Scene);
    scenes.SeaTurtleScene = SeaTurtleScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=seaTurtleScene.js.map