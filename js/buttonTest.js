// JavaScript File

    document.getElementById("Happysvg").addEventListener("click", function happyJS() {
	//outline objects
	// document.querySelector(".content").style.border = "thick solid red";
	// document.querySelector(".grid").style.border = "thick solid #0000FF";
	// document.querySelector(".grid__item").style.border = "thick solid green";
	// document.querySelector("div").style.border = "thick solid brown";
	// document.querySelector("#buttontestbutton").style.border = "thick solid purple";
	// document.querySelector("svg").style.border = "thick solid black";

	document.getElementById("Happysvg").classList.toggle("happyOn");
	var divW = document.getElementById("Happysvg").getBoundingClientRect();
	document.getElementById("I1").innerHTML = divW.top;
	var classStatus = document.getElementById("Happysvg").className;
	HappyCall(classStatus);

	// happyMojs();
});


// function happyJS() {
// 	//outline objects
// 	// document.querySelector(".content").style.border = "thick solid red";
// 	// document.querySelector(".grid").style.border = "thick solid #0000FF";
// 	// document.querySelector(".grid__item").style.border = "thick solid green";
// 	// document.querySelector("div").style.border = "thick solid brown";
// 	// document.querySelector("#buttontestbutton").style.border = "thick solid purple";
// 	// document.querySelector("svg").style.border = "thick solid black";

// 	document.getElementById("Happysvg").classList.toggle("happyOn");
// 	var divW = document.getElementById("Happysvg").getBoundingClientRect();
// 	document.getElementById("I1").innerHTML = divW.top;
// 	var classStatus = document.getElementById("Happysvg").className;
// 	HappyCall(classStatus);

// 	// happyMojs();
// }



// function sadJS() {
// 	document.getElementById("Sadsvg").classList.toggle("sadOn");
// 	// var divW = document.getElementById("Happysvg").getBoundingClientRect();
// 	// document.getElementById("I1").innerHTML = divW.top;
// 	var classStatus = document.getElementById("Sadsvg").className;
// 	SadCall(classStatus);
// 	// SadMojs();
// }

// function lonelyJS() {
// 	document.getElementById("Lonelysvg").classList.toggle("sadOn");
// 	var classStatus = document.getElementById("Lonelysvg").className;
// 	//lonelyCall(classStatus);
// 	//lonelyMojs();
// }

// function boredJS() {
// 	document.getElementById("Boredsvg").classList.toggle("disgustOn");
// 	var classStatus = document.getElementById("Boredsvg").className;
// 	//boredCall(classStatus);
// 	//boredMojs();
// }

// function confidentJS() {
// 	document.getElementById("Confidentsvg").classList.toggle("happyOn");
// 	var classStatus = document.getElementById("Confidentsvg").className;
// 	//confidentCall(classStatus);
// 	//confidentMojs();
// }

// function joyfulJS() {
// 	document.getElementById("Joyfulsvg").classList.toggle("happyOn");
// 	var classStatus = document.getElementById("Joyfulsvg").className;
// 	//joyfulCall(classStatus);
// 	if (classStatus === "happyOn") {
// 		joyfulMojs();
// 	}
// }

// function discouragedJS() {
// 	document.getElementById("Discouragedsvg").classList.toggle("sadOn");
// 	var classStatus = document.getElementById("Discouragedsvg").className;
// 	//discouragedCall(classStatus);
// 	//discouragedMojs();
// }

// function thoughtfulJS() {
// 	document.getElementById("Thoughtfulsvg").classList.toggle("happyOn");
// 	var classStatus = document.getElementById("Thoughtfulsvg").className;
// 	//thoughtfulCall(classStatus);
// 	//thoughtfulMojs();
// }

// function guiltyJS() {
// 	document.getElementById("Guiltysvg").classList.toggle("scaredOn");
// 	var classStatus = document.getElementById("Guiltysvg").className;
// 	//guiltyCall(classStatus);
// 	//guiltyMojs();
// }

// function ashamedJS() {
// 	document.getElementById("Ashamedsvg").classList.toggle("scaredOn");
// 	var classStatus = document.getElementById("Ashamedsvg").className;
// 	//ashamedCall(classStatus);
// 	//ashamedMojs();
// }

// function proudJS() {
// 	document.getElementById("Proudsvg").classList.toggle("happyOn");
// 	var classStatus = document.getElementById("Proudsvg").className;
// 	//proudCall(classStatus);
// 	//proudMojs();
// }

