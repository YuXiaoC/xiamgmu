
$(function () {
    var ind = null;
    var iw = 1920;
    var now = 0;
    $timer = null;
    var CookieName = getCookie('username');
    // console.log(CookieName);
    $('#zhuce').prev().html('您好，'+CookieName);
    var div = document.querySelector('#lunbotu');
    clearInterval($timer);
    /*-----------自动轮播----------- */
    function lunbo(str) {
        $timer = setInterval(function () {
            str++;
            if (str > 3) {
                startMove(div, { 'left': -iw * str }, function () {
                    div.style.left = -4 + 'px';
                });
                str = 0;
            } else {
                startMove(div, { 'left': -iw * str });
            }
            $('#jiaodian span').removeClass('active');
            $('#jiaodian span').eq(str).addClass('active');
            now = str;
        }, 3000);
    }
    lunbo(now);
    /*-----------鼠标进过停止轮播----------- */

    $('#lunbo-box').hover(function () {
        clearInterval($timer);
    }, function () {
        lunbo(now);
    });

    /*-----------用jq写焦点点击事件----------- */
    $('#jiaodian span').hover(function () {
        $('#jiaodian span').removeClass('active');
        $(this).addClass('active');
        $index = ($(this).text()) * 1 - 1;
        startMove(div, { 'left': -iw * $index });
        now = $index;
    }, function () { });

    /*-----------点击前后按钮切换----------- */

    $('#lunbo-next').click(function () {
        now++;
        if (now == $('#jiaodian span').size())  {
            startMove(div, { 'left': -iw * now },function(){
                div.style.left = -4 + 'px';
            });
            now = 0;
        }else{
            startMove(div, { 'left': -iw * now });
        }
        $('#jiaodian span').removeClass('active');
        $('#jiaodian span').eq(now).addClass('active');
    });
    $('#lunbo-prev').click(function () {
        now--;
        if (now < 0) {
            div.style.right = 0 + 'px';
            now = $('#jiaodian span').size()-1;
            startMove(div, { 'left': -iw * now });
        }
        startMove(div, { 'left': -iw * now });
        $('#jiaodian span').removeClass('active');
        $('#jiaodian span').eq(now).addClass('active');
    });

    /*-----------鼠标滚动左侧菜单出现----------- */
    window.onscroll = (ev)=>{
        var ev = ev || window.event;
        if(scrollY>600){
            $('#conp').css('display','block');
        }else{
            $('#conp').css('display','none');
        }
    }
      /*-----------左侧菜单回到顶部----------- */
      $('.conp11').click(function(){
          window.screenTop = 0;
      });

      /*-----------首页数据渲染1----------- */ 
      $url = '../api/xuanran.php';
      $data = 'page=0&qty=12';
      ajax('GET',$url,$data,(str)=>{
        $obj = JSON.parse(str) 
        // console.log($obj);   
        $len = $obj.length;
        $html = '';
        for( $i = 0 ;$i<$len ; $i++ ){
            $html+=` <li data-id = "${$obj[$i].id}">
                    <a href="#">
                        <img src="${$obj[$i].imgurl}" alt="图片出错啦">
                    </a>
                    <div class="div-title">${$obj[$i].title}</div>
                    <div class="price">
                        <span>￥<strong>${$obj[$i].price}</strong></span>
                        <a href="#">立即购买></a>
                    </div>
                </li>`;
        }
        $('.tentent-bottom-right ul').html($html);
      });
      /*-----------首页数据渲染2----------- */ 

      $url2 = '../api/xuanran.php';
      $data2 = 'page=13&qty=24';
      ajax('GET',$url2,$data2,(str)=>{
        $obj = JSON.parse(str) 
        // console.log($obj);   
        $len = $obj.length;
        $html = '';
        for( $i = 0 ;$i<$len ; $i++ ){
            $html+=` <li data-id = "${$obj[$i].id}">
                    <a href="#">
                        <img src="${$obj[$i].imgurl}" alt="图片出错啦">
                    </a>
                    <div class="div-title">${$obj[$i].title}</div>
                    <div class="price">
                        <span>￥<strong>${$obj[$i].price}</strong></span>
                        <a href="#">立即购买></a>
                    </div>
                </li>`;
        }
        $('.tentent-bottom2-right ul').html($html);
      });
});