//Run script right away
			window.onload = function () {
//We'll be appending the icon to this DIV later
            	var s = Snap("#poster");
//Have Snap load the SVG file
				Snap.load("img/poster_SVG.svg", function(f) {
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


//happy
happy.click(function() {happy.toggleClass('on');
                        if (happy.hasClass('on')) {happyBG.animate({ fill: "#FF6600", stroke: "#686868" }, 150);
                    }else{happyBG.animate({ fill: "#FFFFFF", stroke: "#686868" }, 150);
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
                        if (joyful.hasClass('on')) {joyfulBG.animate({ fill: "#FF6600", stroke: "#686868" }, 150);
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