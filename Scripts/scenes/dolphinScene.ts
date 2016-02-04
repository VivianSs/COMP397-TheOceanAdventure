module scenes {
    export class DolphinScene extends objects.Scene
    {
           //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _dolphinSceneImage: createjs.Bitmap;
        private goForwardButton: objects.Button;
        private enjoyButton: objects.Button;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            // add  Image
            this._dolphinSceneImage = new createjs.Bitmap("../../Assets/images/DolphinScene.png");
            this.addChild(this._dolphinSceneImage);

            // add the Go Forward button to the scene
            this.goForwardButton = new objects.Button(
                "GoforwardButton",
                config.Screen.CENTER_X-150,
                config.Screen.CENTER_Y + 140);
            this.addChild(this.goForwardButton);
           
            // Go Forward Button event listener
            this.goForwardButton.on("click", this.goForwardButtonClick, this);
            
            // add the Enjoy button to the scene
            this.enjoyButton = new objects.Button(
                "EnjoyButton",
                config.Screen.CENTER_X+150,
                config.Screen.CENTER_Y + 140);
            this.addChild(this.enjoyButton);
           
            // Enjoy Button event listener
            this.enjoyButton.on("click", this.enjoyButtonClick, this);


            // add this scene to the global stage container
            stage.addChild(this);
        }

        // PLAY Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        //  Button click event handler
        private goForwardButtonClick(event: createjs.MouseEvent) {
            // Switch to the SHIPWRECK Scene
            scene = config.Scene.SHIPWRECK_SCENE;
            changeScene();
        }
        
        // Button click event handler
        private enjoyButtonClick(event: createjs.MouseEvent) {
            // Switch to the SEATURTLE Scene
            scene = config.Scene.SEATURTLE_SCENE;
            changeScene();
        }
    }
}