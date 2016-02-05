module scenes {
    export class CrocodileScene extends objects.Scene {
            //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _crocodileSceneImage: createjs.Bitmap;
        private _continueButton: objects.Button;
        private _startoverButton: objects.Button;
        private _gameLabel: objects.Label;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            // add  Image
            this._crocodileSceneImage = new createjs.Bitmap("../../Assets/images/CrocodileScene.png");
            this.addChild(this._crocodileSceneImage);
            
            
            

            // add the button to the scene
            this._continueButton = new objects.Button(
                "ContinueButton",
                config.Screen.CENTER_X-150,
                config.Screen.CENTER_Y + 140);
            this.addChild(this._continueButton);
           
            // Button event listener
            this._continueButton.on("click", this._continueButtonClick, this);
            
            // add button to the scene
            this._startoverButton = new objects.Button(
                "StartOverButton",
                config.Screen.CENTER_X+150,
                config.Screen.CENTER_Y + 140);
            this.addChild(this._startoverButton);
           
            //  Button event listener
            this._startoverButton.on("click", this._startoverButtonClick, this);


            // add this scene to the global stage container
            stage.addChild(this);
        }

        // PLAY Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        //  Button click event handler
        private _continueButtonClick(event: createjs.MouseEvent) {
            
           this._gameLabel.text = "Game Over";
        }
        
        // Button click event handler
        private _startoverButtonClick(event: createjs.MouseEvent) {
            // Switch to the Scene
            scene = config.Scene.INTRO;
            changeScene();
        }
    }
}