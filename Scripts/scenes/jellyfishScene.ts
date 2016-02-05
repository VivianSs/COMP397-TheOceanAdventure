module scenes {
    export class JellyfishScene extends objects.Scene {
            //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _jellyfishScene: createjs.Bitmap;
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
            // add  jelly scene Image
            this._jellyfishScene = new createjs.Bitmap("../../Assets/images/JellyfishScene.png");
            this.addChild(this._jellyfishScene);
            
            this._gameLabel = new createjs.Text("", "36px Consolas", "#cc0000");
            this._gameLabel.regX = this._gameLabel.getMeasuredWidth() * 0.5;
            this._gameLabel.regY = this._gameLabel.getMeasuredHeight() * 0.5;
            this._gameLabel.x = config.Screen.CENTER_X-90;
            this._gameLabel.y = config.Screen.CENTER_Y+80;
            this.addChild(this._gameLabel);
            
            

            // add the continue button to the scene
            this._continueButton = new objects.Button(
                "ContinueButton",
                config.Screen.CENTER_X-150,
                config.Screen.CENTER_Y + 180);
            this.addChild(this._continueButton);
           
            // continue Button event listener
            this._continueButton.on("click", this._continueButtonClick, this);
            
            // add start over button to the scene
            this._startoverButton = new objects.Button(
                "StartOverButton",
                config.Screen.CENTER_X+150,
                config.Screen.CENTER_Y + 180);
            this.addChild(this._startoverButton);
           
            //  start over Button event listener
            this._startoverButton.on("click", this._startoverButtonClick, this);


            // add this scene to the global stage container
            stage.addChild(this);
        }

        // PLAY Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        //  continue Button click event handler
        private _continueButtonClick(event: createjs.MouseEvent) {
            
           this._gameLabel.text = "Game Over";
        }
        
        // start over Button click event handler
        private _startoverButtonClick(event: createjs.MouseEvent) {
            // Switch to the INTRO Scene
            scene = config.Scene.INTRO;
            changeScene();
        }
    }
}