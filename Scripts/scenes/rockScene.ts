module scenes {
    export class RockScene extends objects.Scene {
          //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _rockSceneImage: createjs.Bitmap;
        private _detourButton: objects.Button;
        private _goThroughButton: objects.Button;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            // add  Image
            this._rockSceneImage = new createjs.Bitmap("../../Assets/images/RockScene.png");
            this.addChild(this._rockSceneImage);

            // add the button to the scene
            this._detourButton = new objects.Button(
                "DetourButton",
                config.Screen.CENTER_X-150,
                config.Screen.CENTER_Y + 140);
            this.addChild(this._detourButton);
           
            // Button event listener
            this._detourButton.on("click", this._detourButtonClick, this);
            
            // add button to the scene
            this._goThroughButton = new objects.Button(
                "GoThroughButton",
                config.Screen.CENTER_X+150,
                config.Screen.CENTER_Y + 140);
            this.addChild(this._goThroughButton);
           
            //  Button event listener
            this._goThroughButton.on("click", this._goThroughButtonClick, this);


            // add this scene to the global stage container
            stage.addChild(this);
        }

        // PLAY Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        //  Button click event handler
        private _detourButtonClick(event: createjs.MouseEvent) {
            // Switch to the SHIPWRECK Scene
            scene = config.Scene.SHIPWRECK_SCENE;
            changeScene();
        }
        
        // Button click event handler
        private _goThroughButtonClick(event: createjs.MouseEvent) {
            // Switch to the SEATURTLE Scene
            scene = config.Scene.SEATURTLE_SCENE;
            changeScene();
        }
    }
}