require('./src/weapp-adapter.js');
require('./manifest.js');
require('./src/egret.wxgame.js');
// require('./src/zlib.min.js');

let runOptions = {
	entryClassName: 'Main',
	orientation: 'auto',
	frameRate: 60,
	scaleMode: 'fixedWidth',
	contentWidth: 640,
	contentHeight: 1136,
	showFPS: false,
	fpsStyles: 'x:0,y:0,size:12,textColor:0xffffff,bgAlpha:0.9',
	showLog: false,
	maxTouches: 1,
	//----auto option end----
	renderMode: 'webgl',
	audioType: 0,
	calculateCanvasScaleFactor: function (context) {
		var backingStore =
			context.backingStorePixelRatio ||
			context.webkitBackingStorePixelRatio ||
			context.mozBackingStorePixelRatio ||
			context.msBackingStorePixelRatio ||
			context.oBackingStorePixelRatio ||
			context.backingStorePixelRatio ||
			1;
		return (window.devicePixelRatio || 1) / backingStore;
	},
};

const runEgret = function () {
	console.log(`开始egret.runEgret...`);
	egret.runEgret(runOptions);
};

console.log(`开始运行游戏。。。`);
runEgret();
