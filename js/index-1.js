//Run script right away
			window.onload = function () {
//We'll be appending the icon to this DIV later
            	var s = Snap("#poster");
//Have Snap load the SVG file
				Snap.load("img/icon.svg", function(f) {
//Assign the var names
                    whiteRect = f.select("#whiteRect");
                    blueRect = f.select("#blueRect");
//Assign groups to var names
                    icon = f.select("#icon");
//Happy 1,1
                    icon.click(function() {
                        icon.toggleClass('on');
                        if (icon.hasClass('on')) {
						whiteRect.animate({y:960}, 500, mina.elastic);
						whiteRect.animate({ fill: "#FF0000", stroke: "#686868" }, 150);
						blueRect.animate({ fill: "#0000FF", stroke: "#686868" }, 150);
                    }else{
                        //And return to original position when not hovered over
                        whiteRect.animate({y:977.36218}, 500, mina.elastic);
                        whiteRect.animate({ fill: "#0000FF", stroke: "#686868" }, 150);
                        blueRect.animate({ fill: "#FF0000", stroke: "#686868" }, 150);
                    }
});
                    
//Finally append the icon to iconDiv in the body
				s.append(f);
				});		     
			};