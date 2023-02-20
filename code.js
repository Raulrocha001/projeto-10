var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

function draw() {
   background('white');
drawSprites();
 if(keyDown('w')){
   ladrao.velocityY=-7;
   
 }
  if(keyDown('s')){
   ladrao.velocityY=+7;
   
 }
  if(keyDown('d')){
   ladrao.velocityX=+7;
   
 }
  if(keyDown('a')){
   ladrao.velocityX=-7;
   
 }
  ladrao.collide(topEdge);
  ladrao.collide(bottomEdge);
  ladrao.collide(rightEdge);
  ladrao.collide(leftEdge);
  laser1.bounceOff(topEdge);
 laser1.bounceOff(bottomEdge);
   laser2.bounceOff(topEdge);
 laser2.bounceOff(bottomEdge);
 laser3.bounceOff(topEdge);
 laser3.bounceOff(bottomEdge);
   laser4.bounceOff(topEdge);
 laser4.bounceOff(bottomEdge);
  if(laser1.isTouching(ladrao) || laser2.isTouching(ladrao)|| laser3.isTouching(ladrao) || laser4.isTouching(ladrao)){
  stroke(0);
  fill(0);
  textSize(24);
  text("ladrao capturado",120,200);
  laser1.setVelocity(0,0);
   laser2.setVelocity(0,0);
   laser3.setVelocity(0,0);
   laser4.setVelocity(0,0);
    ladrao.setVelocity(0,0);
  }
}
var ladrao = createSprite(25,387,20,20);
ladrao.shapeColor="black";
var saida = createSprite(400,1);
saida.shapeColor="yellow";
var laser1 = createSprite(2,250,400,10);
laser1.shapeColor="red";
var laser2 = createSprite(400,150,400,10);
laser2.shapeColor="red";

var laser3 = createSprite(2,250,400,10);
laser3.shapeColor="blue";
var laser4 = createSprite(400,150,400,10);
laser4.shapeColor="blue";
createEdgeSprites();
laser1.velocityY=+4;
laser2.velocityY=-4;
laser4.velocityY=+4;
laser3.velocityY=-4;
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
