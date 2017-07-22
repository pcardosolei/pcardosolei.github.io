var stage = new PIXI.Container(),
    renderer = PIXI.autoDetectRenderer(256, 256);
document.body.appendChild(renderer.view);

//Use Pixi's built-in `loader` object to load an image
PIXI.loader
  .add("img/cat.png")
  .load(setup);

//This `setup` function will run when the image has loaded
function setup() {

  //Create the `cat` sprite from the texture
  var cat = new PIXI.Sprite(
    PIXI.loader.resources["img/cat.png"].texture
  );

  //Add the cat to the stage
  stage.addChild(cat);

  //Render the stage
  renderer.render(stage);
}
