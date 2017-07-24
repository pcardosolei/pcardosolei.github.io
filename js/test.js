
//Aliases
var Container = PIXI.Container,
    autoDetectRenderer = PIXI.autoDetectRenderer,
    loader = PIXI.loader,
    resources = PIXI.loader.resources,
    text = PIXI.text,
    Sprite = PIXI.Sprite;

//Create a Pixi stage and renderer and add the
//renderer.view to the DOM
var stage = new Container(),
    renderer = autoDetectRenderer(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.view);



/*
  SOUND
*/
//Load the sounds
sounds.load([
  "sounds/57583__digifishmusic__palm-cove-waves.wav"
]);

//Assign the callback function that should run
//when the sounds have loaded
sounds.whenLoaded = setup;

function setup() {
  //Initialize sounds here
  var music = sounds["sounds/57583__digifishmusic__palm-cove-waves.wav"];

  let myname = new PIXI.Text('Paulo Cardoso',{ fontSize: 48, fill : 0xFFFFFF, align : 'center'});
  myname.tint = 0xFFFFFF;
  myname.anchor.set(0.5,0.5);
  myname.position.set( window.innerWidth / 2 , window.innerHeight / 2);
  stage.addChild(myname);


  let changesSoon = new PIXI.Text('Website is being built. Expect changes soon.',{fontFamily : 'Arial', fontSize: 24, fill : 0xFFFFFF, align : 'center'});
  changesSoon.tint = 0xFFFFFF;
  changesSoon.anchor.set(0.5,0.5);
  changesSoon.position.set( window.innerWidth / 2 , window.innerHeight - 30);

  changesSoon.interactive = true;
  changesSoon.on('tap', (event) => {
     //handle event
     music.pause();
     console.log("123");
  });
  stage.addChild(changesSoon);


  //Make the sound loop
  music.loop = true;
  //Play the sound
  music.play();

  renderer.render(stage);
}

