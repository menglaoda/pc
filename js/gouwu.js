jQuery(function($){
				
				var $fangdaimg = $(".fangdaimg img");//获取大图
				var $fangda_1_2li = $(".fangda_1_2 li");//获取小图的li
				$fangda_1_2li.eq(0).addClass("fangda_1_2li");
				$fangda_1_2li.on("click",function(){//点击Li给小图添加样式
					$(this).addClass("fangda_1_2li");
					$(this).siblings("li").removeClass("fangda_1_2li");
					$fangdaimg.attr("src",$(this).find("img").attr("src"));//改变上方的大图
					console.log($(this).find("img").attr("src"));
				});
				$(".fangdaimg").xzoom({position:"right"});//引用放大镜
				var $fangda_2_1_2_1 = $(".fangda_2_1_2_1");//获取加按钮
				var $fangda_2_1_2_2 = $(".fangda_2_1_2_2");//获取减按钮
				var $fangda_2_1_1 = $(".fangda_2_1_1").find("p");//获取数量
				var $fangda_2_4 = $(".fangda_2_4").find("b");//获取总价格
				var $fangda_2_2 = $(".fangda_2_2");//获取按钮旁边的购物车
				var $advertising_2_2 = $(".advertising_2_2").find("p");//获取右边购物车里的数量
				var i=1;
				
				var num = $fangda_2_4.html();
				//点击加按钮
				var num1=0;
				$fangda_2_1_2_1.on("click",function(){
					i+=1;
					num1=(num*i).toFixed(2);//保留小数点后两位
					$fangda_2_4.html(num1);
					$fangda_2_1_1.html(i);
					
					console.log(num1);
				});
				//点击减按钮
				$fangda_2_1_2_2.on("click",function(){
					if(i>=2){
						i-=1;
						num1=(num*i).toFixed(2);
						$fangda_2_1_1.html(i);
						$fangda_2_4.html(num1);
						
					}
				});
				//点击购物车时，获取当前的数量，同时改变右边购物车的数量
//				$fangda_2_2.on("click",function(){
//					$advertising_2_2.html("("+$fangda_2_1_1.html()+")");
//				});
			});
			