// function scaredJS() {
// 	document.getElementById("Scaredsvg").classList.toggle("scaredOn");
// 	var classStatus = document.getElementById("Scaredsvg").className;
// 	//scaredCall(classStatus);
// 	//scaredMojs();
// }

// function shyJS() {
// 	document.getElementById("Shysvg").classList.toggle("scaredOn");
// 	var classStatus = document.getElementById("Shysvg").className;
// 	//shyCall(classStatus);
// 	//shyMojs();
// }

// function lovedJS() {
// 	document.getElementById("Lovedsvg").classList.toggle("happyOn");
// 	var classStatus = document.getElementById("Lovedsvg").className;
// 	//lovedCall(classStatus);
// 	//lovedMojs();
// }

// function sillyJS() {
// 	document.getElementById("Sillysvg").classList.toggle("happyOn");
// 	var classStatus = document.getElementById("Sillysvg").className;
// 	//sillyCall(classStatus);
// 	if (classStatus === "happyOn") {
// 		sillyMojs();
// 	}
// }

// function angryJS() {
// 	document.getElementById("Angrysvg").classList.toggle("angryOn");
// 	var classStatus = document.getElementById("Angrysvg").className;
// 	//angryCall(classStatus);
// 	if (classStatus === "angryOn") {angryMojs();}
// }

// function coolJS() {
// 	document.getElementById("Coolsvg").classList.toggle("happyOn");
// 	var classStatus = document.getElementById("Coolsvg").className;
// 	//coolCall(classStatus);
// 	//coolMojs();
// }

// function frustratedJS() {
// 	document.getElementById("Frustratedsvg").classList.toggle("angryOn");
// 	var classStatus = document.getElementById("Frustratedsvg").className;
// 	//frustratedCall(classStatus);
// 	//frustratedMojs();
// }

// function surprisedJS() {
// 	document.getElementById("Surprisedsvg").classList.toggle("happyOn");
// 	var classStatus = document.getElementById("Surprisedsvg").className;
// 	//surprisedCall(classStatus);
// 	//surprisedMojs();
// }

// function jealousJS() {
// 	document.getElementById("Jealoussvg").classList.toggle("angryOn");
// 	var classStatus = document.getElementById("Jealoussvg").className;
// 	//jealousCall(classStatus);
// 	//jealousMojs();
// }

// function overwhelmedJS() {
// 	document.getElementById("Overwhelmedsvg").classList.toggle("disgustOn");
// 	var classStatus = document.getElementById("Overwhelmedsvg").className;
// 	console.log(classStatus);
// 	//overwhelmedCall(classStatus);
// 	if (classStatus === "disgustOn") {
// 		overwhelmedMojs();
// 	}
// }

// function hurtJS() {
// 	document.getElementById("Hurtsvg").classList.toggle("angryOn");
// 	var classStatus = document.getElementById("Hurtsvg").className;
// 	//hurtCall(classStatus);
// 	//hurtMojs();
// }

// function confusedJS() {
// 	document.getElementById("Confusedsvg").classList.toggle("scaredOn");
// 	var classStatus = document.getElementById("Confusedsvg").className;
// 	//confusedCall(classStatus);
// 	//confusedMojs();
// }

// function peacefulJS() {
// 	document.getElementById("Peacefulsvg").classList.toggle("happyOn");
// 	var classStatus = document.getElementById("Peacefulsvg").className;
// 	//peacefulCall(classStatus);
// 	//peacefulMojs();
// }

// function excitedJS() {
// 	document.getElementById("Excitedsvg").classList.toggle("happyOn");
// 	var classStatus = document.getElementById("Excitedsvg").className;
// 	//excitedCall(classStatus);
// 	//excitedMojs();
// }

