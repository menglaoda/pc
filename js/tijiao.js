$(function(){
		onload = function(){
				var zongjia = document.getElementById("zongjia");//总价
				var bb = document.getElementById("shuliang");//加减里的数量
				var zongjia1 = getCookie("name3");
				var shuliang1 = getCookie("name6");
				zongjia.innerHTML = zongjia1;
				shuliang.innerHTML = shuliang1;
				console.log(shuliang1);
				
				
			}
		var aa; 
		var $gouwu = $(".gouwu");
		if(getCookie("cookie1")){
			aa=JSON.parse(getCookie("cookie1"));
		
	    console.log(aa);
	    $.each(aa, function(idx,ietm){
	    	var $box = $("<div></div>");
	    	var $ul = $("<ul></ul>");
	    	var $li1 = $("<li></li>");
	    	var $li2 = $("<li></li>");
	    	var $li3 = $("<li></li>");
	    	var $li4 = $("<li></li>");
	    	var $img = $("<img />");
	    	$box.addClass("gouwu_1_2box");
	    	$ul.addClass("gouwu_1_2ul");
	    	$li1.addClass("gouwu_1_2li");
	    	$li2.addClass("gouwu_1_2li");
	    	$li3.addClass("gouwu_1_2li");
	    	$li4.addClass("gouwu_1_2li");
	    	$img.attr("src",ietm.imgsrc).addClass("gouwu_1_2_1img").appendTo($box);
	    	
	    	$li1.html(ietm.title).appendTo($ul);
	    	$li2.html(ietm.price).appendTo($ul);
	    	$li3.html(ietm.price2).appendTo($ul);
	    	$li4.html("删除").appendTo($ul);
	    	$ul.appendTo($box);
	    	$box.appendTo($gouwu);
	    	
	    	$li4.on("click",function(){
	    		//$(this).closest($box).hide();
	    		removeCookie("cookie1");
	    		console.log("删除");
	    	});
	    });
	   }
});
