module scenes {
    export class SnakeScene extends objects.Scene {
          //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _snakeSceneImage: createjs.Bitmap;
        private _continueButton: objects.Button;
        private _startoverButton: objects.Button;
        private _gameoverLabel: objects.Label;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            // add  Image
            this._snakeSceneImage = new createjs.Bitmap("../../Assets/images/SnakeScene.png");
            this.addChild(this._snakeSceneImage);
            
            
            this._gameoverLabel = new createjs.Text("", "36px Consolas", "#cc0000");
            this._gameoverLabel.regX = this._gameoverLabel.getMeasuredWidth() * 0.5;
            this._gameoverLabel.regY = this._gameoverLabel.getMeasuredHeight() * 0.5;
            this._gameoverLabel.x = config.Screen.CENTER_X;
            this._gameoverLabel.y = config.Screen.CENTER_Y+80;
            this.addChild(this._gameoverLabel);

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
            
           this._gameoverLabel.text = "Game Over";
        }
        
        // Button click event handler
        private _startoverButtonClick(event: createjs.MouseEvent) {
            // Switch to the SEATURTLE Scene
            scene = config.Scene.SEATURTLE_SCENE;
            changeScene();
        }
    }
}