function HappyCall(statusOn) {
	var s = Snap("#layer1");
	var div1 = Snap('#Happysvg');
	var happySmile = s.select("#happySmile");
	var happyBG = div1.select("#Happysvg");
	if (statusOn == "happyOn") {
		happyMojs();
		setTimeout(function() {
			happySmile.animate({
				d: "m -47.314192,264.93389 c 13.247144,28.33789 25.006376,61.63499 71.128881,61.21423 49.634958,-0.45267 68.037728,-33.20061 80.757091,-60.1302"
			}, 150);
			// happyBG.animate({
			// 	fill: "#FF6600",
			// 	stroke: "#686868"
			// }, 150);
		}, 1000);
	}
	else {
		happySmile.animate({
			d: "m -9.3340173,295.56743 c 6.1099026,12.73299 11.533543,27.69428 32.8063553,27.50522 22.892838,-0.2034 31.380639,-14.91794 37.247118,-27.01814"
		}, 150);

		// happyBG.animate({
		// 	fill: "#FFFFFF",
		// 	stroke: "#686868"
		// }, 150);
	}
}

function happyMojs() {
	var ElBbox = document.getElementById("Happysvg").getBoundingClientRect();
	console.log(ElBbox);
	var El = document.querySelector('#Happysvg');
	var el1span = document.querySelector('svg');
	var cumulativeOffset = CPosition(El);
	// burst animation
	// var burst = new mojs.Burst();
	// burst.play();
	var B1 = new mojs.Burst({
		left: cumulativeOffset.left,
		scale: 2,
		top: cumulativeOffset.top,
		x: ElBbox.width / 2,
		y: ElBbox.height / 2,
		radius: {
			0: 50
		}
	});

	// B1.play();
	var T1 = new mojs.Tween({
		duration: 1100,

		onUpdate: function(progress) {
			if (progress > 0.3) {
				var elasticOutProgress = mojs.easing.elastic.out(1.43 * progress - 0.43);
				el1span.style.WebkitTransform = el1span.style.transform = 'scale3d(' + elasticOutProgress + ',' + elasticOutProgress + ',1)';
				// el1span.style.backgroundColor = 'red';
			}
			else {
				el1span.style.WebkitTransform = el1span.style.transform = 'scale3d(0,0,1)';
				// el1span.style.backgroundColor = 'white';
			}

		}

	});

	var tL = new mojs.Timeline();
	// tL.add(B1);
	tL.add(B1, T1);
	tL.play();
	el1span.style.zIndex = "-1";
	// burst.replay();

}

// function SadCall(statusOn) {
// 	var sad = Snap("#sadHeart");
// 	var tear = sad.select("#tear");
// 	// var happySmile = s.select("#happySmile");
// 	// var BG = div1.select("#Happysvg");
// 	if (statusOn === "sadOn") {
// 		console.log(document.getElementById("Sadsvg").className);
// 		// happyMojs();
// 		setTimeout(function() {
// 			tear.animate({
// 				d: "m -13.17746,207.10122 c 0,0 -13.31349,17.71942 -4.03261,26.1658 11.5794801,10.53826 12.6236601,-16.47017 3.75224,-27.01187"

// 			}, 500, mina.elastic);
// 		}, 100);

// 	}
// 	else {
// 		tear.animate({
// 			d: "m -10.07787,156.91844 c 0,0 -13.31349,17.71942 -4.03261,26.1658 11.57948,10.53826 12.62366,-16.47017 3.75224,-27.01187"
// 		}, 150);
// 	}
// }

// // function SadMojs() {
// // 	var ElBbox = document.getElementById("Sadsvg").getBoundingClientRect();
// // 	var El = document.querySelector('.sadText');
// // 	var el1span = El.querySelector('svg');
// // 	// burst animation
// // 	var B1 = new mojs.Burst({
// // 		x: ((ElBbox.right - ElBbox.left) / 2) + ElBbox.left,
// // 		y: (ElBbox.bottom - ElBbox.top) / 2 + ElBbox.top,
// // 		radius: {
// // 			0: ElBbox.right - ElBbox.left
// // 		}
// // 	});

// // 	var T1 = new mojs.Tween({
// // 		duration: 1100,

// // 		onUpdate: function(progress) {
// // 			if (progress > 0.3) {
// // 				var elasticOutProgress = mojs.easing.elastic.out(1.43 * progress - 0.43);
// // 				el1span.style.WebkitTransform = el1span.style.transform = 'scale3d(' + elasticOutProgress + ',' + elasticOutProgress + ',1)';
// // 				// el1span.style.backgroundColor = 'red';
// // 			}
// // 			else {
// // 				el1span.style.WebkitTransform = el1span.style.transform = 'scale3d(0,0,1)';
// // 				// el1span.style.backgroundColor = 'white';
// // 			}

// // 		}

// // 	});


