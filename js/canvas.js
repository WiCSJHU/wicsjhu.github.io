var stage = new createjs.StageGL("canvas", {antialias:true,preserveBuffer:true});

var MAX=1000,
    RADIUS = 30,
    COLORS = [
      {title: "ACM - WiCS", colors:["#17A2B8", "#17A2B8", "#058C8C", "#28B4D2", "#0390A5"]} ];

var colors, title, bgColor;
var textTimeout;
var sb, ss,
    store = [],
    sprites = [];

// Preload the font, since it sometimes isn't ready in time.
var loader = new createjs.FontLoader({
			src: "https://fonts.googleapis.com/css?family=Archivo+Black",
			type: "fontcss"
}, true);
loader.on("complete", showText);
loader.load();
var textReady = false;

function init() {
  stage.autoClear = true;

  var index = 0;
  colors = COLORS[index].colors;
  title = COLORS[index].title.toUpperCase();
  bgColor = "#F5F5F5";
  stage.setClearColor(bgColor);
  fill.fillCmd.style = bgColor;
  fill.updateCache();

  // Make Sprites, and create a SpriteSheet for GL
  sb = new createjs.SpriteSheetBuilder();
  for (var i=0, l=colors.length; i<l; i++) {
    var sprite = new createjs.Shape();
    sprite.graphics
      .f(colors[i])
      .dc(0,0,RADIUS);
    sb.addFrame(sprite, new createjs.Rectangle(-RADIUS,-RADIUS,RADIUS*2,RADIUS*2),2);
  }
  ss = sb.build();

  sprites.length = store.length = 0;
  cont.removeAllChildren();


  // Add text, fade in after 3s
  textReady = false;
  clearTimeout(textTimeout);
  textTimeout = setTimeout(function() {
    textReady = true;
    showText();
  }, 1200);
}

function showText() {
  if (!loader.loaded || !textReady) { return; }
  var text = new createjs.Text(title, "30px Archivo Black", "#F5F5F5")
      .set({textAlign:"center",y:-10});
  var b = text.getBounds();
  text.cache(b.x, b.y, b.width, b.height*1.5, 2);
  cont.addChildAt(text, 0);
}

// Object Pool
function getSprite() {
  var sprite = null;
  if (store.length == 0) {
    if (sprites.length >= MAX) { return; }
    sprite = new createjs.Sprite(ss);
  } else {
    sprite = store.pop();
  }
  sprite.gotoAndStop(Math.random()*colors.length|0);
  return sprite;
}
function returnSprite(sprite) {
  store.unshift(sprite);
}

// Create a new sprite from the pool and initialize
function createSprite() {
  var sprite = getSprite();
  if (sprite != null) {
    cont.addChildAt(sprite, 0);
    sprite.set({
      a: Math.random() * Math.PI*2,
      speed: Math.random() * 1,
      g: 0.1,
      scale: 0.5,
      alpha: 0
    });
    var pos = Math.random() * 50;
    sprite.x = 3*Math.sin(sprite.a) * pos;
    sprite.y = Math.cos(sprite.a) * pos;
    sprites.push(sprite);
  }
}

// Init
var cont = new createjs.Container()
  .set({x:800,y:800, scale:2}); // TODO: Center on size
var fill = new createjs.Shape().set({alpha:0.05});
fill.fillCmd = fill.graphics.f("#000").command;
fill.graphics.dr(0,0,100,100);
fill.cache(0,0,100,100);
stage.addChild(fill, cont);

createjs.Ticker.timingMode = "raf";
createjs.Ticker.on("tick", tick);

// On Tick, make a new sprite, and move the rest.
var h = 1;
function tick(event) {

  createSprite();
  createSprite();
  createSprite();

  for (var i=sprites.length-1; i>=0; i--) {
    var sprite = sprites[i];
    sprite.x += Math.sin(sprite.a)*sprite.speed;
    sprite.y += Math.cos(sprite.a)*sprite.speed;
    sprite.scale *= 0.975;
    sprite.g *= 1.02;
    sprite.y += sprite.g;
    sprite.speed *= 0.990;
    sprite.alpha = Math.min(1, sprite.alpha + 0.1);

    if (sprite.scale < 0.01) {
      sprites.splice(i, 1);
      cont.removeChild(sprite);
      returnSprite(sprite);
    }
  }


  stage.update(event);
}

// Simple Resize
window.addEventListener("resize", handleResize);
function handleResize() {
  var w = stage.canvas.width = window.innerWidth;
  var h = 450;

  cont.x = w >> 1;
  cont.y = h >> 1;
  fill.scaleX = w/100;
  fill.scaleY = h/100;
  RADIUS=w/90;

  stage.updateViewport(w,h);
}
handleResize();

stage.on("stagemousedown", function() {
    stage.autoClear = false;
})

// Click to draw
stage.on("stagemouseup", init);
document.getElementById("overlay").addEventListener("click", init)
init();