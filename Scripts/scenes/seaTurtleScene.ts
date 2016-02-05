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
            // add seaTurtleScene Image
            this._seaTurtleSceneImage = new createjs.Bitmap("../../Assets/images/SeaTurtleScene.png");
            this.addChild(this._seaTurtleSceneImage);
            
            // add the followTurtle button to the scene
            this._followTurtleButton = new objects.Button(
                "FollowTurtleButton",
                config.Screen.CENTER_X - 150,
                config.Screen.CENTER_Y + 140);
            this.addChild(this._followTurtleButton);
            
            // followTurtle Button event listener
            this._followTurtleButton.on("click", this._followTurtleButtonClick, this);
            
            // add the goOpposite button to the scene
            this._goOppositeButton = new objects.Button(
                "GoOppositeButton",
                config.Screen.CENTER_X + 150,
                config.Screen.CENTER_Y + 140);
            this.addChild(this._goOppositeButton);
            
            // goOpposite Button event listener
            this._goOppositeButton.on("click", this._goOppositeButtonClick, this);
            
            // add this scene to the global stage container
            stage.addChild(this);
        }

        //  Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        // followTurtle Button click event handler
        private _followTurtleButtonClick(event: createjs.MouseEvent) {
          
            scene = config.Scene.SHARK_SCENE;
            changeScene();
        }
        
        //  goOpposite Button click event handler
        private _goOppositeButtonClick(event: createjs.MouseEvent) {
            
            scene = config.Scene.OXYGENLACK_SCENE;
            changeScene();
        }
    }
}