// // 	var tL = new mojs.Timeline();
// // 	tL.add(T1);
// // 	tL.add(B1, T1);
// // 	tL.start();
// // 	el1span.style.zIndex = "-1";
// // 	// burst.replay();

// // }

// function joyfulMojs() {

// 	var ElBbox = document.getElementById("Joyfulsvg").getBoundingClientRect();
// 	var El = document.querySelector('#Joyfulsvg');
// 	var el1span = El.querySelector('svg');
// 	var cumulativeOffset = CPosition(El);
// 	// const mojsCurve = new MojsCurveEditor();
// 	console.log(ElBbox);
// 	var translateCurve = mojs.easing.path('M 0,100 17.643351,99.665281 C 40.069939,99.239817 30.160576,57.358494 53.931619,45.730542 59.736079,82.58993 79.122592,73.08121 90.323201,95.216517 95.34592,98.576962 98.532169,100.7967 100.47101,100.7967');
// 	var squashCurve = mojs.easing.path('m 0,100.00496 c 0,0 17.339707,53.25335 25,0 1.467734,-10.203492 3.215666,-12.562461 7.00776,-12.127942 4.330266,0.496186 12.658304,0.305293 24.946278,0.56559 7.464508,0.158122 16.215782,1.165208 27.508721,1.086404 C 92.908129,90.992809 83.261182,100 100,100');

// 	new mojs.Tween({
// 		// repeat: 1,
// 		// delay: 0,
// 		duration: 1000,
// 		scale: '20%',
// 		onUpdate: function(progress) {
// 			var translateProgress = translateCurve(progress),
// 				squashProgress = squashCurve(progress),
// 				scaleX = 1 - 2 * squashProgress,
// 				scaleY = 1 + 2 * squashProgress;

// 			el1span.style.transform =
// 				'translateY(' + -180 * translateProgress + 'px) ' +
// 				'scaleX(' + scaleX + ') ' + 'scaleY(' + scaleY + ')';
// 		}
// 	}).play();

// 	moTimeline = new mojs.Timeline(),
// 		moburst1 = new mojs.Burst({
// 			// parent: molinkEl,
// 			left: cumulativeOffset.left,
// 			top: cumulativeOffset.top,
// 			duration: 1300,
// 			shape: 'circle',
// 			x: (ElBbox.width),
// 			y: (ElBbox.height / 2) * -.1,
// 			children: {
// 				fill: ['#988ADE', '#DE8AA0', '#8AAEDE', '#8ADEAD', '#DEC58A', '#8AD1DE'],
// 				delay: 300

// 			},
// 			radius: {
// 				0: 60
// 			},
// 			count: 6,
// 			// isRunLess: true,
// 			easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
// 		}),
// 		moburst2 = new mojs.Burst({
// 			// parent: molinkEl,
// 			left: cumulativeOffset.left,
// 			top: cumulativeOffset.top,
// 			duration: 1600,

// 			shape: 'circle',
// 			x: (ElBbox.width / 2) * -.3,
// 			y: (ElBbox.height / 2) * .3,
// 			children: {
// 				fill: ['#988ADE', '#DE8AA0', '#8AAEDE', '#8ADEAD', '#DEC58A', '#8AD1DE'],
// 				delay: 300
// 			},
// 			radius: {
// 				0: 80
// 			},
// 			count: 14,
// 			// isRunLess: true,
// 			easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
// 		}),
// 		moburst3 = new mojs.Burst({
// 			// parent: molinkEl,
// 			left: cumulativeOffset.left,
// 			top: cumulativeOffset.top,
// 			duration: 1500,
// 			children: {
// 				delay: 200,
// 				shape: 'circle',
// 				fill: ['#988ADE', '#DE8AA0', '#8AAEDE', '#8ADEAD', '#DEC58A', '#8AD1DE']
// 			},
// 			x: ElBbox.width / 2,
// 			y: (ElBbox.height / 2) * -.3,
// 			radius: {
// 				0: 90
// 			},
// 			count: 8,
// 			isRunLess: true,
// 			easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
// 		}),
// 		moburst4 = new mojs.Burst({
// 			// parent: molinkEl,
// 			left: cumulativeOffset.left,
// 			top: cumulativeOffset.top,
// 			duration: 2000,
// 			children: {
// 				delay: 300,
// 				shape: 'circle',
// 				fill: ['#988ADE', '#DE8AA0', '#8AAEDE', '#8ADEAD', '#DEC58A', '#8AD1DE']
// 			},
// 			x: ElBbox.width / 2,
// 			y: (ElBbox.height / 2) * -.3,
// 			radius: {
// 				0: 60
// 			},
// 			count: 14,
// 			isRunLess: true,
// 			easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
// 		}),
// 		moburst5 = new mojs.Burst({
// 			// parent: molinkEl,
// 			left: cumulativeOffset.left,
// 			top: cumulativeOffset.top,
// 			duration: 1400,
// 			delay: 400,
// 			shape: 'circle',
// 			fill: ['#988ADE', '#DE8AA0', '#8AAEDE', '#8ADEAD', '#DEC58A', '#8AD1DE'],
// 			x: ElBbox.width / 2,
// 			y: (ElBbox.height / 2) * -.3,
// 			radius: {
// 				0: 60
// 			},
// 			count: 12,
// 			isRunLess: true,
// 			easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
// 		});

