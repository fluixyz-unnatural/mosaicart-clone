(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.yellowline = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("EilgABfIAAi9MFLBAAAIAAC9g");
	this.shape.setTransform(0,0,1.4711,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.yellowline, new cjs.Rectangle(-1558.4,-9.5,3116.8,19), null);


(lib.redline = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6666").s().p("EjYdABfIAAi9MGw7AAAIAAC9g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.redline, new cjs.Rectangle(-1385.4,-9.5,2770.8,19), null);


(lib.blueline = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3399FF").s().p("Ei1CABfIAAi9MFqFAAAIAAC9g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.blueline, new cjs.Rectangle(-1158.6,-9.5,2317.3,19), null);


// stage content:
(lib._HTML5Canvas = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// mask1_コピー (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EjQOgU8MBTEiSxMFNZC8qMhTECSxg");
	var mask_graphics_60 = new cjs.Graphics().p("EjQOgU8MBTEiSxMFNZC8qMhTECSxg");
	var mask_graphics_61 = new cjs.Graphics().p("EjQOgU8MBTEiSxMFNZC8qMhTECSxg");
	var mask_graphics_62 = new cjs.Graphics().p("EjQOgSzMBTEiSxMFNZC8qMhTECSxg");
	var mask_graphics_63 = new cjs.Graphics().p("EjQOgOZMBTEiSxMFNZC8qMhTECSxg");
	var mask_graphics_64 = new cjs.Graphics().p("EjQOgKAMBTEiSxMFNZC8qMhTECSxg");
	var mask_graphics_65 = new cjs.Graphics().p("EjQOgFnMBTEiSxMFNZC8qMhTECSxg");
	var mask_graphics_66 = new cjs.Graphics().p("EjQOgBOMBTEiSxMFNZC8qMhTECSxg");
	var mask_graphics_67 = new cjs.Graphics().p("EjQOADLMBTEiSwMFNZC8qMhTECSxg");
	var mask_graphics_68 = new cjs.Graphics().p("EjQOAHkMBTEiSwMFNZC8qMhTECSxg");
	var mask_graphics_69 = new cjs.Graphics().p("EjQOAL9MBTEiSwMFNZC8qMhTECSxg");
	var mask_graphics_70 = new cjs.Graphics().p("EjQOAQWMBTEiSwMFNZC8qMhTECSxg");
	var mask_graphics_71 = new cjs.Graphics().p("EjQOAUwMBTEiSwMFNZC8qMhTECSxg");
	var mask_graphics_72 = new cjs.Graphics().p("EjQOAZJMBTEiSwMFNZC8qMhTECSxg");
	var mask_graphics_73 = new cjs.Graphics().p("EjQOAdiMBTEiSwMFNZC8qMhTECSxg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:662.175,y:1001.05}).wait(60).to({graphics:mask_graphics_60,x:702.575,y:988.4}).wait(1).to({graphics:mask_graphics_61,x:649.5135,y:1044.6462}).wait(1).to({graphics:mask_graphics_62,x:596.4519,y:1087.1462}).wait(1).to({graphics:mask_graphics_63,x:543.3904,y:1115.2692}).wait(1).to({graphics:mask_graphics_64,x:490.3289,y:1143.3923}).wait(1).to({graphics:mask_graphics_65,x:437.2673,y:1171.5154}).wait(1).to({graphics:mask_graphics_66,x:384.2058,y:1199.6385}).wait(1).to({graphics:mask_graphics_67,x:331.1442,y:1227.7615}).wait(1).to({graphics:mask_graphics_68,x:278.0827,y:1255.8846}).wait(1).to({graphics:mask_graphics_69,x:225.0212,y:1284.0077}).wait(1).to({graphics:mask_graphics_70,x:171.9596,y:1312.1308}).wait(1).to({graphics:mask_graphics_71,x:118.8981,y:1340.2538}).wait(1).to({graphics:mask_graphics_72,x:65.8365,y:1368.3769}).wait(1).to({graphics:mask_graphics_73,x:12.775,y:1396.5}).wait(14));

	// レイヤー_3_コピー_コピー
	this.instance = new lib.redline();
	this.instance.setTransform(953.25,534.4,0.9695,1,29.2686,0,0,0,0.1);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(60).to({_off:false},0).wait(1).to({regY:0,scaleY:12.13,x:955.3371,y:530.6724},0).wait(1).to({scaleY:22.9812,rotation:29.2685,x:957.3232,y:527.1356},0).wait(1).to({scaleY:33.2831,x:959.2087,y:523.7779},0).wait(1).to({scaleY:42.8075,rotation:29.2684,x:960.9519,y:520.6736},0).wait(1).to({scaleY:51.4109,x:962.5265,y:517.8694},0).wait(1).to({scaleY:59.0435,x:963.9235,y:515.3817},0).wait(1).to({scaleY:65.7306,rotation:29.2683,x:965.1474,y:513.2022},0).wait(1).to({scaleY:71.5433,x:966.2113,y:511.3076},0).wait(1).to({scaleY:76.5733,x:967.1319,y:509.6682},0).wait(1).to({scaleY:80.9154,x:967.9266,y:508.253},0).wait(1).to({scaleY:84.6586,x:968.6117,y:507.033},0).wait(1).to({scaleY:87.8821,rotation:29.2682,x:969.2017,y:505.9823},0).wait(1).to({scaleY:90.6546,x:969.7091,y:505.0787},0).wait(1).to({scaleY:93.035,x:970.1448,y:504.3028},0).wait(1).to({scaleY:95.0728,x:970.5177,y:503.6386},0).wait(1).to({scaleX:0.9694,scaleY:96.8102,x:970.8357,y:503.0724},0).wait(1).to({scaleY:98.283,x:971.1053,y:502.5923},0).wait(1).to({scaleY:99.5214,x:971.3319,y:502.1887},0).wait(1).to({scaleY:100.5513,x:971.5204,y:501.853},0).wait(1).to({scaleY:101.3948,x:971.6748,y:501.5781},0).wait(1).to({scaleY:102.0711,x:971.7986,y:501.3577},0).wait(1).to({scaleY:102.5966,x:971.8948,y:501.1864},0).wait(1).to({scaleY:102.9856,x:971.966,y:501.0596},0).wait(1).to({scaleY:103.2507,x:972.0145,y:500.9732},0).wait(1).to({regX:0.1,regY:0.1,scaleY:103.4022,x:967.05,y:509.95},0).to({_off:true},1).wait(1));

	// レイヤー_3_コピー
	this.instance_1 = new lib.yellowline();
	this.instance_1.setTransform(953.25,534.4,0.9695,1,29.2686,0,0,0,0.1);
	this.instance_1._off = true;

	this.instance_2 = new lib.blueline();
	this.instance_2.setTransform(963.25,516.45,0.9695,103.4098,29.2686);

	var maskedShapeInstanceList = [this.instance_1,this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},55).to({state:[{t:this.instance_2}]},25).to({state:[]},1).wait(6));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(55).to({_off:false},0).to({_off:true,regY:0,scaleY:103.4098,x:963.25,y:516.45},25,cjs.Ease.cubicOut).wait(7));

	// レイヤー_3_コピー
	this.instance_3 = new lib.blueline();
	this.instance_3.setTransform(953.45,534.15,0.9695,2.0773,29.2685,0,0,0.1,0);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(50).to({_off:false},0).to({regX:0,scaleY:103.4098,rotation:29.2686,x:963.25,y:516.45},25,cjs.Ease.cubicOut).to({_off:true},1).wait(11));

	// mask1 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("EjQOgU8MBTEiSxMFNZC8qMhTECSxg");
	var mask_1_graphics_60 = new cjs.Graphics().p("EjQOgU8MBTEiSxMFNZC8qMhTECSxg");
	var mask_1_graphics_61 = new cjs.Graphics().p("EjQOgU8MBTEiSxMFNZC8qMhTECSxg");
	var mask_1_graphics_62 = new cjs.Graphics().p("EjQOgU8MBTEiSxMFNZC8qMhTECSxg");
	var mask_1_graphics_63 = new cjs.Graphics().p("EjP2gU8MBTEiSxMFNZC8qMhTECSxg");
	var mask_1_graphics_64 = new cjs.Graphics().p("EjM1gU8MBTEiSxMFNZC8qMhTECSxg");
	var mask_1_graphics_65 = new cjs.Graphics().p("EjJ0gU8MBTEiSxMFNZC8qMhTECSxg");
	var mask_1_graphics_66 = new cjs.Graphics().p("EjGygU8MBTDiSxMFNZC8qMhTDCSxg");
	var mask_1_graphics_67 = new cjs.Graphics().p("EjDxgU8MBTDiSxMFNZC8qMhTDCSxg");
	var mask_1_graphics_68 = new cjs.Graphics().p("EjAwgU8MBTDiSxMFNZC8qMhTDCSxg");
	var mask_1_graphics_69 = new cjs.Graphics().p("Ei9vgU8MBTDiSxMFNZC8qMhTDCSxg");
	var mask_1_graphics_70 = new cjs.Graphics().p("Ei6ugU8MBTEiSxMFNZC8qMhTECSxg");
	var mask_1_graphics_71 = new cjs.Graphics().p("Ei3tgU8MBTEiSxMFNZC8qMhTECSxg");
	var mask_1_graphics_72 = new cjs.Graphics().p("Ei0sgU8MBTEiSxMFNZC8qMhTECSxg");
	var mask_1_graphics_73 = new cjs.Graphics().p("EixrgU8MBTEiSxMFNZC8qMhTDCSxg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:1236.125,y:87.95}).wait(60).to({graphics:mask_1_graphics_60,x:1221.575,y:81.8}).wait(1).to({graphics:mask_1_graphics_61,x:1260.2019,y:17.9731}).wait(1).to({graphics:mask_1_graphics_62,x:1298.8288,y:-45.8538}).wait(1).to({graphics:mask_1_graphics_63,x:1335.0654,y:-109.6808}).wait(1).to({graphics:mask_1_graphics_64,x:1354.3788,y:-173.5077}).wait(1).to({graphics:mask_1_graphics_65,x:1373.6923,y:-237.3346}).wait(1).to({graphics:mask_1_graphics_66,x:1393.0058,y:-301.1615}).wait(1).to({graphics:mask_1_graphics_67,x:1412.3192,y:-364.9885}).wait(1).to({graphics:mask_1_graphics_68,x:1431.6327,y:-428.8154}).wait(1).to({graphics:mask_1_graphics_69,x:1450.9462,y:-492.6423}).wait(1).to({graphics:mask_1_graphics_70,x:1470.2596,y:-556.4692}).wait(1).to({graphics:mask_1_graphics_71,x:1489.5731,y:-620.2962}).wait(1).to({graphics:mask_1_graphics_72,x:1508.8865,y:-684.1231}).wait(1).to({graphics:mask_1_graphics_73,x:1528.2,y:-747.95}).wait(14));

	// レイヤー_3_コピー
	this.instance_4 = new lib.redline();
	this.instance_4.setTransform(953.25,534.4,0.9695,1,29.2686,0,0,0,0.1);
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(60).to({_off:false},0).wait(1).to({regY:0,scaleY:12.13,x:955.3371,y:530.6724},0).wait(1).to({scaleY:22.9812,rotation:29.2685,x:957.3232,y:527.1356},0).wait(1).to({scaleY:33.2831,x:959.2087,y:523.7779},0).wait(1).to({scaleY:42.8075,rotation:29.2684,x:960.9519,y:520.6736},0).wait(1).to({scaleY:51.4109,x:962.5265,y:517.8694},0).wait(1).to({scaleY:59.0435,x:963.9235,y:515.3817},0).wait(1).to({scaleY:65.7306,rotation:29.2683,x:965.1474,y:513.2022},0).wait(1).to({scaleY:71.5433,x:966.2113,y:511.3076},0).wait(1).to({scaleY:76.5733,x:967.1319,y:509.6682},0).wait(1).to({scaleY:80.9154,x:967.9266,y:508.253},0).wait(1).to({scaleY:84.6586,x:968.6117,y:507.033},0).wait(1).to({scaleY:87.8821,rotation:29.2682,x:969.2017,y:505.9823},0).wait(1).to({scaleY:90.6546,x:969.7091,y:505.0787},0).wait(1).to({scaleY:93.035,x:970.1448,y:504.3028},0).wait(1).to({scaleY:95.0728,x:970.5177,y:503.6386},0).wait(1).to({scaleX:0.9694,scaleY:96.8102,x:970.8357,y:503.0724},0).wait(1).to({scaleY:98.283,x:971.1053,y:502.5923},0).wait(1).to({scaleY:99.5214,x:971.3319,y:502.1887},0).wait(1).to({scaleY:100.5513,x:971.5204,y:501.853},0).wait(1).to({scaleY:101.3948,x:971.6748,y:501.5781},0).wait(1).to({scaleY:102.0711,x:971.7986,y:501.3577},0).wait(1).to({scaleY:102.5966,x:971.8948,y:501.1864},0).wait(1).to({scaleY:102.9856,x:971.966,y:501.0596},0).wait(1).to({scaleY:103.2507,x:972.0145,y:500.9732},0).wait(1).to({regX:0.1,regY:0.1,scaleY:103.4022,x:967.05,y:509.95},0).to({_off:true},1).wait(1));

	// レイヤー_3
	this.instance_5 = new lib.yellowline();
	this.instance_5.setTransform(953.25,534.4,0.9695,1,29.2686,0,0,0,0.1);
	this.instance_5._off = true;

	this.instance_6 = new lib.blueline();
	this.instance_6.setTransform(963.25,516.45,0.9695,103.4098,29.2686);

	var maskedShapeInstanceList = [this.instance_5,this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5}]},55).to({state:[{t:this.instance_6}]},25).to({state:[]},1).wait(6));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(55).to({_off:false},0).to({_off:true,regY:0,scaleY:103.4098,x:963.25,y:516.45},25,cjs.Ease.cubicOut).wait(7));

	// レイヤー_3
	this.instance_7 = new lib.blueline();
	this.instance_7.setTransform(953.5,533.9,0.9695,3.438,29.2687);
	this.instance_7._off = true;

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(50).to({_off:false},0).to({scaleY:103.4098,rotation:29.2686,x:963.25,y:516.45},25,cjs.Ease.cubicOut).to({_off:true},1).wait(11));

	// レイヤー_2_コピー_コピー
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#3399FF").ss(33,0,1).p("AAjAUIhFgn");
	this.shape.setTransform(1923.175,1081.675);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#3399FF").ss(33,0,1).p("Axhp1MAjDATr");
	this.shape_1.setTransform(1814,1020.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#3399FF").ss(33,0,1).p("Egg6gSfMBB1Ak/");
	this.shape_2.setTransform(1714.975,964.15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#3399FF").ss(33,0,1).p("Egu2gaUMBdtA0p");
	this.shape_3.setTransform(1625.375,913.55);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#3399FF").ss(33,0,1).p("Eg7bghZMB23BCz");
	this.shape_4.setTransform(1544.5,867.925);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#3399FF").ss(33,0,1).p("EhGwgnwMCNhBPh");
	this.shape_5.setTransform(1471.675,826.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#3399FF").ss(33,0,1).p("EhQ6gtdMCh1Ba7");
	this.shape_6.setTransform(1406.35,789.925);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#3399FF").ss(33,0,1).p("EhaAgykMC0BBlJ");
	this.shape_7.setTransform(1347.875,756.925);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#3399FF").ss(33,0,1).p("EhiHg3IMDEPBuR");
	this.shape_8.setTransform(1295.725,727.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#3399FF").ss(33,0,1).p("EhpUg7LMDSpB2X");
	this.shape_9.setTransform(1249.375,701.325);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#3399FF").ss(33,0,1).p("Ehvtg+xMDfbB9j");
	this.shape_10.setTransform(1208.3,678.15);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#3399FF").ss(33,0,1).p("Eh1WhB8MDqtCD5");
	this.shape_11.setTransform(1172.025,657.675);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#3399FF").ss(33,0,1).p("Eh6ThEuMD0nCJd");
	this.shape_12.setTransform(1140.175,639.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#3399FF").ss(33,0,1).p("Eh+ohHKMD9RCOV");
	this.shape_13.setTransform(1112.275,623.95);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#3399FF").ss(33,0,1).p("EiCahJSMEE1CSl");
	this.shape_14.setTransform(1088,610.225);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#3399FF").ss(33,0,1).p("EiFshLIMELZCWR");
	this.shape_15.setTransform(1066.925,598.35);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#3399FF").ss(33,0,1).p("EiIhhMtMERDCZb");
	this.shape_16.setTransform(1048.75,588.075);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#3399FF").ss(33,0,1).p("EiK7hOEMEV3CcJ");
	this.shape_17.setTransform(1033.225,579.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#3399FF").ss(33,0,1).p("EiNAhPPMEaBCef");
	this.shape_18.setTransform(1019.95,571.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#3399FF").ss(33,0,1).p("EiOvhQNMEdfCgb");
	this.shape_19.setTransform(1008.725,565.475);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#3399FF").ss(33,0,1).p("EiQNhRCMEgbCiF");
	this.shape_20.setTransform(999.275,560.15);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#3399FF").ss(33,0,1).p("EiRchRuMEi5Cjd");
	this.shape_21.setTransform(991.375,555.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#3399FF").ss(33,0,1).p("EiSchSTMEk5Ckn");
	this.shape_22.setTransform(984.875,552);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#3399FF").ss(33,0,1).p("EiTShSwMEmlClh");
	this.shape_23.setTransform(979.55,549.025);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#3399FF").ss(33,0,1).p("EiT8hTIMEn5CmR");
	this.shape_24.setTransform(975.225,546.575);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#3399FF").ss(33,0,1).p("EiUfhTcMEo/Cm5");
	this.shape_25.setTransform(971.775,544.625);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#3399FF").ss(33,0,1).p("EiU6hTrMEp1CnX");
	this.shape_26.setTransform(969.05,543.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#3399FF").ss(33,0,1).p("EiVPhT3MEqfCnv");
	this.shape_27.setTransform(966.925,541.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#3399FF").ss(33,0,1).p("EiVfhUAMEq/CoB");
	this.shape_28.setTransform(965.275,540.95);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#3399FF").ss(33,0,1).p("EiVrhUHMErXCoP");
	this.shape_29.setTransform(964.075,540.275);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#3399FF").ss(33,0,1).p("EiV1hUMMErrCoZ");
	this.shape_30.setTransform(963.15,539.75);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#3399FF").ss(33,0,1).p("EiV7hUQMEr3Coh");
	this.shape_31.setTransform(962.5,539.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#3399FF").ss(33,0,1).p("EiV/hUSMEr/Col");
	this.shape_32.setTransform(962.075,539.15);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#3399FF").ss(33,0,1).p("EiWChUUMEsFCop");
	this.shape_33.setTransform(961.775,538.975);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#3399FF").ss(33,0,1).p("EiWEhUVMEsJCor");
	this.shape_34.setTransform(961.575,538.875);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#3399FF").ss(33,0,1).p("EiWGhUWMEsNCot");
	this.shape_35.setTransform(961.45,538.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#3399FF").ss(33,0,1).p("EiWGhUWMEsOCot");
	this.shape_36.setTransform(961.35,538.75);
	this.shape_36._off = true;

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#3399FF").ss(33,0,1).p("EiWHhUWMEsPCot");
	this.shape_37.setTransform(961.325,538.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},7).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35,p:{x:961.45,y:538.8}}]},1).to({state:[{t:this.shape_35,p:{x:961.375,y:538.75}}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[]},1).to({state:[]},1).wait(36));
	this.timeline.addTween(cjs.Tween.get(this.shape_36).wait(44).to({_off:false},0).wait(1).to({y:538.725},0).wait(2).to({_off:true},1).wait(39));

	// レイヤー_2_コピー
	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#FFCC33").ss(33,0,1).p("AAjAUIhFgn");
	this.shape_38.setTransform(1923.175,1081.675);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#FFC633").ss(33,0,1).p("Axhp1MAjDATr");
	this.shape_39.setTransform(1814,1020.05);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#FFC133").ss(33,0,1).p("Egg6gSfMBB1Ak/");
	this.shape_40.setTransform(1714.975,964.15);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#FFBC33").ss(33,0,1).p("Egu2gaUMBdtA0p");
	this.shape_41.setTransform(1625.375,913.55);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#FFB833").ss(33,0,1).p("Eg7aghZMB21BCz");
	this.shape_42.setTransform(1544.5,867.925);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#FFB433").ss(33,0,1).p("EhGvgnwMCNfBPh");
	this.shape_43.setTransform(1471.675,826.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#FFB133").ss(33,0,1).p("EhQ5gtdMChzBa7");
	this.shape_44.setTransform(1406.375,789.925);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#FFAD33").ss(33,0,1).p("EhZ/gykMCz+BlJ");
	this.shape_45.setTransform(1347.9,756.925);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#FFAB33").ss(33,0,1).p("EhiGg3IMDENBuR");
	this.shape_46.setTransform(1295.725,727.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#FFA833").ss(33,0,1).p("EhpTg7LMDSnB2X");
	this.shape_47.setTransform(1249.35,701.325);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#FFA633").ss(33,0,1).p("Ehvsg+xMDfYB9j");
	this.shape_48.setTransform(1208.3,678.15);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#FFA433").ss(33,0,1).p("Eh1UhB8MDqqCD5");
	this.shape_49.setTransform(1172.05,657.675);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#FFA233").ss(33,0,1).p("Eh6RhEuMD0kCJd");
	this.shape_50.setTransform(1140.2,639.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#FFA133").ss(33,0,1).p("Eh+nhHKMD9PCOV");
	this.shape_51.setTransform(1112.325,623.95);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#FFA033").ss(33,0,1).p("EiCZhJSMEEzCSl");
	this.shape_52.setTransform(1088.025,610.225);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#FF9F33").ss(33,0,1).p("EiFqhLIMELVCWR");
	this.shape_53.setTransform(1066.95,598.35);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#FF9E33").ss(33,0,1).p("EiIfhMtMEQ/CZb");
	this.shape_54.setTransform(1048.8,588.075);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#FF9D33").ss(33,0,1).p("EiK6hOEMEV1CcJ");
	this.shape_55.setTransform(1033.225,579.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#FF9C33").ss(33,0,1).p("EiM+hPPMEZ9Cef");
	this.shape_56.setTransform(1019.95,571.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#FF9C33").ss(33,0,1).p("EiOuhQNMEddCgb");
	this.shape_57.setTransform(1008.725,565.475);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#FF9B33").ss(33,0,1).p("EiQMhRCMEgZCiF");
	this.shape_58.setTransform(999.3,560.15);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#FF9B33").ss(33,0,1).p("EiRahRuMEi1Cjd");
	this.shape_59.setTransform(991.4,555.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#FF9A33").ss(33,0,1).p("EiSbhSTMEk3Ckn");
	this.shape_60.setTransform(984.9,552);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#FF9A33").ss(33,0,1).p("EiTQhSwMEmhClh");
	this.shape_61.setTransform(979.575,549.025);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#FF9A33").ss(33,0,1).p("EiT7hTIMEn3CmR");
	this.shape_62.setTransform(975.25,546.575);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#FF9A33").ss(33,0,1).p("EiUdhTcMEo7Cm5");
	this.shape_63.setTransform(971.8,544.625);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#FF9933").ss(33,0,1).p("EiU4hTrMEpxCnX");
	this.shape_64.setTransform(969.075,543.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#FF9933").ss(33,0,1).p("EiVOhT3MEqdCnv");
	this.shape_65.setTransform(966.95,541.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#FF9933").ss(33,0,1).p("EiVehUAMEq9CoB");
	this.shape_66.setTransform(965.3,540.95);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#FF9933").ss(33,0,1).p("EiVqhUHMErVCoP");
	this.shape_67.setTransform(964.1,540.275);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#FF9933").ss(33,0,1).p("EiVzhUMMErnCoZ");
	this.shape_68.setTransform(963.175,539.75);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#FF9933").ss(33,0,1).p("EiV5hUQMErzCoh");
	this.shape_69.setTransform(962.525,539.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#FF9933").ss(33,0,1).p("EiV+hUSMEr9Col");
	this.shape_70.setTransform(962.1,539.15);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#FF9933").ss(33,0,1).p("EiWBhUUMEsDCop");
	this.shape_71.setTransform(961.8,538.975);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#FF9933").ss(33,0,1).p("EiWDhUVMEsHCor");
	this.shape_72.setTransform(961.6,538.875);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#FF9933").ss(33,0,1).p("EiWEhUWMEsJCot");
	this.shape_73.setTransform(961.475,538.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#FF9933").ss(33,0,1).p("EiWFhUWMEsLCot");
	this.shape_74.setTransform(961.4,538.75);
	this.shape_74._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_38}]},3).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_74}]},1).to({state:[]},1).to({state:[]},5).wait(36));
	this.timeline.addTween(cjs.Tween.get(this.shape_74).wait(39).to({_off:false},0).wait(1).to({x:961.375},0).wait(1).to({y:538.725},0).wait(3).to({x:961.35},0).wait(1).to({_off:true},1).wait(41));

	// レイヤー_2
	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#FF3333").ss(33,0,1).p("AAjAUIhFgn");
	this.shape_75.setTransform(1923.175,1081.675);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#FF3333").ss(33,0,1).p("Axhp1MAjDATr");
	this.shape_76.setTransform(1814,1020.05);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#FF3333").ss(33,0,1).p("Egg6gSeMBB1Ak+");
	this.shape_77.setTransform(1714.975,964.15);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#FF3333").ss(33,0,1).p("Egu2gaUMBdtA0p");
	this.shape_78.setTransform(1625.375,913.575);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#FF3333").ss(33,0,1).p("Eg7bghYMB23BCx");
	this.shape_79.setTransform(1544.5,867.925);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#FF3333").ss(33,0,1).p("EhGwgnvMCNgBPf");
	this.shape_80.setTransform(1471.7,826.825);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#FF3333").ss(33,0,1).p("EhQ6gtcMCh1Ba5");
	this.shape_81.setTransform(1406.375,789.95);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#FF3333").ss(33,0,1).p("EhaAgyjMC0BBlH");
	this.shape_82.setTransform(1347.9,756.95);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#FF3333").ss(33,0,1).p("EhiHg3HMDEPBuP");
	this.shape_83.setTransform(1295.725,727.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#FF3333").ss(33,0,1).p("EhpUg7KMDSpB2V");
	this.shape_84.setTransform(1249.375,701.325);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#FF3333").ss(33,0,1).p("Ehvtg+wMDfbB9h");
	this.shape_85.setTransform(1208.325,678.15);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#FF3333").ss(33,0,1).p("Eh1WhB6MDqtCD1");
	this.shape_86.setTransform(1172.05,657.7);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#FF3333").ss(33,0,1).p("Eh6ThEsMD0nCJZ");
	this.shape_87.setTransform(1140.2,639.7);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#FF3333").ss(33,0,1).p("Eh+ohHIMD9RCOR");
	this.shape_88.setTransform(1112.3,623.95);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#FF3333").ss(33,0,1).p("EiCahJQMEE1CSh");
	this.shape_89.setTransform(1088.025,610.25);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#FF3333").ss(33,0,1).p("EiFrhLFMELYCWM");
	this.shape_90.setTransform(1066.95,598.35);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#FF3333").ss(33,0,1).p("EiIghMrMERBCZX");
	this.shape_91.setTransform(1048.775,588.1);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#FF3333").ss(33,0,1).p("EiK7hOCMEV3CcF");
	this.shape_92.setTransform(1033.25,579.325);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#FF3333").ss(33,0,1).p("EiNAhPMMEaBCeZ");
	this.shape_93.setTransform(1019.95,571.825);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#FF3333").ss(33,0,1).p("EiOvhQLMEdfCgX");
	this.shape_94.setTransform(1008.725,565.5);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#FF3333").ss(33,0,1).p("EiQNhRAMEgbCiB");
	this.shape_95.setTransform(999.3,560.175);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#FF3333").ss(33,0,1).p("EiRchRsMEi5CjZ");
	this.shape_96.setTransform(991.4,555.7);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#FF3333").ss(33,0,1).p("EiSchSRMEk5Ckj");
	this.shape_97.setTransform(984.9,552.05);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#FF3333").ss(33,0,1).p("EiTRhSuMEmjCld");
	this.shape_98.setTransform(979.575,549.05);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#FF3333").ss(33,0,1).p("EiT8hTGMEn5CmN");
	this.shape_99.setTransform(975.25,546.625);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#FF3333").ss(33,0,1).p("EiUfhTaMEo/Cm0");
	this.shape_100.setTransform(971.8,544.65);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#FF3333").ss(33,0,1).p("EiU6hTpMEp1CnT");
	this.shape_101.setTransform(969.075,543.1);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#FF3333").ss(33,0,1).p("EiVPhT1MEqfCnr");
	this.shape_102.setTransform(966.95,541.925);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#FF3333").ss(33,0,1).p("EiVfhT+MEq/Cn9");
	this.shape_103.setTransform(965.3,540.975);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#FF3333").ss(33,0,1).p("EiVrhUFMErXCoL");
	this.shape_104.setTransform(964.1,540.3);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#FF3333").ss(33,0,1).p("EiV0hUKMErpCoV");
	this.shape_105.setTransform(963.175,539.775);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#FF3333").ss(33,0,1).p("EiV7hUNMEr3Cob");
	this.shape_106.setTransform(962.525,539.425);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#FF3333").ss(33,0,1).p("EiV/hUQMEr/Coh");
	this.shape_107.setTransform(962.1,539.175);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#FF3333").ss(33,0,1).p("EiWChUSMEsFCol");
	this.shape_108.setTransform(961.8,539);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#FF3333").ss(33,0,1).p("EiWEhUTMEsJCon");
	this.shape_109.setTransform(961.6,538.9);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#FF3333").ss(33,0,1).p("EiWFhUTMEsLCon");
	this.shape_110.setTransform(961.475,538.825);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#FF3333").ss(33,0,1).p("EiWGhUUMEsNCop");
	this.shape_111.setTransform(961.4,538.775);
	this.shape_111._off = true;

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#FF3333").ss(33,0,1).p("EiWGhUUMEsOCop");
	this.shape_112.setTransform(961.35,538.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_75}]}).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_112}]},1).to({state:[]},1).to({state:[]},8).wait(36));
	this.timeline.addTween(cjs.Tween.get(this.shape_111).wait(36).to({_off:false},0).wait(1).to({x:961.375},0).wait(1).to({y:538.75},0).wait(2).to({_off:true},1).wait(46));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(0,-554.5,2770.2,2650.9);
// library properties:
lib.properties = {
	id: '584CEAD92BAD704398B38E4EE110896C',
	width: 1920,
	height: 1080,
	fps: 30,
	color: "#CCCCCC",
	opacity: 0.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['584CEAD92BAD704398B38E4EE110896C'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;