/**
 * Created by admin on 2016-03-12.
 */
//$(document).ready(function(){})
$(function(){
//    手动控制轮播
    $("#content .content01 .banner .topbanner .img li").first().show();
    $("#content .content01 .banner .topbanner .num li").mouseover(function(){
        $(this).addClass("#content .content01 .banner .topbanner .num active").siblings().removeClass("active");
        var index=$(this).index();
        $("#content .content01 .banner .topbanner .img li").eq(index).fadeIn().siblings().fadeOut();
    })

//    自动控制轮播
    function move(){
            i++;
            if(i==4){
                i=0;
            }
            $("#content .content01 .banner .topbanner .num li").eq(i).addClass("#content .content01 .banner .topbanner .num active").siblings().removeClass("active");
            $("#content .content01 .banner .topbanner .img li").eq(i).fadeIn().siblings().fadeOut();
    }
    function movel(){
        i--;
        if(i==-1){
            i=3;
        }
        $("#content .content01 .banner .topbanner .num li").eq(i).addClass("#content .content01 .banner .topbanner .num active").siblings().removeClass("active");
        $("#content .content01 .banner .topbanner .img li").eq(i).fadeIn().siblings().fadeOut();
    }
    var i=0;
    var time=setInterval(move,2000);

    $("#content .content01 .banner .topbanner").hover(function(){
        clearInterval(time)
    },
        function(){time=setInterval(move,2000)
    })

    $("#content .content01 .banner .topbanner .left").click(function(){
        movel()
    })
    $("#content .content01 .banner .topbanner .right").click(function(){
        move()
    })
})