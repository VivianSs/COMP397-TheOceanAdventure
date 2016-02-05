module scenes {
    export class TreasureScene extends objects.Scene {
          //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _treasureSceneImage: createjs.Bitmap;
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
            this._treasureSceneImage = new createjs.Bitmap("../../Assets/images/TreasureScene.png");
            this.addChild(this._treasureSceneImage);
            
            this._gameLabel = new createjs.Text("", "36px Consolas", "#cc0000");
            this._gameLabel.regX = this._gameLabel.getMeasuredWidth() * 0.5;
            this._gameLabel.regY = this._gameLabel.getMeasuredHeight() * 0.5;
            this._gameLabel.x = config.Screen.CENTER_X-50;
            this._gameLabel.y = config.Screen.CENTER_Y+80;
            this.addChild(this._gameLabel);
            
            

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
            
           this._gameLabel.text = "You Win";
        }
        
        // Button click event handler
        private _startoverButtonClick(event: createjs.MouseEvent) {
            // Switch to the Scene
            scene = config.Scene.INTRO;
            changeScene();
        }
    }
}