/*$(this).mousemove(function( event ) {
	$("#test").move
});
*/

/*
window.onload = initDivMouseOver;
function initDivMouseOver()   {
   var div = document.getElementById("div_links");
   var github = document.getElementById("github_icon");
   var instagram = document.getElementById("instagram_icon");

   div.mouseIsOver = false;

   div.onmouseover = function()   {
      this.mouseIsOver = true;
      $(github).animate({
		  opacity: .5,
		  height: "50%"
	   }, 100, function() {
    	// Animation complete.
  		});
      moveLinkedinOut();
    }
   div.onmouseout = function()   {
      this.mouseIsOver = false;
   }
}

function moveLinkedinOut(){
  var linkedin = document.getElementById("linkedin_icon");
  $(linkedin).animate({top: "-=1000"}, 1000);
  $(linkedin).animate({opacity: .3},100);
}
*/
$(loop);


function loop(){
	var elem = document.getElementById("test");
	var width = screen.width;
	var x = $(elem).position();
	if (x.left > width) {	
		$(elem).css({'left': '-10px	'});
	}
	$(elem).animate({'left': "+=100"},2000,easing:'linear',loop);

}