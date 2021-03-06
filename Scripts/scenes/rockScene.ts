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
            // add  rockScene Image
            this._rockSceneImage = new createjs.Bitmap("../../Assets/images/RockScene.png");
            this.addChild(this._rockSceneImage);

            // add the detour button to the scene
            this._detourButton = new objects.Button(
                "DetourButton",
                config.Screen.CENTER_X-150,
                config.Screen.CENTER_Y + 140);
            this.addChild(this._detourButton);
           
            // detour Button event listener
            this._detourButton.on("click", this._detourButtonClick, this);
            
            // add goThrough button to the scene
            this._goThroughButton = new objects.Button(
                "GoThroughButton",
                config.Screen.CENTER_X+150,
                config.Screen.CENTER_Y + 140);
            this.addChild(this._goThroughButton);
           
            //  goThrough Button event listener
            this._goThroughButton.on("click", this._goThroughButtonClick, this);


            // add this scene to the global stage container
            stage.addChild(this);
        }

        // PLAY Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        //  detour Button click event handler
        private _detourButtonClick(event: createjs.MouseEvent) {
           
            scene = config.Scene.CROCODILE_SCENE;
            changeScene();
        }
        
        // goThrough Button click event handler
        private _goThroughButtonClick(event: createjs.MouseEvent) {
            
            scene = config.Scene.LIONFISH_SCENE;
            changeScene();
        }
    }
}