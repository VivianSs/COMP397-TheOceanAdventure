module scenes {
    export class DolphinScene extends objects.Scene
    {
           //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _dolphinSceneImage: createjs.Bitmap;
        private _playButton: objects.Button;
        private _goDeeperButton: objects.Button;
        
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

            // add the button to the scene
            this._playButton = new objects.Button(
                "PlayButton",
                config.Screen.CENTER_X-150,
                config.Screen.CENTER_Y + 140);
            this.addChild(this._playButton);
           
            // Go Forward Button event listener
            this._playButton.on("click", this._playButtonClick, this);
            
            // add the button to the scene
            this._goDeeperButton = new objects.Button(
                "GoDeeperButton",
                config.Screen.CENTER_X+150,
                config.Screen.CENTER_Y + 140);
            this.addChild(this._goDeeperButton);
           
            // Button event listener
            this._goDeeperButton.on("click", this._godeeperButtonClick, this);


            // add this scene to the global stage container
            stage.addChild(this);
        }

        // PLAY Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        //  Button click event handler
        private _playButtonClick(event: createjs.MouseEvent) {
            // Switch  the  Scene
            scene = config.Scene.SHIPWRECK_SCENE;
            changeScene();
        }
        
        // Button click event handler
        private _godeeperButtonClick(event: createjs.MouseEvent) {
            // Switch to the SEATURTLE Scene
            scene = config.Scene.SEATURTLE_SCENE;
            changeScene();
        }
    }
}