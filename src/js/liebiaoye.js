$(function(){
    var now1 = 0;
    var ul = document.querySelector('.liebiaoright-m ul');
    var b = document.querySelector('.liebiaoright-b b');
    // var span = document.querySelector('.liebiaoright-b span');
    // console.log(ul);
    var w = $('#lunbo div').css('width');
    var iw = w.split('p')[0];
    // console.log(iw);
    var lunbo = getid('lunbo');
    var jiaodian = document.querySelectorAll('#jiaodian span');
    var iw = (w.split('p'))[0];
    // console.log(jiaodian);
    /*--------自动轮播----------- */
    var now = 0;
    $timer  =null;
    function zdlunbo(){
        clearInterval($timer);
         $timer = setInterval(function(){
            now++;
            if(now>=3){
                now = 0; 
            }
            startMove(lunbo,{'left':-now*iw});
            $('#jiaodian span').eq(now).addClass('act');
            $('#jiaodian span').eq(now).siblings().removeClass('act');
        },2000);
    }
   zdlunbo();
   /*--------鼠标经过停止轮播----------- */
   $('#lunboBox').hover(function(){
    clearInterval($timer);
   },function(){
    zdlunbo();
   });
    /*--------点击焦点轮播----------- */
    $('#jiaodian span').click(function(){
        $(this).addClass('act');
        $(this).siblings().removeClass('act');
        startMove(lunbo,{'left':-($(this).index())*iw});
    });
   /*--------数据渲染部分----------- */
   $.ajax({
       url:'../api/getdata.php',
       type:'get',
       data:{
        page:'1',
        qty:'8'
       },
       success:function(str){
            dom(str);
       }
   });

    function dom(str1){
        var total = JSON.parse(str1).total;
        var qty = JSON.parse(str1).qty;
        var pages = Math.ceil((total/qty));
        var arr = JSON.parse(str1).datalist;
        var len = arr.length;
        b.innerHTML = '共'+total+'条记录';
        //渲染数据
        xuanran(len,arr);//调用渲染节点函数
        // console.log(pages);
        //创建页码数量与点击事件
        var html = '';
        for( var i = 1;i<=pages; i++ ){
           html+= `<a href="#" onclick="return false">${i}</a>`;
            // $('.prev').after(a);
        }
        $('.pages').html(html);
        $('.liebiaoright-b a').eq(0).addClass('selected');
        //焦点点击事件
        $('.liebiaoright-b a').click(function(){
            $(this).addClass('selected');
            $(this).siblings().removeClass('selected');
            now1 = $(this).text()-1;
            $.ajax({
                url:'../api/getdata.php',
                type:'get',
                data:{
                    page:$(this).text(),
                    qty:'8',
                },
                success:function(str){
                    // console.log(JSON.parse(str));
                    var arr = JSON.parse(str).datalist;
                    var len = arr.length;
                    xuanran(len,arr);
                }
            });
        });
        
    }
    // 渲染节点函数
    function xuanran(len,data){
        var html = '';
        for(var i = 0;i<len;i++){
            html += `<li data-id = ${data[i].id}>
                    <img class="imgurl" src="../images/${data[i].urlimg}" alt="图片出错啦！">
                    <a href="#" class=biaoti>${data[i].title}</a>
                    <div>￥<span class="div-price">${data[i].price}</span></div>
                    <p>已有${data[i].pingjia}人评价</p>
                    <span>
                        <a href="#" onclick = "return false" class="jiaru">加入购物车</a>
                        <a href="#" class="guanzhu">关注</a>
                    </span>
                </li>`;
        }
        ul.innerHTML = html;
    }

    //点击上一页
    $('.prev').click(function(){
        // console.log(now1);
        if(now1==3){
            now1 = 2;
        }
        now1--;
        if(now1 < 0){
            now1 = 0;
        }else{
            $.ajax({
                url:'../api/getdata.php',
                type:'get',
                data:{
                    page:now1+1,
                    qty:'8',
                },
                success:function(str){
                    var arr = JSON.parse(str).datalist;
                    var len = arr.length;
                    xuanran(len,arr);
                }
            });   
        }
        $('.pages a').eq(now1).siblings().removeClass('selected');
        $('.pages a').eq(now1).addClass('selected');
       
    });
    //点击下一页
    $('.next').click(function(){
        if(now1==0){
            now1 = 1;
        }
        now1++;
        if(now1 > 3){
            now1 = 3;
        }else{
            $.ajax({
                url:'../api/getdata.php',
                type:'get',
                data:{
                    page:now1,
                    qty:'8',
                },
                success:function(str){
                    var arr = JSON.parse(str).datalist;
                    var len = arr.length;
                    xuanran(len,arr);
                }
            });   
        }
        $('.pages a').eq(now1-1).siblings().removeClass('selected');
        $('.pages a').eq(now1-1).addClass('selected');
       
       
    });

    //点击跳转
    $('.liebiaoright-m ul').on('click','img',function(){
        // console.log(this.parentNode.dataset.id);
        var id = this.parentNode.dataset.id;
        window.open('xiangqingye.html?id='+id);
    });

    $('.liebiaoright-t li').click(function(){
        $(this).siblings().removeClass('paixu-act');
        $(this).addClass('paixu-act');

    });
    //价格排序
    $('.paixu').click(function(){
        console.log(now1);
        $.ajax({
            url:'../api/priceSort.php',
            type:'get',
            data:{
            page:now1+1, 
            qty:'8', 
            sort:'0',
            },
            success:function(str){
                // console.log(JSON.parse(str));
                var arr = JSON.parse(str);
                var len = arr.length;
                xuanran(len,arr);
            }
        });
    });

    //加入购物车
    // $('.jiaru').c;
    $('.liebiaoright-m').on('click','.jiaru',function(){
        var id = $(this).parent().parent().attr('data-id');
        var imgurl = $('.imgurl').attr('src');
        var title = $('.biaoti').eq($(this).index()).text();
        var price = $('.div-price').eq($(this).index()).text();
        // console.log(price);
        $.ajax({
            url:'../api/ShopCart.php',
            type:'get',
            data:{
                can:'add',
                id:id,
                title:title,
                price:price,
                img:imgurl,
                num:1,
            },
            success:function(str){
                if(str.trim()=='yes'){
                    alert('加入购物车成功！');
                    // window.open('ShopCart.html');
                }else{
                    alert('加入购物车失败！');
                }
            }
        });
        
    });


    //点击我的购物车
    $('.mycart').click(function(){
        window.open('ShopCart.html');
    });
});