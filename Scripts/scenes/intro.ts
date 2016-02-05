// INTRO SCENE
module scenes {
    export class Intro extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _introImage: createjs.Bitmap;
        private _swimLeftButton: objects.Button;
        private _swimRightButton: objects.Button;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start MethodB
        public start(): void {
            // add Intro Imageb
            this._introImage = new createjs.Bitmap("../../Assets/images/IntroCave.png");
            this.addChild(this._introImage);
            
            // add the swim left button 
            this._swimLeftButton = new objects.Button(
                "SwimLeftButton",
                config.Screen.CENTER_X - 150,
                config.Screen.CENTER_Y + 140);
            this.addChild(this._swimLeftButton);
            
            // swim left Button event listener
            this._swimLeftButton.on("click", this._swimLeftButtonClick, this);
            
            // add the swim right button 
            this._swimRightButton = new objects.Button(
                "SwimRightButton",
                config.Screen.CENTER_X + 150,
                config.Screen.CENTER_Y + 140);
            this.addChild(this._swimRightButton);
            
            // swim right Button event listener
            this._swimRightButton.on("click", this._swimRightButtonClick, this);
            
            // add this scene to the global stage container
            stage.addChild(this);
        }

        // INTRO Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        // swim left Button click event handler
        private _swimLeftButtonClick(event: createjs.MouseEvent) {
            // Switch to the CORALLINE_SCENE Scene
            scene = config.Scene.CORALLINE_SCENE;
            changeScene();
        }
        
        // swim right Button click event handler
        private _swimRightButtonClick(event: createjs.MouseEvent) {
            // Switch to the FISH_SCENE
            scene = config.Scene.FISH_SCENE;
            changeScene();
        }
    }
}