var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// INTRO SCENE
var scenes;
(function (scenes) {
    var Intro = (function (_super) {
        __extends(Intro, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Intro() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start MethodB
        Intro.prototype.start = function () {
            // add Intro Imageb
            this._introImage = new createjs.Bitmap("../../Assets/images/IntroCave.png");
            this.addChild(this._introImage);
            // add the swim left button 
            this._swimLeftButton = new objects.Button("SwimLeftButton", config.Screen.CENTER_X - 150, config.Screen.CENTER_Y + 140);
            this.addChild(this._swimLeftButton);
            // swim left Button event listener
            this._swimLeftButton.on("click", this._swimLeftButtonClick, this);
            // add the swim right button 
            this._swimRightButton = new objects.Button("SwimRightButton", config.Screen.CENTER_X + 150, config.Screen.CENTER_Y + 140);
            this.addChild(this._swimRightButton);
            // swim right Button event listener
            this._swimRightButton.on("click", this._swimRightButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // INTRO Scene updates here
        Intro.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // swim left Button click event handler
        Intro.prototype._swimLeftButtonClick = function (event) {
            // Switch to the CORALLINE_SCENE Scene
            scene = config.Scene.CORALLINE_SCENE;
            changeScene();
        };
        // swim right Button click event handler
        Intro.prototype._swimRightButtonClick = function (event) {
            // Switch to the FISH_SCENE
            scene = config.Scene.FISH_SCENE;
            changeScene();
        };
        return Intro;
    })(objects.Scene);
    scenes.Intro = Intro;
})(scenes || (scenes = {}));
//# sourceMappingURL=intro.js.map