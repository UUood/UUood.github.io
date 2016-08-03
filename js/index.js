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
//Assign groups to var names
                    happy = feelings.select("#happy");
                    sad = feelings.select("#sad");
                    lonely = feelings.select("#lonely");
                    bored = feelings.select("#bored");
                    confident = feelings.select("#confident");
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
//Finally append the icon to iconDiv in the body
                
				s.append(f);
				});		     
			};