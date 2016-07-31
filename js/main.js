
//Run script right away
			window.onload = function () {
//We'll be appending the icon to this DIV later
            	var s = Snap("#iconDiv");
//Have Snap load the SVG file
				Snap.load("img/herbyH.svg", function(f) {
				f.select("#path4177").attr({fill: "#FF0000"});    
//Finally append the icon to iconDiv in the body
    g = f.select("g");
    s.append(g);
    // Making croc draggable. Go ahead drag it around!
    g.animate({ fill: "#1ed760", stroke: "#1ed760"}, 200);
   // g.drag();
    
    s.click(function() {
  g.toggleClass('on');
  if (circle.hasClass('on')) {
    g.animate({ cx: 47, fill: "#fff"}, 150);
    g.animate({ fill: "#1ed760", stroke: "#1ed760"}, 200);
  } else {
    g.animate({ cx: 17, fill: "#DADADA" }, 200);
    g.animate({ fill: "#000", stroke: "#686868" }, 150);
  }
});
			
        
				});		     
			};
		
