//Run script right away
			window.onload = function () {
//We'll be appending the icon to this DIV later
            	var s = Snap("#iconDiv");
//Have Snap load the SVG file
				Snap.load("img/icon.svg", function(f) {
//Assign the white rectangle
                    whiteRect = f.select("#whiteRect");
//Assign the whole icon group
                    icon = f.select("#icon");
//When the icon is hovered over, have the white rectangle move up slightly with elastic properties
                    icon.click(function() {
                        icon.toggleClass('on');
                        if (icon.hasClass('on')) {
						whiteRect.animate({y:960}, 500, mina.elastic);
						whiteRect.animate({ fill: "#000000", stroke: "#686868" }, 150);
                    }else{
                        //And return to original position when not hovered over
                        whiteRect.animate({y:977.36218}, 500, mina.elastic);
                        whiteRect.animate({ fill: "#ff0000", stroke: "#686868" }, 150);
                    }
});
                    
//Finally append the icon to iconDiv in the body
				s.append(f);
				});		     
			};