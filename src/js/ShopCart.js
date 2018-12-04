$(function(){
    //购物车渲染
    $.ajax({
        url:'../api/ShopCart.php',
        type:'get',
        data:{
            can:'select'
        },
        success:function(str){
            // console.log(JSON.parse(str));
            xuanran(str);//调用渲染函数
        }
    });
    //渲染节点函数
    function xuanran(canshu){
        var arr = JSON.parse(canshu);
        var len  = arr.length;
        var html = '';
        for( var i = 0; i < len; i++ ){
            html+=`<li data-id = "${arr[i].id}">
            <div class="check">
                <input type="checkbox" class="checked">
            </div>
            <div class="img-title">
                <div class="img">
                    <img src="${arr[i].urlimg}" alt="图片出错啦">
                </div>
                <div class="title">${arr[i].title}</div>
            </div>
            <div class="kong"></div>
            <div class="prices">￥<span>${arr[i].price}</span></div>
            <div class="TheNum">
                <span class="down">－</span>
                <input type="text" class="num" value="${arr[i].num}">
                <span class="up">＋</span>
            </div>
            <div class="xiaoji">￥${arr[i].price}</div>
            <div class="del"><span class="delspan">删除</span></div>
        </li>`;
        }
        $('.ul1').html(html);
        //判断购物车是否为空，若不为空则结算面板应显示
        if($('.ul1 li').size()>0){
            $('.AllNum').css('display','block');
        }else{
            $('.AllNum').css('display','none');
        }

        //显示购物车有多少条商品
        $('.shopCart-t span').html($('.ul1 li').size());
       
    }

    //增加数量
    $('.ul1').on('click','.up',function(){
        var val = $(this).prev().attr('value');
        var id =  $(this).parent().parent().attr('data-id');
        val++;
        if(val > 10){
            val = 10;
        }else{
            $(this).prev().attr('value',val);
        }
        $.ajax({
            url:'../api/ShopCart.php',
            type:'get',
            data:{
                can:'updata',
                id:id,
                num:val
            }
        });
        var arr = ischecked();
        allNum(arr);
        allprice(arr);
    });
    //点击减少数量
    $('.ul1').on('click','.down',function(){
        var val = $(this).next().attr('value');
        var id =  $(this).parent().parent().attr('data-id');
        val--;
        if(val<1){
            val = 1;
        }else{
            $(this).next().attr('value',val);
        }
        $.ajax({
            url:'../api/ShopCart.php',
            type:'get',
            data:{
                can:'updata',
                id:id,
                num:val
            }
        });
        var arr = ischecked();
        allNum(arr);
        allprice(arr);
    });

    //小计计算
    $('.ul1').on('click','.up',function(){
        var price =  $(this).parent().prev().text().slice(1);
        var vals = $(this).prev().val();;
        var xiaoji = (price*vals).toFixed(2);
        $(this).parent().next().html('￥'+ xiaoji);
    });
    $('.ul1').on('click','.down',function(){
        var price =  $(this).parent().prev().text().slice(1);
        var vals = $(this).next().val();
        var xiaoji = (price*vals).toFixed(2);
        $(this).parent().next().html('￥'+xiaoji);
    });

    //点击商品选择按钮
    $('.ul1').on('click','.checked',function(){
      var res = $('.xiaoji').eq(1).text().slice(1);
    //   console.log(res);
        var arr = ischecked();
        var len = arr.length;
        //如过商品选所有，全选按钮打开，反之关闭。
        if($('.ul1 li').size()==len){
            $('.selectAll input').prop('checked','checked');
            $('.left1 input').prop('checked','checked');
        }else{
            $('.selectAll input').removeAttr('checked');
            $('.left1 input').removeAttr('checked'); 
        }
        allNum(arr);
        pay();
        allprice(arr);
    });

   
    //点击全选1
    var isok = true;
    $('.selectAll-sp').click(function(){
        if(isok){
            $('.selectAll input').prop('checked','checked');
            $('.check input').prop('checked','checked');
            $('.left1 input').prop('checked','checked');
        }else{
            $('.selectAll input').removeAttr('checked');
            $('.check input').removeAttr('checked'); 
            $('.left1 input').removeAttr('checked'); 
        }
        isok = !isok;
        pay();
        var arr= ischecked();
        allNum(arr);
        allprice(arr);
      });
    //点击全选2
    $('.left1 input').click(function(){
        if(isok){
            $('.left1 input').prop('checked','checked');
            $('.selectAll input').prop('checked','checked');
            $('.check input').prop('checked','checked');
        }else{
            $('.selectAll input').removeAttr('checked');
            $('.selectAll input').removeAttr('checked');
            $('.check input').removeAttr('checked'); 
        }
       isok = !isok;
       pay();
       var arr= ischecked();
        allNum(arr);
        allprice(arr);
    });


      //删除单行
      $('.ul1').on('click','.delspan',function(){
        var id =  $(this).parent().parent().attr('data-id');
    //    console.log(id);
        var li = $(this).parent().parent();
        var res = confirm('您确定要删除该商品吗？');
        if(res){
            $.ajax({
                url:'../api/ShopCart.php',
                type:'get',
                data:{
                    can:'del',
                    id:id
                },
                success:function(str){
                if(str.trim()=='yes'){
                    li.remove();
                }else{
                    alert('哎哟~删除失败了');
                }
                }
            });
        }
        var arr = ischecked();
        allNum(arr);
        pay();
        allprice(arr);
        updata();
    });


    //判断被选项
    function ischecked(){
      var arr = [];
      var len = $('.check input').size();
      for( var i =0; i<len; i++ ){
        if($('.checked').eq(i).prop('checked')){
            arr.push(i);
        }
      }
      return arr;
    }
    //判断已选多少项
    function allNum(str){
        var sum = 0;
        for( var i =0 ; i<str.length ; i++ ){
            sum += ($('.num').eq(str[i]).val())*1;
        }
        $('.haveSelect span').html(sum);
    }

    //判断总价
    function allprice(str){
        var sum =0;
        for( var i =0 ; i<str.length ; i++ ){
            var res = $('.xiaoji').eq(str[i]).text().slice(1);
            var price = res*1;
            sum+=price;
        }
        $('.count span').html('￥'+sum)
    }

   //点击删除已选项
    $('.left2').click(function(){
        var arr = ischecked();
        var len = arr.length;
        if( len == 0 ){
            alert('您还没选择任何商品呢');
        }else{
            var res = confirm('您确定要删除商品吗？');
            if(res){
                for( var i = len ; i>=0 ; i-- ){
                    var id = $('.ul1 li').eq(arr[i]).attr('data-id');
                    $.ajax({
                        url:'../api/ShopCart.php',
                        type:'get',
                        data:{
                            can:'del',
                            id:id
                        },
                        success:function(str){
                            // console.log(str);
                            if(str.trim()=='yes'){
                                $('.ul1 li').eq(arr[i]).remove();
                            }else{
                                alert('哎哟~删除失败了');
                            }
                            updata();
                        }
                    });
                }
            }
            // updata();//更新
        }
    });

    
   //判断是否有商品被选择。要是有一个以上的商品被选择。结算按钮亮起。
   function pay(){
        var arr= ischecked();
        var len = arr.length;
        if(len>0){
            $('.pay').addClass('gopay');
        }else{
            $('.pay').removeClass('gopay'); 
        }
    } 

    //更新结算面板
    function updata(){
        if($('.ul1 li').size()==0){
            $('.AllNum').remove();
        }
    }


     //清空购物车
    $('.left3').click(function(){
        var res = confirm('您确定要清空购物车吗？');
        if(res){
           $.ajax({
               url:'../api/ShopCart.php',
               type:'get',
               data:{
                   can:'delectAll'
               },
               success:function(str){
                 if(str.trim()=='yes'){
                    $('.ul1 li').remove();
                 }else{
                     alert('哎哟~删除失败了');
                 }
               }
           });
        }
        // $('.ul1 li').remove();
        updata();
    });

});