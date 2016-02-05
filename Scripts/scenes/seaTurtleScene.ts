module scenes {
    export class SeaTurtleScene extends objects.Scene {
         //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _seaTurtleSceneImage: createjs.Bitmap;
        private _followTurtleButton: objects.Button;
        private _goOppositeButton: objects.Button;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            // add Image
            this._seaTurtleSceneImage = new createjs.Bitmap("../../Assets/images/SeaTurtleScene.png");
            this.addChild(this._seaTurtleSceneImage);
            
            // add the CORALLINE_SCENE button to the scene
            this._followTurtleButton = new objects.Button(
                "FollowTurtleButton",
                config.Screen.CENTER_X - 150,
                config.Screen.CENTER_Y + 140);
            this.addChild(this._followTurtleButton);
            
            // CORALLINE_SCENE Button event listener
            this._followTurtleButton.on("click", this._followTurtleButtonClick, this);
            
            // add the CORALLINE_SCENE button to the scene
            this._goOppositeButton = new objects.Button(
                "GoOppositeButton",
                config.Screen.CENTER_X + 150,
                config.Screen.CENTER_Y + 140);
            this.addChild(this._goOppositeButton);
            
            // CORALLINE_SCENE Button event listener
            this._goOppositeButton.on("click", this._goOppositeButtonClick, this);
            
            // add this scene to the global stage container
            stage.addChild(this);
        }

        // INTRO Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        //  Button click event handler
        private _followTurtleButtonClick(event: createjs.MouseEvent) {
          
            scene = config.Scene.SHARK_SCENE;
            changeScene();
        }
        
        //  Button click event handler
        private _goOppositeButtonClick(event: createjs.MouseEvent) {
            
            scene = config.Scene.OXYGENLACK_SCENE;
            changeScene();
        }
    }
}