// 	moTimeline.add(moburst1, moburst2, moburst3, moburst4, moburst5);
// 	moTimeline.play();



// 	//     	new mojs.Tween({
// 	// 	// repeat: 1,
// 	// 	delay: 200,
// 	// 	duration: 1000,
// 	// 	scale: '20%',
// 	// 	onUpdate: function(progress) {
// 	// 		var translateProgress = translateCurve(progress),
// 	// 			squashProgress = squashCurve(progress),
// 	// 			scaleX = 1 - 2 * squashProgress,
// 	// 			scaleY = 1 + 2 * squashProgress;

// 	// 		el1span.style.transform =
// 	// 			'translateY(' + -180 * translateProgress + 'px) ' +
// 	// 			'scaleX(' + scaleX + ') ' + 'scaleY(' + scaleY + ')';
// 	// 	}
// 	// }).play();
// }

// function sillyMojs() {

// 	var ElBbox = document.getElementById("Sillysvg").getBoundingClientRect();
// 	var El = document.querySelector('#Sillysvg');
// 	var el1span = El.querySelector('svg');
// 	var cumulativeOffset = CPosition(El);

// 	var squashCurve = mojs.easing.path('m 0,100 c 0,0 10.173655,21.02104 9.9275972,37.20999 -0.1464549,9.63578 2.7607808,-72.690257 10.3194838,-72.262987 0,0 6.90711,61.076597 14.331426,68.622837 2.635619,2.6789 6.250388,-51.730595 6.250388,-51.730595 0,0 -1.810132,39.588365 6.992817,37.769715 4.483945,-0.92636 4.858765,-27.27746 4.858765,-27.27746 0,0 1.886013,20.73186 4.633309,16.68351 3.583939,-0.93143 1.290103,-12.486319 5.429205,-13.653508 3.293313,8.165648 -1.426541,10.257518 5.362711,10.281568 3.309663,0.0117 0.37279,-6.195751 5.197633,-8.748828 2.968946,-1.571025 2.555859,4.503308 6.935357,6.602218 3.021675,1.44815 5.91043,-7.89091 8.168356,-5.044901 5.471673,6.896781 2.73834,3.879371 5.433928,5.709761 3.48886,2.36904 6.839404,-21.474555 6.921464,-24.139005');

// 	new mojs.Tween({
// 		// repeat: 1,
// 		// delay: 0,
// 		duration: 1000,
// 		// scale: '20%',
// 		onUpdate: function(progress) {
// 			var squashProgress = squashCurve(progress),
// 				scaleX = 1 - 2 * squashProgress,
// 				scaleY = 1 + 2 * squashProgress;

// 			el1span.style.transform =
// 				'scaleX(' + scaleX + ') ' + 'scaleY(' + scaleY + ')';
// 		}
// 	}).play();



// }

// function angryMojs() {
// 	var ElBbox = document.getElementById("Angrysvg").getBoundingClientRect();
// 	var El = document.querySelector('#Angrysvg');
// 	var el1span = El.querySelector('svg');
// 	var cumulativeOffset = CPosition(El);
  
