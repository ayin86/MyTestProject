$(function(){
	
	
})
$(window).load(function(){
	$.timer.set("windowHeight",function(){
		if($(window).height()>$("body").height()){
			$(".ui-footer").addClass("ui-footer-fixed");
		}
	},1000)
})
