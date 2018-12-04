$(function(){
    var val = 1;
    var ul = document.querySelector('.small-imgs-content ul');
    var ul2 = document.querySelector('.xianqing-right-bot ul');
    var ID = (location.search).trim().slice(1);
    ID = ID.split('=')[1];
    // console.log(id);
    $.ajax({
        url:'../api/SelectById.php',
        type:'get',
        data:{
            id:ID
        },
        success:function(str){
            // console.log(JSON.parse(str));
            var title = JSON.parse(str)[0].title;
            var price = JSON.parse(str)[0].price;
            $('.sptitle').html(title);
            $('.price').html(price);
        }
    });
    //图片选项卡
    $('.small-imgs-content ul li').hover(function(){
        var index = $(this).index()+1;//放大图的下标
        var url = '../images/Big'+index+'.jpg';
        $(this).addClass("img-hover").siblings().removeClass("img-hover");
        // console.log($(this).index());
        $('.big-img div').eq($(this).index()).addClass('selected').siblings().removeClass('selected');
        $('.fangda img').eq(0).attr('src',url);
       
    },function(){

    });

   //点击切换图标
    $('.nextimg').click(function(){
        startMove(ul,{'left':-62});
    });
    $('.previmg').click(function(){
        startMove(ul,{'left':0});
    });

    //移动放大
    $('.big-img ').mousemove(function(e){
        var e = e || window.event;
        var x = e.clientX - $('.big-img').offset().left - 119;
        var y = e.clientY - $('.big-img').offset().top + 119;
    //    console.log(e.offsetY);
        $('.fangdajing').css('display', 'block');
        $('.fangda').css('display', 'block'); 
        if(x<0){
            x = 0;
        }
        if(y<0){
            y = 0;
        }
        if(x>($('.big-img').width()-$('.fangdajing').width())){
            x = ($('.big-img').width()-$('.fangdajing').width());
        }
        if(y>($('.big-img').height()-$('.fangdajing').height())){
            y = ($('.big-img').height()-$('.fangdajing').height());
        }
        $('.fangdajing').css('left', x + 'px');
        $('.fangdajing').css('top', y + 'px');
       
        $('.fangda img').eq(0).css('left',-1*x + 'px');
        $('.fangda img').eq(0).css('top',-2*y + 'px');
    });
    $('.big-img ').mouseout(
        function(){
            $('.fangdajing').css('left', 0 + 'px');
            $('.fangdajing').css('top', 0 + 'px');
            $('.fangdajing').css('display', 'none');
            $('.fangda').css('display', 'none');
        }
    );
    //点击展开左边菜单
   $('#dls dl i').click(function(){
    $(this).parent().siblings().toggle();
    $(this).toggleClass('hide');
   });
   //热门点击切换
   $('#remen>ul li').click(function(){
    $(this).addClass('act');
    $(this).siblings().removeClass('act');
   });

   $('.qiehuan1').click(function(){
    startMove(ul2,{'top':0});
   });
   $('.qiehuan2').click(function(){
    startMove(ul2,{'top':-590});
   });


   $('.w-right-t ul li').click(function(){
    $(this).siblings().removeClass('li-act');
    $(this).addClass('li-act');
    console.log($(this).index());
    $('.w-right-b .qie1').eq($(this).index()).css('display','block');
    $('.w-right-b .qie1').eq($(this).index()).siblings().css('display','none');
   });

    //点击增加、减少商品数量
    $('.jia').click(function(){
        val++;
        if(val>10){
            val = 10;
        }
        $('.add input').attr('value',val);
        var price = $('.price').text();
        var allprice =( price*val)*1;
        fenqi(allprice);//调用分期函数
    });
   
    $('.jian').click(function(){
        val--;
        if(val<1){
            val = 1;
        }else{
            $('.add input').attr('value',val);
        }
        var price = $('.price').text();
        var allprice =( price*val)*1;
        fenqi(allprice);//调用分期函数
    });

    //计算每月分期函数
    function fenqi(str){
        $('.three a').html('￥'+(str/3).toFixed(2)+'起×3期');
        $('.three span').html('含手续费，费率0.5%起，'+'￥'+(str/3).toFixed(2)+'起×3期');
        $('.six a').html('￥'+(str/6).toFixed(2)+'起×6期');
        $('.six span').html('含手续费，费率0.5%起，'+'￥'+(str/6).toFixed(2)+'起×6期');
        $('.bannian a').html('￥'+(str/12).toFixed(2)+'起×12期');
        $('.bannian span').html('含手续费，费率0.5%起，'+'￥'+(str/12).toFixed(2)+'起×12期');
        $('.yinian a').html('￥'+(str/24).toFixed(2)+'起×24期');
        $('.yinian span').html('含手续费，费率0.5%起，'+'￥'+(str/24).toFixed(2)+'起×24期');
    }

    //点击加入购物车
    $('.addgo').click(function(){
        var Id = location.search.slice(1).split('=')[1];
        var urlimg = $('.selected img').attr('src');
        var sptitle = $('.sptitle').text();
        var price = $('.price').text();
        var value = $('.add input').attr('value');
        // console.log(id);
        $.ajax({
            url:'../api/ShopCart.php',
            type:'get',
            data:{
                can:'add',
                id:Id,
                img:urlimg,
                title:sptitle,
                price:price,
                num:value
            },
            success:function(str){
                console.log(str);
                var res = str.trim();
                if(res == 'yes'){
                    alert('成功加入购物车！');
                }else{
                    alert('加入购车失败了！');
                }
            }
        });
    });

    //点击我的购物车跳转到我的购物车
    $('.mycart').click(function(){
        window.open('ShopCart.html');
    });
});