// 	var noise = mojs.easing.path('M0,100 L1.98696332,100.629117 L3.53838746,97.8756628 L5.99628366,101.223339 L7.55950567,96.8122389 L10.1815894,101.223339 L14.0277054,95.8836259 L16.1247825,101.164595 L20.9432423,95.6155105 L24.669413,101.207523 L29.2253694,93.4487468 L32.6556094,103.200313 L37.2037006,92.4636488 L40.1757887,103.28617 L41.8363434,91.0417336 L45.2449539,105.027414 L46.5555042,89.4345477 L50.5097677,105.294776 L55.6674171,87.3001687 L59.2510299,106.960707 L62.5721393,85.5431093 L65.6317285,105.27896 L69.6410488,83.6015324 L73.3996638,104.869256 L76.8859438,81.1907535 L78.8080186,106.960707 L80.7310767,80.0527695 L83.9656681,104.876787 L85.8887261,78.1774683 L88.3358076,107.094764 L91.3944137,78.7807278 L95.0763423,103.521901 L97.5234238,79.5677518 L100,100');
// 	var extremeInElasticOutEasing = mojs.easing.path('M0,100 C50,100 50,100 50,50 C50,-15.815625 53.7148438,-19.1218754 60.4981394,0 C62.2625924,4.97393188 66.4286578,6.07928485 68.3303467,0 C71.3633751,-6.23011049 74.5489919,-1.10166123 75.7012545,0 C79.6946191,3.60945678 84.2063904,-0.104182975 84.2063905,0 C87.5409362,-2.25875668 90.4589294,-0.0327241098 93.4950242,0 C97.3271182,0.20445262 100,-0.104182352 100,0');
// 	var coef = 1,
// 		isShake;

// 	new mojs.Tween({
// 		isShowEnd: false,
// 		duration: 1500,
// 		// repeat: 2,
// 		onUpdate: (ep, p, isFwd) => {
// 			var nozieP = noise(p),
// 				transform =
// 				`translate( ${ coef*(20*nozieP)}px, ${ coef*(20*nozieP)}px )`;

// 			el1span.style.transform = transform;
// 		}
		
// 	}).play();
	
// 		new mojs.Tween({
// 		isShowEnd: false,
// 		delay: 1600,
// 		duration: 1800,
// 		// repeat: 2,
// 		onUpdate: function (progress) {
//     var extremeInElasticOutProgress = extremeInElasticOutEasing(progress);
// 	el1span.style.transform = 'scale('+ extremeInElasticOutProgress + ')';
// 		}
// 	}).play();
	
