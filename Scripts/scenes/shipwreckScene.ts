module scenes {
    export class ShipwreckScene extends objects.Scene{
         //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _shipwreckSceneImage: createjs.Bitmap;
        private _swimLeftButton: objects.Button;
        private _swimRightButton: objects.Button;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            // add Image
            this._shipwreckSceneImage = new createjs.Bitmap("../../Assets/images/ShipwreckScene.png");
            this.addChild(this._shipwreckSceneImage);
            
            // add the CORALLINE_SCENE button to the MENU scene
            this._swimLeftButton = new objects.Button(
                "SwimLeftButton",
                config.Screen.CENTER_X - 150,
                config.Screen.CENTER_Y + 140);
            this.addChild(this._swimLeftButton);
            
            // CORALLINE_SCENE Button event listener
            this._swimLeftButton.on("click", this._swimLeftButtonClick, this);
            
            // add the CORALLINE_SCENE button to the MENU scene
            this._swimRightButton = new objects.Button(
                "SwimRightButton",
                config.Screen.CENTER_X + 150,
                config.Screen.CENTER_Y + 140);
            this.addChild(this._swimRightButton);
            
            // CORALLINE_SCENE Button event listener
            this._swimRightButton.on("click", this._swimRightButtonClick, this);
            
            // add this scene to the global stage container
            stage.addChild(this);
        }

        // INTRO Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        //  Button click event handler
        private _swimLeftButtonClick(event: createjs.MouseEvent) {
            // Switch to the CORALLINE_SCENE Scene
            scene = config.Scene.CORALLINE_SCENE;
            changeScene();
        }
        
        // CORALLINE_SCENE Button click event handler
        private _swimRightButtonClick(event: createjs.MouseEvent) {
            // Switch to the CORALLINE_SCENE Scene
            scene = config.Scene.FISH_SCENE;
            changeScene();
        }
    }
}