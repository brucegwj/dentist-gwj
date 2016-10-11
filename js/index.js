/**
 * Created by Administrator on 2016/10/2.
 */
$(function () {
    //header²¿·Ö
    $('.navigation ul li:has(div)').hover(function () {
        $(this).find('div:first').stop(true,true).slideDown('fast');
        $(this).children('a').addClass('hover');
    },function () {
        $(this).children('div:first').stop(true,true).slideUp('fast');
        $(this).children('a').removeClass('hover');
    });


   //ÂÖ²¥Í¼
   // var w=$('#Indexbaner').width();
   // var index=$('#Indexbaner li').index();
   // console.log(index);
    var index=-1;
    var timer=setInterval(function () {
        index++;
        if(index===4){
            index=0;
        }
        $('#Indexbaner li').eq(index).fadeIn().siblings().fadeOut();
    },3000);
    //Ð¡ÂÖ²¥Í¼µã»÷
    //var index2= 0,pic;
    //$('.indexscrolltxt a:nth-child(1)').click(function () {
    //    var w=154;
    //    index2++;
    //    pic=index2;
    //    if(index2===2){
    //        index2=0;
    //    }
    //    $('.indexscrolltxt div ul').css('left',-w*index2);
    //});

    //×ª»»li±êÇ©Ë³Ðò
    var ret=[];
    var lis=$('.indexscrolltxt div ul li');
    var ul=$('.indexscrolltxt div ul');
    for(var i=0;i<lis.length;i++){
        ret.push(lis[i]);
    }
    //var num= 0,pic;
    $('.indexscrolltxt a:nth-child(1)').click(function () {
        $('.indexScrollCon ul li').eq(2).addClass('active');
        $('.indexScrollCon ul li').eq(2).siblings().removeClass('active');
            //ºËÐÄµã
        ret.push(ret.shift());
            ul.html(ret);
            $('.indexscrolltxt div ul').css({'left':-154,'transition-duration':'1s'});
        //Êó±êÐü¸¡
        $('.indexScrollCon ul li').mouseover(function () {
            $(this).addClass('active');
            $(this).siblings().removeClass('active');
        });
    });
    $('.indexscrolltxt a:nth-child(3)').click(function () {
        $('.indexScrollCon ul li').eq(5).addClass('active');
        $('.indexScrollCon ul li').eq(5).siblings().removeClass('active');
        ret.unshift(ret.pop());
        ul.html(ret);
        $('.indexscrolltxt div ul').css('left',-154);
        //Êó±êÐü¸¡
        $('.indexScrollCon ul li').mouseover(function () {
            $(this).addClass('active');
            $(this).siblings().removeClass('active');
        });
    });
    //Êó±êÐü¸¡
    $('.indexScrollCon ul li').mouseover(function () {
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    });
});
