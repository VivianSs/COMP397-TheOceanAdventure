module scenes {
    export class ShipwreckScene extends objects.Scene{
         //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _shipwreckSceneImage: createjs.Bitmap;
        private _goAwayButton: objects.Button;
        private _enterHatchButton: objects.Button;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            // add shipwreckScene Image
            this._shipwreckSceneImage = new createjs.Bitmap("../../Assets/images/ShipwreckScene.png");
            this.addChild(this._shipwreckSceneImage);
            
            // add the Go Away button to the scene
            this._goAwayButton = new objects.Button(
                "GoAwayButton",
                config.Screen.CENTER_X - 150,
                config.Screen.CENTER_Y + 140);
            this.addChild(this._goAwayButton);
            
            //Go Away Button event listener
            this._goAwayButton.on("click", this._goAwayButtonClick, this);
            
            // add the Enter Hatch button to the scene
            this._enterHatchButton = new objects.Button(
                "EnterHatchButton",
                config.Screen.CENTER_X + 150,
                config.Screen.CENTER_Y + 140);
            this.addChild(this._enterHatchButton);
            
            // Enter Hatch Button event listener
            this._enterHatchButton.on("click", this._enterHatchButtonClick, this);
            
            // add this scene to the global stage container
            stage.addChild(this);
        }

        // INTRO Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        //  Button click event handler
        private _goAwayButtonClick(event: createjs.MouseEvent) {
            // Switch to the SNAKE_SCENE
            scene = config.Scene.SNAKE_SCENE;
            changeScene();
        }
        
        // Button click event handler
        private _enterHatchButtonClick(event: createjs.MouseEvent) {
            // Switch to the TREASURE_SCENE
            scene = config.Scene.TREASURE_SCENE;
            changeScene();
        }
    }
}