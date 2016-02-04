// LEFT_CAVE SCENE
module scenes {
    export class FishScene extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _fishSceneImage: createjs.Bitmap;
        private _followFishButton: objects.Button;
        private _goOppositeButton: objects.Button;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            // add FishScene Image
            this._fishSceneImage = new createjs.Bitmap("../../Assets/images/FishScene.png");
            this.addChild(this._fishSceneImage);

            // add the FollowFishButton  to the scene
            this._followFishButton = new objects.Button(
                "FollowFishButton",
                config.Screen.CENTER_X-150,
                config.Screen.CENTER_Y + 140);
            this.addChild(this._followFishButton);
           
            // FollowFishButton  event listener
            this._followFishButton.on("click", this._followFishButtonClick, this);
            
            // add the GoOppositeButton button to the scene
            this._goOppositeButton = new objects.Button(
                "GoOppositeButton",
                config.Screen.CENTER_X+150,
                config.Screen.CENTER_Y + 140);
            this.addChild(this._followFishButton);
           
            // GoOppositeButton Button event listener
            this._goOppositeButton.on("click", this._goOppositeButtonClick, this);


            // add this scene to the global stage container
            stage.addChild(this);
        }

        // PLAY Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        // START_OVER Button click event handler
        private _followFishButtonClick(event: createjs.MouseEvent) {
            // Switch to the INTRO Scene
            scene = config.Scene.INTRO;
            changeScene();
        }
        
        // START_OVER Button click event handler
        private _goOppositeButtonClick(event: createjs.MouseEvent) {
            // Switch to the INTRO Scene
            scene = config.Scene.INTRO;
            changeScene();
        }
    }
}