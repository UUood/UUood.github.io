
//Run script right away
			window.onload = function () {
//We'll be appending the icon to this DIV later
            	var s = Snap("#iconDiv");
//Have Snap load the SVG file
				Snap.load("img/herbyH.svg", function(f) {
//Finally append the icon to iconDiv in the body
				s.append(f);
				});		     
			};
		
