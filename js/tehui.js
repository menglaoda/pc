$(function(){

    var $da_tehui = $(".da_tehui");
	var $pinpai = $(".pinpai");
	$.ajax({
		
		dataType:"json",
		url:"js/tehui.json",
		
		success:function(res){
			console.log(res);
			
			
			$.each(res, function(idx,ietm) {
				
				var $box = $("<div></div>");
			    var $box_1= $("<div></div>");
			    var $box_2= $("<div></div>");
			    var $box_2_1 = $("<div></div>");
			    $box.addClass("tehui");
			    $box_1.addClass("tehui_1");
			    $box_2.addClass("tehui_2");
			    $box_2_1.addClass("dianji");
			    
			    var $img= $("<img />").attr("src","img/dynamic/dianji.png");
			    $img.load(function(){
			    	
			    	var $imga=$("<a></a>");
			    	$imga.attr("href","html/liebiao.html");
			    	$img.appendTo($imga);
			    	$imga.appendTo($box_2_1);
				    $("<img />").attr("src",ietm.src).addClass("tehui_img").appendTo($box_1);
				    $("<span/>").html(ietm.name).addClass("tehui_2_span").appendTo($box_2);
		            $("<p/>").html(ietm.introduce).appendTo($box_2);
		            $("<span/>").html(ietm.price).addClass("tehui_2_price").appendTo($box_2);
		            
		            $box_2_1.appendTo($box_2);
		            $box_1.appendTo($box);
		            $box_2.appendTo($box);
		            $box.appendTo($da_tehui);
		            
			    });
//			 
			});
			
		}
		
	});

	
});
