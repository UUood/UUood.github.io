//Run script right away
			window.onload = function () {
//We'll be appending the icon to this DIV later
            	var s = Snap("#poster");
//Have Snap load the SVG file
				Snap.load("img/poster_SVG.svg", function(f) {
//Assign the var names
                    happyBG = f.select("#happyBG");
                    sadBG = f.select("#sadBG");
//Assign groups to var names
                    happy = f.select("#happy");
                    sad = f.select("#sad")
//Happy 1,1
                    happy.click(function() {
                        happy.toggleClass('on');
                        if (happy.hasClass('on')) {
						happyBG.animate({ fill: "#FFFF00", stroke: "#686868" }, 150);
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
                    
//Finally append the icon to iconDiv in the body
				s.append(f);
				});		     
			};