// 	'use strict';
// var COLORS = {
//     RED: '#FD5061',
//     YELLOW: '#FFCEA5',
//     BLACK: '#29363B',
//     WHITE: 'black',
//     VINOUS: '#A50710'
// };
// var DURATION = 500;
// var CNT = 10;
// var PARENT_H = 50;
// var BURST_R = 75;
// var SHIFT = 300;
// var makeDust = function makeDust() {
//     var _ref, _ref2;
//     var dir = arguments.length <= 0 || arguments[0] === undefined ? -1 : arguments[0];
//     var parent = new mojs.Shape({
//     	isShowEnd: false,
//         left: 0,
//         top: 0,
//         width: 200,
//         height: 50,
//         radius: 0,
//         x: { 0: dir * SHIFT },
//         duration: 1.2 * DURATION,
//         isShowStart: true,
//         isTimelineLess: true,
//         isForce3d: true
//     });
//     parent.el.style['overflow'] = 'hidden';
//     var burst = new mojs.Burst({
//     	isShowEnd: false,
//         parent: parent.el,
//         count: CNT,
//         top: PARENT_H + BURST_R,
//         degree: 90,
//         radius: BURST_R,
//         angle: dir === -1 ? (_ref = {}, _ref[-90] = 40, _ref) : (_ref2 = {}, _ref2[0] = -130, _ref2),
//         children: {
//             fill: '#cccccc',
//             delay: dir === -1 ? 'stagger(' + DURATION + ', -' + DURATION / CNT + ')' : 'stagger(' + DURATION / CNT + ')',
//             radius: 'rand(8, 25)',
//             direction: -1,
//             isSwirl: true,
//             isForce3d: true
//         }
//     });
//     var fadeBurst = new mojs.Burst({
//     	isShowEnd: false,
//         parent: parent.el,
//         count: 2,
//         degree: 0,
//         angle: -1 * dir * 75,
//         radius: { 0: 100 },
//         top: '90%',
//         timeline: { delay: 0.8 * DURATION },
//         children: {
//             fill: '#cccccc',
//             pathScale: [
//                 0.65,
//                 1
//             ],
//             radius: 'rand(12, 15)',
//             direction: [
//                 dir,
//                 -1 * dir
//             ],
//             isSwirl: true,
//             isForce3d: true
//         }
//     });
//     var timeline = new mojs.Timeline({isShowEnd: false});
//     timeline.add(parent, burst, fadeBurst);
//     return {
//         parent: parent,
//         timeline: timeline
//     };
// };
// var circle = new mojs.Shape({
// 	isShowEnd: false,
//     left: 0,
//     top: 0,
//     strokeWidth: 10,
//     fill: 'none',
//     radius: 150,
//     scale: { 0: 1 },
//     opacity: { 1: 0 },
//     shape: 'circle',
//     stroke: 'red',
//     strokeWidth: 10,
//     fill: '#cccccc',
//     duration: 1.5 * DURATION,
//     isForce3d: true,
//     isTimelineLess: true
// });
// var cloud = new mojs.Burst({
// 	isShowEnd: false,
//     left: 0,
//     top: 0,
//     radius: { 4: 49 },
//     angle: 45,
//     count: 12,
//     children: {
//         radius: 10,
//         fill: '#cccccc',
//         scale: {
//             1: 0,
//             easing: 'sin.in'
//         },
//         pathScale: [
//             0.7,
//             null
//         ],
//         degreeShift: [
//             13,
//             null
//         ],
//         duration: [
//             500,
//             700
//         ],
//         isShowEnd: false,
//         isForce3d: true
//     }
// });
// var burst = new mojs.Burst({
// 	isShowEnd: false,
//     left: 0,
//     top: 0,
//     radius: { 0: 280 },
//     count: 2,
//     angle: 90,
//     children: {
//         shape: 'rect',
//         fill: COLORS.VINOUS,
//         radius: 15,
//         duration: DURATION,
//         isForce3d: true
//     }
// });
// var burst2 = new mojs.Burst({
// 	isShowEnd: false,
//     left: 0,
//     top: 0,
//     count: 5,
//     radius: { 0: 150 },
//     angle: 90,
//     children: {
//         shape: 'line',
//         stroke: COLORS.VINOUS,
//         strokeWidth: 5,
//         strokeLinecap: 'round',
//         radius: 25,
//         scale: 1,
//         scaleX: { 1: 0 },
//         duration: DURATION,
//         isForce3d: true
//     }
// });
// var dust1 = makeDust(-1);
// var dust2 = makeDust(1);
// var timeline = new mojs.Timeline({delay: 1500,isShowEnd: false});
// timeline.add(dust1.timeline, dust2.timeline).add(circle, cloud, burst, burst2);

// 	var _x2, _x3;
//     var x = cumulativeOffset.left, y = cumulativeOffset.top;
//     var coords = {
//     	left: x,
//     	top: y,
// 		x: ElBbox.width / 2,
// 		y: ElBbox.height / 2,
//     };
//     circle.tune(coords);
//     cloud.tune(coords);
//     burst.tune(coords);
//     burst2.tune(coords);
//     dust1.parent.tune({
//         x: (_x2 = {}, _x2[x] = x - SHIFT, _x2),
//         y: y+(ElBbox.height / 2)
//     });
//     dust2.parent.tune({
//         x: (_x3 = {}, _x3[x] = x + SHIFT, _x3),
//         y: y+(ElBbox.height / 2)
//     });
//     timeline.play();
    
    

// }

// function overwhelmedMojs() {
// 	var ElBbox = document.getElementById("Overwhelmedsvg").getBoundingClientRect();
// 	var El = document.querySelector('#Overwhelmedsvg');
// 	var el1span = El.querySelector('svg');
// 	var cumulativeOffset = CPosition(El);
// 	var extremeInElasticOutEasing = mojs.easing.path('m -6.1231638,103.7681 c 4.7827906,0.47101 4.7827906,-8.007209 4.7827906,-58.007214 0,-65.815625 37.0261242,-97.467963 61.3674992,-59.891264 3.294399,5.085687 8.285582,5.1372597 10.187271,-0.942025 3.033028,-6.230111 9.986746,1.724414 11.139009,2.826075 3.993364,3.6094572 16.512349,-3.401271 10.389186,2.3550634 3.334546,-2.2587564 3.426463,-1.9167744 6.462558,-1.8840504 3.83209,0.204453 2.82608,-9.891265 4.62093,1.8840504');

