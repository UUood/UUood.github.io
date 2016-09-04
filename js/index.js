//Run script right away
			window.onload = function () {
//We'll be appending the icon to this DIV later
            	var s = Snap("#poster");
//Have Snap load the SVG file

				Snap.load("img/poster_SVG_reg.svg", function(f) {
//Assign the var names
                    feelings = f.select("#feelings");
                    happyBG = feelings.select("#happyBG");
                    sadBG = feelings.select("#sadBG");
                    lonelyBG = feelings.select("#lonelyBG");
                    boredBG = feelings.select("#boredBG");
                    confidentBG = feelings.select("#confidentBG");
                    joyfulBG = feelings.select("#joyfulBG");
                    discouragedBG = feelings.select("#discouragedBG");
                    thoughtfulBG = feelings.select("#thoughtfulBG");
                    guiltyBG = feelings.select("#guiltyBG");
                    ashamedBG = feelings.select("#ashamedBG");
                    proudBG = feelings.select("#proudBG");
                    scaredBG = feelings.select("#scaredBG");
                    shyBG = feelings.select("#shyBG");
                    lovedBG = feelings.select("#lovedBG");
                    sillyBG = feelings.select("#sillyBG");
                    angryBG = feelings.select("#angryBG");
                    coolBG = feelings.select("#coolBG");
                    frustratedBG = feelings.select("#frustratedBG");
                    surprisedBG = feelings.select("#surprisedBG");
                    jealousBG = feelings.select("#jealousBG");
                    overwhelmedBG = feelings.select("#overwhelmedBG");
                    hurtBG = feelings.select("#hurtBG");
                    confusedBG = feelings.select("#confusedBG");
                    peacefulBG = feelings.select("#peacefulBG");
                    excitedBG = feelings.select("#excitedBG");

                    
//Assign groups to var names
                    happy = feelings.select("#happy");
                    sad = feelings.select("#sad");
                    lonely = feelings.select("#lonely");
                    bored = feelings.select("#bored");
                    confident = feelings.select("#confident");
                    joyful = feelings.select("#joyful");
                    discouraged = feelings.select("#discouraged");
                    thoughtful = feelings.select("#thoughtful");
                    guilty = feelings.select("#guilty");
                    ashamed = feelings.select("#ashamed");
                    proud = feelings.select("#proud");
                    scared = feelings.select("#scared");
                    shy = feelings.select("#shy");
                    loved = feelings.select("#loved");
                    silly = feelings.select("#silly");
                    angry = feelings.select("#angry");
                    cool = feelings.select("#cool");
                    frustrated = feelings.select("#frustrated");
                    surprised = feelings.select("#surprised");
                    jealous = feelings.select("#jealous");
                    overwhelmed = feelings.select("#overwhelmed");
                    hurt = feelings.select("#hurt");
                    confused = feelings.select("#confused");
                    peaceful = feelings.select("#peaceful");
                    excited = feelings.select("#excited");
                    tear = feelings.select("#tear");
                    happySmile = feelings.select("#happySmile");


//happy
happy.click(function() {happy.toggleClass('on');
                        if (happy.hasClass('on')) {
                            happySmile.animate({d:"m 107.87057,208.59938 c 3.87785,9.44073 12.0778,13.82677 18.78017,12.67891 16.25675,-2.78416 18.75997,-12.94535 18.75997,-12.94535"},150);
                            happyBG.animate({ fill: "#FF6600", stroke: "#686868" }, 150);
                            HappyMojs();
                            // 	var ElBbox = happyBG..getBoundingClientRect(),;
                            
                            	
                            
                            
                            
                    }else{
                        happySmile.animate({d:"m 118.683,218.79651 c 1.30369,2.71688 2.46095,5.90922 7,5.86888 4.88472,-0.0434 6.69579,-3.18309 7.94754,-5.76495"},150);
                        happyBG.animate({ fill: "#FFFFFF", stroke: "#686868" }, 150);
                    } });
//sad
sad.click(function() {sad.toggleClass('on');
                        if (sad.hasClass('on')) {
                            sadBG.animate({ fill: "#0000FF", stroke: "#686868" }, 150);
                            tear.animate({d: "m 251.91375,199 c 0,0 -3.10456,3.4039 -0.94036,5.02645 2.70021,2.0244 2.9437,-3.16392 0.87498,-5.18898"}, 500, mina.elastic);
                    }else{
                        tear.animate({d: "m 251.91375,189 c 0,0 -3.10456,3.4039 -0.94036,5.02645 2.70021,2.0244 2.9437,-3.16392 0.87498,-5.18898"}, 500, mina.elastic);
                        sadBG.animate({ fill: "#FFFFFF", stroke: "#686868" }, 150);
                    } });
//lonely
lonely.click(function() {lonely.toggleClass('on');
                        if (lonely.hasClass('on')) {lonelyBG.animate({ fill: "#0000FF", stroke: "#686868" }, 150);
                    }else{lonelyBG.animate({ fill: "#FFFFFF", stroke: "#686868" }, 150);
                    } });
//bored
bored.click(function() {bored.toggleClass('on');
                        if (bored.hasClass('on')) {boredBG.animate({ fill: "#66FF00", stroke: "#686868" }, 150);
                    }else{boredBG.animate({ fill: "#FFFFFF", stroke: "#686868" }, 150);
                    } });
//confident
confident.click(function() {confident.toggleClass('on');
                        if (confident.hasClass('on')) {confidentBG.animate({ fill: "#FF6600", stroke: "#686868" }, 150);
                    }else{confidentBG.animate({ fill: "#FFFFFF", stroke: "#686868" }, 150);
                    } });
//joyful
joyful.click(function() {joyful.toggleClass('on');
                        if (joyful.hasClass('on')) {
                            joyfulBG.animate({ fill: "#FF6600", stroke: "#686868" }, 150);
                            JoyMojs();
                    }else{joyfulBG.animate({ fill: "#FFFFFF", stroke: "#686868" }, 150);
                    } });
//discouraged
discouraged.click(function() {discouraged.toggleClass('on');
                        if (discouraged.hasClass('on')) {discouragedBG.animate({ fill: "#0000FF", stroke: "#686868" }, 150);
                    }else{discouragedBG.animate({ fill: "#FFFFFF", stroke: "#686868" }, 150);
                    } });
//thoughtful
thoughtful.click(function() {thoughtful.toggleClass('on');
                        if (thoughtful.hasClass('on')) {thoughtfulBG.animate({ fill: "#FF6600", stroke: "#686868" }, 150);
                    }else{thoughtfulBG.animate({ fill: "#FFFFFF", stroke: "#686868" }, 150);
                    } });
//guilty
guilty.click(function() {guilty.toggleClass('on');
                        if (guilty.hasClass('on')) {guiltyBG.animate({ fill: "#9000FF", stroke: "#686868" }, 150);
                    }else{guiltyBG.animate({ fill: "#FFFFFF", stroke: "#686868" }, 150);
                    } });
//ashamed
ashamed.click(function() {ashamed.toggleClass('on');
                        if (ashamed.hasClass('on')) {ashamedBG.animate({ fill: "#9000FF", stroke: "#686868" }, 150);
                    }else{ashamedBG.animate({ fill: "#FFFFFF", stroke: "#686868" }, 150);
                    } });
//proud
proud.click(function() {proud.toggleClass('on');
                        if (proud.hasClass('on')) {proudBG.animate({ fill: "#FF6600", stroke: "#686868" }, 150);
                    }else{proudBG.animate({ fill: "#FFFFFF", stroke: "#686868" }, 150);
                    } });
//scared
scared.click(function() {scared.toggleClass('on');
                        if (scared.hasClass('on')) {scaredBG.animate({ fill: "#9000FF", stroke: "#686868" }, 150);
                    }else{scaredBG.animate({ fill: "#FFFFFF", stroke: "#686868" }, 150);
                    } });
//shy
shy.click(function() {shy.toggleClass('on');
                        if (shy.hasClass('on')) {shyBG.animate({ fill: "#9000FF", stroke: "#686868" }, 150);
                    }else{shyBG.animate({ fill: "#FFFFFF", stroke: "#686868" }, 150);
                    } });
//loved
loved.click(function() {loved.toggleClass('on');
                        if (loved.hasClass('on')) {lovedBG.animate({ fill: "#FF6600", stroke: "#686868" }, 150);
                    }else{lovedBG.animate({ fill: "#FFFFFF", stroke: "#686868" }, 150);
                    } });
//silly
silly.click(function() {silly.toggleClass('on');
                        if (silly.hasClass('on')) {sillyBG.animate({ fill: "#FF6600", stroke: "#686868" }, 150);
                    }else{sillyBG.animate({ fill: "#FFFFFF", stroke: "#686868" }, 150);
                    } });
//angry
angry.click(function() {angry.toggleClass('on');
                        if (angry.hasClass('on')) {angryBG.animate({ fill: "#FF0000", stroke: "#686868" }, 150);
                    }else{angryBG.animate({ fill: "#FFFFFF", stroke: "#686868" }, 150);
                    } });
//cool
cool.click(function() {cool.toggleClass('on');
                        if (cool.hasClass('on')) {coolBG.animate({ fill: "#FF6600", stroke: "#686868" }, 150);
                    }else{coolBG.animate({ fill: "#FFFFFF", stroke: "#686868" }, 150);
                    } });
//frustrated
frustrated.click(function() {frustrated.toggleClass('on');
                        if (frustrated.hasClass('on')) {frustratedBG.animate({ fill: "#FF0000", stroke: "#686868" }, 150);
                    }else{frustratedBG.animate({ fill: "#FFFFFF", stroke: "#686868" }, 150);
                    } });
//surprised
surprised.click(function() {surprised.toggleClass('on');
                        if (surprised.hasClass('on')) {surprisedBG.animate({ fill: "#FF6600", stroke: "#686868" }, 150);
                    }else{surprisedBG.animate({ fill: "#FFFFFF", stroke: "#686868" }, 150);
                    } });
//jealous
jealous.click(function() {jealous.toggleClass('on');
                        if (jealous.hasClass('on')) {jealousBG.animate({ fill: "#FF0000", stroke: "#686868" }, 150);
                    }else{jealousBG.animate({ fill: "#FFFFFF", stroke: "#686868" }, 150);
                    } });
//overwhelmed
overwhelmed.click(function() {overwhelmed.toggleClass('on');
                        if (overwhelmed.hasClass('on')) {overwhelmedBG.animate({ fill: "#66FF00", stroke: "#686868" }, 150);
                    }else{overwhelmedBG.animate({ fill: "#FFFFFF", stroke: "#686868" }, 150);
                    } });
//hurt
hurt.click(function() {hurt.toggleClass('on');
                        if (hurt.hasClass('on')) {hurtBG.animate({ fill: "#FF0000", stroke: "#686868" }, 150);
                    }else{hurtBG.animate({ fill: "#FFFFFF", stroke: "#686868" }, 150);
                    } });
//confused
confused.click(function() {confused.toggleClass('on');
                        if (confused.hasClass('on')) {confusedBG.animate({ fill: "#9000FF", stroke: "#686868" }, 150);
                    }else{confusedBG.animate({ fill: "#FFFFFF", stroke: "#686868" }, 150);
                    } });
//peaceful
peaceful.click(function() {peaceful.toggleClass('on');
                        if (peaceful.hasClass('on')) {peacefulBG.animate({ fill: "#FF6600", stroke: "#686868" }, 150);
                    }else{peacefulBG.animate({ fill: "#FFFFFF", stroke: "#686868" }, 150);
                    } });
//excited
excited.click(function() {excited.toggleClass('on');
                        if (excited.hasClass('on')) {excitedBG.animate({ fill: "#FF6600", stroke: "#686868" }, 150);
                    }else{excitedBG.animate({ fill: "#FFFFFF", stroke: "#686868" }, 150);
                    } });

  


//Finally append the icon to iconDiv in the body
                
				s.append(f);
				});		     
			};
			
			
			
			

