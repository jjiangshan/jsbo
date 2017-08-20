$(document).ready(function(){
	var src;
	var $a=$("#images").parent().siblings().children("img").add("img[id='images']");
	//alert($a.length);
	$a.mouseover(function(e){
		src=this.src;
		this.src=src;
		var $div=$("<div class='mytooltip'><img src='"+src+"'/></div>");
		$("body").append($div);
$(".mytooltip").css({
				"top" : e.pageY + y + "px",
				"left" : e.pageX + x + "px"
			}).show(1000);

		
	}).mouseout(function(){
		this.src=src;
		$(".mytooltip").remove();
	}).mouseleave(function(e){
		$(".mytooltip").css({
				"top" : e.pageY + y + "px",
				"left" : e.pageX + x + "px"
			}).show(1000);
	});
});