// 	// console.log("offset obj"+cumulativeOffset.left+","+cumulativeOffset.top);	
// 	// 	var xLess = (ElBbox.left + (ElBbox.width / 3));
// 	// 	var xMore = (ElBbox.left + (ElBbox.width / 1.3));
// 	// 	var yLess = (ElBbox.top + (ElBbox.height / 3));
// 	// 	var yMore = ElBbox.top + (ElBbox.height / 1.3);
// 	// 	var xRand = 'rand(' + xLess + ',' + xMore + ')';
// 	// 	var yRand = 'rand(' + yLess + ',' + yMore + ')';

// 	// console.log('coord:'+coord.x +", "+coord.y);

// 	// console.log(window.pageXOffset ) ;
// 	// 	console.log(window.pageYOffset ) ;
// 	var mainCircle = new mojs.Shape({
// 		fill: 'none',
// 		radius: 5,
// 		strokeWidth: {
// 			50: 0
// 		},
// 		scale: {
// 			0: 1
// 		},
// 		duration: 1000,
// 		// opacity: {1:0.6},
// 		left: cumulativeOffset.left,
// 		top: cumulativeOffset.top,
// 		easing: extremeInElasticOutEasing,
// 		stroke: 'cyan',
// 		x: ElBbox.width / 2,
// 		y: ElBbox.height / 2,
// 		// x: ElBbox.left + (ElBbox.width / 2),
// 		// y: ElBbox.top + (ElBbox.height / 2),
// 		isShowEnd: false
// 	});

// 	var smallCircles = [];
// 	var colors = ['deeppink', 'magenta', 'yellow', '#00F87F'];
// 	console.log(ElBbox);

// 	// console.log('left:'+ElBbox.left) ;
// 	// 	console.log('top:'+ElBbox.top );
// 	// console.log(ElBbox.left + (ElBbox.width / 2));
// 	// console.log(ElBbox.top + (ElBbox.height / 2));


// 	// console.log(xRand);
// 	// console.log(yRand);
// 	for (var i = 0; i < 35; i++) {
// 		smallCircles.push(new mojs.Shape({
// 			parent: mainCircle.el,
// 			fill: 'none',
// 			radius: 15,
// 			strokeWidth: {
// 				30: 0
// 			},
// 			scale: {
// 				0: 2
// 			},
// 			duration: 500,

// 			easing: 'cubic.out',


// 			// left: ElBbox.left+window.pageXOffset ,
// 			// top: ElBbox.top+window.pageYOffset ,
// 			stroke: colors[i % colors.length],
// 			delay: 'rand(0, 350)',

// 			x: 'rand(-80, 70)',
// 			y: 'rand(-80, 70)',
// 			radius: 'rand(5, 20)',
// 			// isShowEnd:  false
// 		}));
// 	}

// 	var T1 = new mojs.Tween({
// 		duration: 1000,
// 		onUpdate: function(progress) {
// 			if (progress > 0.3) {
// 				var elasticOutProgress = mojs.easing.elastic.out(1.43 * progress - 0.43);
// 				el1span.style.WebkitTransform = el1span.style.transform = 'scale3d(' + elasticOutProgress + ',' + elasticOutProgress + ',1)';
// 				// el1span.style.backgroundColor = 'red';
// 			}
// 			else {
// 				el1span.style.WebkitTransform = el1span.style.transform = 'scale3d(0,0,1)';
// 				// el1span.style.backgroundColor = 'white';
// 			}

// 		}

// 	});
// 	mainCircle.play();
// 	var tL = new mojs.Timeline();
// 	// tL.add(B1);
// 	tL.add(T1);
// 	tL.play();



// 	for (var i = 0; i < smallCircles.length; i++) {
// 		smallCircles[i].play();

// 	}

// }

//http://api.prototypejs.org/
//http://stackoverflow.com/questions/1480133/how-can-i-get-an-objects-absolute-position-on-the-page-in-javascript
function CPosition(element) {
	var top = 0,
		left = 0;
	do {
		top += element.offsetTop || 0;
		left += element.offsetLeft || 0;
		element = element.offsetParent;
	} while (element);

	return {
		top: top,
		left: left
	};
};