function HappyMojs (){
    var ElBbox = document.getElementById("happyBG").getBoundingClientRect();
	console.log(ElBbox);
    var B1 = new mojs.Burst({
        x: ((ElBbox.right - ElBbox.left) / 2) + ElBbox.left,
        y: (ElBbox.bottom - ElBbox.top) / 2 + ElBbox.top,
        radius: {
                0: ElBbox.right - ElBbox.left
            }
        });
}


function JoyMojs (){
    var ElBbox = document.getElementById("joyfulBG").getBoundingClientRect();
	console.log(ElBbox);

moTimeline = new mojs.Timeline(),
			moburst1 = new mojs.Burst({
				// parent: molinkEl,
				duration: 1300,
				shape : 'circle',
				fill : [ '#988ADE', '#DE8AA0', '#8AAEDE', '#8ADEAD', '#DEC58A', '#8AD1DE' ],
				x: ((ElBbox.right - ElBbox.left) / 2) + ElBbox.left,
				y: ((ElBbox.bottom - ElBbox.top) / 2 + ElBbox.top)+(((ElBbox.bottom - ElBbox.top) / 2 + ElBbox.top)*-.3),
				radius: {0:60},
				count: 6,
				// isRunLess: true,
				easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
			})
			,
			moburst2 = new mojs.Burst({
				// parent: molinkEl,
				duration: 1600,
				delay: 100,
				shape : 'circle',
				fill : [ '#988ADE', '#DE8AA0', '#8AAEDE', '#8ADEAD', '#DEC58A', '#8AD1DE' ],
				x: (((ElBbox.right - ElBbox.left) / 2) + ElBbox.left)+((((ElBbox.right - ElBbox.left) / 2) + ElBbox.left)*-.7),
				y: ((ElBbox.bottom - ElBbox.top) / 2 + ElBbox.top)+(((ElBbox.bottom - ElBbox.top) / 2 + ElBbox.top)*-.2),
				radius: {0:80},
				count: 14,
				isRunLess: true,
				easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
			})
			,
			moburst3 = new mojs.Burst({
				// parent: molinkEl,
				duration: 1500,
				delay: 200,
				shape : 'circle',
				fill : [ '#988ADE', '#DE8AA0', '#8AAEDE', '#8ADEAD', '#DEC58A', '#8AD1DE' ],
				x: (((ElBbox.right - ElBbox.left) / 2) + ElBbox.left)+((((ElBbox.right - ElBbox.left) / 2) + ElBbox.left)*1),
				y: ((ElBbox.bottom - ElBbox.top) / 2 + ElBbox.top)+(((ElBbox.bottom - ElBbox.top) / 2 + ElBbox.top)*-.2),
				radius: {0:90},
				count: 8,
				isRunLess: true,
				easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
			}),
			moburst4 = new mojs.Burst({
				// parent: molinkEl,
				duration: 2000,
				delay: 300,
				shape : 'circle',
				fill : [ '#988ADE', '#DE8AA0', '#8AAEDE', '#8ADEAD', '#DEC58A', '#8AD1DE' ],
				x: (((ElBbox.right - ElBbox.left) / 2) + ElBbox.left)+((((ElBbox.right - ElBbox.left) / 2) + ElBbox.left)*-.2),
				y: ((ElBbox.bottom - ElBbox.top) / 2 + ElBbox.top)+(((ElBbox.bottom - ElBbox.top) / 2 + ElBbox.top)*-6),
				radius: {0:60},
				count: 14,
				isRunLess: true,
				easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
			}),
			moburst5 = new mojs.Burst({
				// parent: molinkEl,
				duration: 1400,
				delay: 400,
				shape : 'circle',
				fill : [ '#988ADE', '#DE8AA0', '#8AAEDE', '#8ADEAD', '#DEC58A', '#8AD1DE' ],
				x: (((ElBbox.right - ElBbox.left) / 2) + ElBbox.left)+((((ElBbox.right - ElBbox.left) / 2) + ElBbox.left)*.3),
				y: ((ElBbox.bottom - ElBbox.top) / 2 + ElBbox.top)+(((ElBbox.bottom - ElBbox.top) / 2 + ElBbox.top)*-.4),
				radius: {0:60},
				count: 12,
				isRunLess: true,
				easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
			});

		moTimeline.add(moburst1, moburst2, moburst3, moburst4, moburst5);
		moTimeline.start();
}
 