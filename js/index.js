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
                    thoughfulBG = feelings.select("#thoughfulBG");
                    guiltyBG = feelings.select("#guiltyBG");
                    ashamedBG = feelings.select("#ashamedBG");

                    
//Assign groups to var names
                    happy = feelings.select("#happy");
                    sad = feelings.select("#sad");
                    lonely = feelings.select("#lonely");
                    bored = feelings.select("#bored");
                    confident = feelings.select("#confident");
                    joyful = feelings.select("#joyful");    
                    discouraged = feelings.select("#discouraged");
                    thoughful = feelings.select("#thoughful");
                    guilty = feelings.select("#guilty");
                    ashamed = feelings.select("#ashamed");

//Happy 1,1
                    happy.click(function() {
                        happy.toggleClass('on');
                        if (happy.hasClass('on')) {
						happyBG.animate({ fill: "#FF6600", stroke: "#686868" }, 150);
                    }else{
                        happyBG.animate({ fill: "#FFFFFF", stroke: "#686868" }, 150);
                    }
});
//Sad 1,2
                    sad.click(function() {
                        sad.toggleClass('on');
                        if (sad.hasClass('on')) {
						sadBG.animate({ fill: "#0000FF", stroke: "#686868" }, 150);
                    }else{
                        sadBG.animate({ fill: "#FFFFFF", stroke: "#686868" }, 150);
                    }
});
//lonely 1,3
                    lonely.click(function() {
                        lonely.toggleClass('on');
                        if (lonely.hasClass('on')) {
						lonelyBG.animate({ fill: "#0000FF", stroke: "#686868" }, 150);
                    }else{
                        lonelyBG.animate({ fill: "#FFFFFF", stroke: "#686868" }, 150);
                    }
});   
//Bored 1,4
                    bored.click(function() {
                        bored.toggleClass('on');
                        if (bored.hasClass('on')) {
						boredBG.animate({ fill: "#66FF00", stroke: "#686868" }, 150);
                    }else{
                        boredBG.animate({ fill: "#FFFFFF", stroke: "#686868" }, 150);
                    }
}); 
//confident 1,5   
                    confident.click(function() {
                    confident.toggleClass('on');
                        if (confident.hasClass('on')) {
						confidentBG.animate({ fill: "#FF6600", stroke: "#686868" }, 150);
                    }else{
                        confidentBG.animate({ fill: "#FFFFFF", stroke: "#686868" }, 150);
                    }
});                     
//joyful
                    joyful.click(function() {
                    joyful.toggleClass('on');
                        if (joyful.hasClass('on')) {
                            joyfulBG.animate({ fill: "#FF6600", stroke: "#686868" }, 150);
                    }else{
                        joyfulBG.animate({ fill: "#FFFFFF", stroke: "#686868" }, 150);
                    }
                    });  
//discouraged
discouraged.click(function() {discouraged.toggleClass('on');
                        if (discouraged.hasClass('on')) {discouragedBG.animate({ 
                            fill: "#FF6600", stroke: "#686868" }, 150);
                    }else{discouragedBG.animate({ fill: "#FFFFFF", stroke: "#686868" }, 150);
                    }
});  
/*//thoughful

thoughful.click(function() {thoughful.toggleClass('on');
                        if (thoughful.hasClass('on')) {thoughfulBG.animate({ fill: "#FF6600", stroke: "#686868" }, 150);
                    }else{thoughfulBG.animate({ fill: "#FFFFFF", stroke: "#686868" }, 150);
                    }
});*/  
//guilty
guilty.click(function() {guilty.toggleClass('on');
                        if (guilty.hasClass('on')) {guiltyBG.animate({ fill: "#FF6600", stroke: "#686868" }, 150);
                    }else{guiltyBG.animate({ fill: "#FFFFFF", stroke: "#686868" }, 150);
                    }
});  
//ashamed
ashamed.click(function() {ashamed.toggleClass('on');
                        if (ashamed.hasClass('on')) {ashamedBG.animate({ fill: "#FF6600", stroke: "#686868" }, 150);
                    }else{ashamedBG.animate({ fill: "#FFFFFF", stroke: "#686868" }, 150);
                    }
                    });  


//Finally append the icon to iconDiv in the body
                
				s.append(f);
				});		     
			};