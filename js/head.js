$(function(){
      $headli = $(".head li");
      $headli.eq(0).addClass("headli_1");
      //点击母婴之家时，添加样式
      $headli.on("click",function(){  
           $(this).addClass("headli_1");
           $(this).siblings("li").removeClass("headli_1");
      });
      //鼠标划过手机版是小图标的动画效果
      $headli.eq(2).on("mouseenter",function(){
           $(this).addClass("headli");
           $(this).find("img").animate({"top":"-25px"},100);
           console.log("a");
      });
      //鼠标离开手机版小图标时的动画效果
      $headli.eq(2).on("mouseleave",function(){
           $(this).removeClass("headli");
           $(this).find("img").animate({"top":"15px"},100);
           console.log("b");
      });
      //小喇叭警示语动画，用一个定时器
      $tail_2_span = $(".tail_2 span");
      var timer = setInterval(function(){
         $tail_2_span.animate({"top":"-20px"},function(){
              $tail_2_span.animate({"top":"10px"});
              
          });
      
      },1000);
     //鼠标划过一级菜单时触发的事件
     var $tail_1_li = $(".tail_1 li");//获取一级菜单下的li
     var $tail_liebiao =$(".tail_liebiao");//获取全部商品分类下的二级菜单的盒子
     var $tail_liebiao_1 =$(".tail_liebiao_1");//获取全部商品分类下的第一个三级菜单的盒子//
     var $tail_liebiao_2 =$(".tail_liebiao_2");//获取全部商品分类下的第二个三级菜单的盒子//
     var $tail_1_4 =$(".tail_1_4");//获取直邮专区下的二级菜单的盒子
     //鼠标划过直邮专区时触发的事件
     $tail_1_li.eq(3).on("mouseenter",function(){
     	     $tail_1_4.show();//它的二级菜单显示
     	     $tail_1_4.on("mouseenter",function(){
     	     	    $(this).show();
     	     });
     	      $tail_1_4.on("mouseleave",function(){
     	     	    $(this).hide();
     	     });
     });
     $tail_1_li.eq(3).on("mouseleave",function(){
     	     $tail_1_4.hide();//它的二级菜单隐藏
     });
     
     //鼠标划过全部商品分类时触发的事件
     $tail_1_li.eq(0).on("mouseenter",function(){
     	     $tail_liebiao.show();//它的二级菜单显示
     });
      $tail_1_li.eq(0).on("mouseleave",function(){
     	     $tail_liebiao.hide();
     });
     $tail_liebiao.on("mouseenter",function(){//鼠标划过二级菜单时发生的事件
     	    $(this).show();
     	    //鼠标划过二级菜单下的li时触发的事件，添加一个样式
     	    $(this).find("li").on("mouseenter",function(){
     	    	  $(this).addClass("borderred");
     	    	  
     	    	  
     	    });
     	    $(this).find("li").on("mouseleave",function(){
     	    	  $(this).removeClass("borderred");
     	    });
     	    
     	    
     	    //鼠标划过二级菜单下的第一个（li）时发生的事件
     	    $(this).find("li").eq(0).on("mouseenter",function(){
     	    	  
     	    	   $tail_liebiao_1.show();//第一个三级菜单显示
     	    	   $tail_liebiao_1.on("mouseenter",function(){
     	    	   	     $tail_liebiao.show();
     	    	   	     $(this).show(); 
     	    	   });
     	    	   $tail_liebiao_1.on("mouseleave",function(){
     	    	   	     $(this).hide(); 
     	    	   	     $tail_liebiao.hide();
     	    	   });
     	    });
     	     $(this).find("li").eq(0).on("mouseleave",function(){//鼠标离开二级菜单下的第一个（li）时发生的事件
     	        
     	         $tail_liebiao_1.hide();//第一个三级菜单隐藏
     	    
     	    });
     	  
     	  $(this).find("li").eq(1).on("mouseenter",function(){//鼠标划过二级菜单下的第二个（li）时发生的事件
     	  	    
     	        $tail_liebiao_2.show();//第二个三级菜单显示
     	        $tail_liebiao_2.on("mouseenter",function(){//鼠标划过第二个三级菜单发生的事件
     	    	   	     $(this).show(); 
     	    	   	     $tail_liebiao.show();
     	    	   });
     	    	  $tail_liebiao_2.on("mouseleave",function(){
     	    	   	     $(this).hide(); 
     	    	   	     $tail_liebiao.hide();
     	    	   });
     	  });
     	  $(this).find("li").eq(1).on("mouseleave",function(){//鼠标离开二级菜单下的第二个（li）时发生的事件
     	  	     
     	         $tail_liebiao_2.hide();//第二个三级菜单隐藏
     	    
     	    });
     });
     	    
     	    
     $tail_liebiao.on("mouseleave",function(){//鼠标离开二级菜单时触发的事件
     	     $(this).hide();
     	     $(this).find("li").eq(0).on("mouseleave",function(){
     	    	   $tail_liebiao_1.hide();
     	    });
     });
     //左边广告事件
     var _top = $(".advertising").offset().top;
     $(window).scroll(function(){
     	   var scrollTop = $(document).scrollTop();
     	   if(scrollTop<=_top){
     	   	   $(".advertising").hide();
     	   }else {
     	   	   $(".advertising").show();
     	   }
     });
     
     var $spanbtn = $(".advertising span");
     $spanbtn.click(function(){
     	    $(".advertising").hide();
     });
    //右边广告事件
    var $advertising_2_1 =$(".advertising_2_1 img");
    $advertising_2_1.on("mouseenter",function(){
    	$(".advertising_3").show();
    });
    $advertising_2_1.on("mouseleave",function(){
    	$(".advertising_3").hide();
    });
    
     var $advertising_2_4 =$(".advertising_2_4 img");
    $advertising_2_4.on("mouseenter",function(){
    	$(".advertising_4").show();
    });
    $advertising_2_4.on("mouseleave",function(){
    	$(".advertising_4").hide();
    });
    
     var $advertising_2_5 =$(".advertising_2_5 img");
    $advertising_2_5.on("mouseenter",function(){
    	$(".advertising_5").show();
    });
    $advertising_2_5.on("mouseleave",function(){
    	$(".advertising_5").hide();
    });
    
    var $advertising_2_6 =$(".advertising_2_6 img");
    $advertising_2_6.on("mouseenter",function(){
    	$(".advertising_6").show();
    });
    $advertising_2_6.on("mouseleave",function(){
    	$(".advertising_6").hide();
    });
    $(window).scroll(function(){
    	   var scrollTop = $(document).scrollTop(); 
 //   	   console.log(scrollTop);
    	   $advertising_2_6.on("click",function(){
     	   $(document).scrollTop(0); 
//       $(document).scrollTop().animate({"scrollTop":"0px"},1000);
    	
    	  
    });
    });
   
    
    
});
