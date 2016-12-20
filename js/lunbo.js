$(function(){
	var $img = $(".lunbo").find("img");//获取轮播下的图片
    var $span = $(".lunbo_shuzi").find("span");//获取轮播下的span
    var $btn1 = $(".lunbo_button_1");//获取轮播图下的左右按钮
    var $btn2 = $(".lunbo_button_2");
    var $imgleft =$img.offset();

	var i=0;  
//	初始化给第一个span添加样式
	$span.eq(0).addClass("span");
	//   初始化按钮1
    $btn1.addClass("button");
       
       //给按钮添加一个事件
    $btn1.on("click",function(){
    	clearInterval(timer);
    	i-=1;
    	$img.eq(i).show();//设置图片显示
    	$(this).addClass("button");//给左右按钮添加样式
    	$btn2.removeClass("button");
    	$span.eq(i).addClass("span");//给当前对应的1,2,3,4,5,6，添加样式
		$span.eq(i).siblings().removeClass("span");
		if(i<0){
			i=5;
			$img.hide();//设置不对应索引下的图片隐藏
			$img.eq(5).show();//设置对应索引下的图片显示
			
		}
    });
    $btn2.on("click",function(){
    	clearInterval(timer);
    	$img.eq(i).hide();//设置当前图片隐藏
    	i+=1;
    	$img.eq(i).show();//设置后一张图片显示
    	$span.eq(i).addClass("span");
		$span.eq(i).siblings().removeClass("span");
    	$(this).addClass("button");
    	$btn1.removeClass("button");
    	if(i>5){
    		i=0;
    		// 给第一个span添加样式，同时去掉最后一个span的样式
            $span.eq(0).addClass("span");
            $span.eq(5).removeClass("span");
            $img.show();//把隐藏的图片显示出来
    	}
    });
	 timer = setInterval(function(){	
		
		$img.eq(i).hide();//设置图片隐藏
		i+=1;
		if(i%2==0){
			$btn1.addClass("button");
			$btn2.removeClass("button");
		}else{
			$btn2.addClass("button");
			$btn1.removeClass("button");
		}
		$span.eq(i).addClass("span");
		$span.eq(i).siblings().removeClass("span");
		
		if(i>5){
			i=0;
//			$img.eq(0).show();
//          给第一个span添加样式，同时去掉最后一个span的样式
            $span.eq(0).addClass("span");
            $span.eq(5).removeClass("span");
			$img.show();//把隐藏的图片显示出来
		}
		
	},2000);
	
	var $lunbo_2_ul = $(".lunbo_2 ul");//获取第二个轮播图的ul
	var j=0;
	var time = setInterval(function(){//设置第二个定时器
		$lunbo_2_ul.eq(j).hide();
		j++;
		if(j>1){
			j=0;
			$lunbo_2_ul.show();
		}
	},3000);
	
});
