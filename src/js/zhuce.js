$(function () {
    /**定义全局变量$code */
    var code = null;
    var phonecode = '';
    var isture1 = false;
    var isture2 = false;
    var isture3 = false;
    var isture4 = false;
    var box1 = document.querySelector('#huadong-box');
    // console.log(div1);
    var isok1 = false;
    //验证手机号码
    $('.inpt input').blur(function () {
        var val = $('.inpt input').val();
        if (val) {
            if (checkReg.tel(val)) {
                $('.phoneNumb span').html('号码合法！');
                $('.phoneNumb span').css('color', 'green');
                isok1 = true;
            } else {
                $('.phoneNumb span').html('请输入有效的号码！');
                $('.phoneNumb span').css('color', 'red');
            }
        } else {
            $('.phoneNumb span').html('电话号码不能为空！');
            $('.phoneNumb span').css('color', 'red');
        }
    });
    //获取焦点清空提示
    $('.inpt input').focus(function () {
        $('.phoneNumb span').html('');
    });

    $('.clickToCheck').click(function () {
        if (isok1) {
            $('#zhezhao').css('display','block');
            $('#huadong-box').css('display','block');
            // $('.clickToCheck').css('display','none');
            // $('.CodeNum').css('display','block');
        }
    });


    /* ---拖动验证---*/ 
    function drag(){
        $('#div1').mousedown(function(ev){
            var evt = ev || window.event;
            var x = evt.offsetX;
            // console.log(x)
            $(document).mousemove(function(e){
                var event = e || window.event;
                var _x = event.clientX - box1.offsetLeft + (box1.offsetWidth)/2- x;
                $('#div1').css('left',_x + 'px');
                $('#div2').css('width',_x + 'px');
                if(_x<0){
                    _x=0;
                    $('#div1').css('left',_x + 'px');
                    $('#div2').css('width',_x + 'px');
                }
                if(_x>263){
                    _x=263;
                    $('#div1').css('left',_x + 'px');
                    $('#div2').css('width',_x + 'px');
                    $('#span1').css('display','none');
                    var url = '../api/checkname.php';
                    var data = 'c=phoneNum&phoneNum='+($('.inpt input').val());
                    ajax('GET',url,data,(str)=>{
                        // console.log(str);
                        if(str.trim() == 'yes'){
                            phonecode = $('.inpt input').val(); 
                            $('.checkSu').html('验证成功！');
                            $('.isoklogo1').css('display','block');
                            $('.clickToCheck').css('display','none');
                            $('.CodeNum').css('display','block');
                        }else{
                            $('.checkSu').html('您的号码已注册');
                            $('.isoklogo2').css('display','block')
                        }
                    });
                    $('#div2').html('验证完成');
                    $('#div1').html('√');
                    $('#div1').off('mousedown');
                }
                e.preventDefault();   
            });
            $(document).mouseup(function(){
                $(document).off('mousemove');
            });
        });
    }
    drag();
    // $('#div1').mousedown(function(ev){
    //     var evt = ev || window.event;
    //     var x = evt.offsetX;
    //     // console.log(x)
    //     $(document).mousemove(function(e){
    //         var event = e || window.event;
    //         var _x = event.clientX - box1.offsetLeft + (box1.offsetWidth)/2- x;
    //         $('#div1').css('left',_x + 'px');
    //         $('#div2').css('width',_x + 'px');
    //         if(_x<0){
    //             _x=0;
    //             $('#div1').css('left',_x + 'px');
    //             $('#div2').css('width',_x + 'px');
    //         }
    //         if(_x>263){
    //             _x=263;
    //             $('#div1').css('left',_x + 'px');
    //             $('#div2').css('width',_x + 'px');
    //             $('#span1').css('display','none');
    //             var url = '../api/checkname.php';
    //             var data = 'c=phoneNum&phoneNum='+($('.inpt input').val());
    //             ajax('GET',url,data,(str)=>{
    //                 // console.log(str);
    //                 if(str.trim() == 'yes'){
    //                     phonecode = $('.inpt input').val(); 
    //                     $('.checkSu').html('验证成功！');
    //                     $('.isoklogo1').css('display','block');
    //                     $('.clickToCheck').css('display','none');
    //                     $('.CodeNum').css('display','block');
    //                 }else{
    //                     $('.checkSu').html('您的号码已注册');
    //                     $('.isoklogo2').css('display','block')
    //                 }
    //             });
    //             $('#div2').html('验证完成');
    //             $('#div1').html('√');
    //             $('#div1').off('mousedown');
    //         }
    //         e.preventDefault();   
    //     });
    //     $(document).mouseup(function(){
    //         $(document).off('mousemove');
    //     });
    // });

    /*点击关闭弹窗 */
    $('.close').click(function(){
        $('#div1').css('left',0);
        $('#div2').css('width',0);
        $('#div2').html('');
        $('.checkSu').html('');
        $('#span1').css('display','block');
        $('.isoklogo1').css('display','none');
        $('#zhezhao').css('display','none');
        $('.isoklogo2').css('display','none')
        $('#huadong-box').css('display','none');
        drag();
    });

    /**点击获取验证码 */
    $('.getCode').click(function(){
        var num1 = (Math.random()*10).toFixed(0);
        var num2 = (Math.random()*10).toFixed(0);
        var num3 = (Math.random()*10).toFixed(0);
        var num4 = (Math.random()*10).toFixed(0);
        code = ''+num1+num2+num3+num4;
        alert('验证码为'+code);
        $('.getCode').html('重新获取');
        $('.span-left ').css('display','block');
    });


    /**点击下一步 */
    $('.clickToNext').click(function(){
        var val = $('.inputCode input').val();
        if(val == code){
            /**验证码页隐藏*/
            $('#steps').css('display','none');
            /**填写用户信息页显示*/
            $('#usermessage').css('display','block');
            /**流程跟随*/
            $('.haveMargin1 span').css('background','#33bb44');
            $('.haveMargin1 p').css('color','#33bb44');
        }else{
            alert('验证码不正确！');
        }
    });

    /**用户名表单验证 */
    $('#username').blur(function(){
        var userName = $('#username').val();
        // console.log($userName);
        if(userName){
            if(checkReg.name(userName)){
                var url = '../api/checkname.php';
                var data = 'c=username&username='+userName;
                ajax('GET',url,data,str => {
                    // console.log(str.trim());
                    if(str.trim() == 'yes'){
                        // alert();
                        isture1 = true;
                    }else{
                        $('.user-span').html('用户名太受欢迎了，换个吧。');
                        $('.user-span').css('color','red');
                    }
                });
            }else{
                $('.user-span').html('用户名不合法');
                $('.user-span').css('color','red');
            }
        }else{
            $('.user-span').html('用户名不能为空');
            $('.user-span').css('color','red');
        }
    });
    //获取焦点清空提示
    $('#username').focus(function(){
        $('.user-span').html('');
    });


    /**密码验证 */

    $('#psw1').blur(function(){
        var userName = $('#username').val();
        var psw1Val = $('#psw1').val();
        if(userName){
            //判断用户名是否为空
        }else{
            $('.user-span').html('用户名不能为空');
            $('.user-span').css('color','red'); 
        }
        if(psw1Val){
            if(checkReg.psweasy(psw1Val)){
                
            }else{
                $('.psw1-span').html('密码格式不对！');
                $('.psw1-span').css('color','red'); 
            }
        }else{
            $('.psw1-span').html('密码不能为空！');
            $('.psw1-span').css('color','red');
        }
    });
    //获取焦点清空提示
    $('#psw1').focus(function(){
        $('.psw1-span').html('');
    });

    /**确认密码验证 */
    $('#psw2').blur(function(){
        var psw1Val = $('#psw1').val();
        var psw2Val = $('#psw2').val();
        var userName = $('#username').val();
        if(userName){
            //判断用户名是否为空
        }else{
            $('.user-span').html('用户名不能为空');
            $('.user-span').css('color','red'); 
        }
        if(psw1Val){
           //判断密码是否为空
        }else{
            $('.psw1-span').html('密码不能为空！');
            $('.psw1-span').css('color','red'); 
        }
        if(psw2Val){
            if(psw1Val==psw2Val){;
                isture2 = true;
            }else{
                $('.psw2-span').html('密码错误！');
                $('.psw2-span').css('color','red'); 
            }
        }else{
            $('.psw2-span').html('请确认密码！');
            $('.psw2-span').css('color','red');
        }
    });

    $('#psw2').focus(function(){
        $('.psw2-span').html('');
    });

    /**出生日期验证 */
    $('#userbrith').blur(function(){
        var psw1Val = $('#psw1').val();
        var psw2Val = $('#psw2').val();
        var userName = $('#username').val();
        var brithVal = $('#userbrith').val();
        if(userName){
            //判断用户名是否为空
        }else{
            $('.user-span').html('用户名不能为空');
            $('.user-span').css('color','red'); 
        }
        if(psw1Val){
           //判断密码是否为空
        }else{
            $('.psw1-span').html('密码不能为空！');
            $('.psw1-span').css('color','red'); 
        }
        if(psw2Val){
           //判断密码是否为空
        }else{
            $('.psw2-span').html('确认密码不能为空！');
            $('.psw2-span').css('color','red'); 
        }
        if(brithVal){
            if(checkReg.Birthdate(brithVal)){
                brithday = brithVal;
                isture3 = true;
            }else{
                $('.userbrith-span').html('出生日期格式不对');
                $('.userbrith-span').css('color','red');
            }
        }else{
            $('.userbrith-span').html('请填写出生日期！');
            $('.userbrith-span').css('color','red');
        }
    });
    //获取焦点清空提示
    $('#userbrith').focus(function(){
        $('.userbrith-span').html('');
    });

     /*邮箱验证 */
    $('#e-mile').blur(function(){
        var psw1Val = $('#psw1').val();
        var psw2Val = $('#psw2').val();
        var userName = $('#username').val();
        var brithVal = $('#userbrith').val();
        var Emile = $('#e-mile').val();
        if(userName){
            //判断用户名是否为空
        }else{
            $('.user-span').html('用户名不能为空');
            $('.user-span').css('color','red'); 
        }
        if(psw1Val){
           //判断密码是否为空
        }else{
            $('.psw1-span').html('密码不能为空！');
            $('.psw1-span').css('color','red'); 
        }
        if(psw2Val){
           //判断确认密码是否为空
        }else{
            $('.psw2-span').html('确认密码不能为空！');
            $('.psw3-span').css('color','red'); 
        }
        if(brithVal){
           //判断出生日期否为空
        }else{
            $('.userbrith-span').html('请填写出生日期！');
            $('.userbrith-span').css('color','red'); 
        }
        if(Emile){
            if(checkReg.email(Emile)){
                // alert();
                isture4 = true;
            }else{
                $('.e-mile-span').html('邮箱不正确');
                $('.e-mile-span').css('color','red');
            }
        }else{
            $('.e-mile-span').html('请填写邮箱');
            $('.e-mile-span').css('color','red');

        }
    });
    $('#e-mile').focus(function(){
        $('.e-mile-span').html('');
    });

    /**点击注册 */
    $('#userReg').click(function(){
        // console.log(phonecode);
        var EmailVal = $('#e-mile').val().trim();
        var brithday = $('#userbrith').val().trim();
        var userName = $('#username').val().trim();
        var psw1Val = $('#psw1').val().trim();
        // console.log(brithday);
        if(isture1&&isture2&&isture3&&isture4){
            var url = '../api/InsertUser.php';
            var data = `username=${userName}&psw=${psw1Val}&phoneNum=${phonecode}&brith=${brithday}&Email=${EmailVal}`;
            ajax('POST',url,data,str =>{
                // console.log(str);
                if(str.trim()=='yes'){
                    $('.haveMargin2 span').css('background','#33bb44');
                    $('.haveMargin2 p').css('color','#33bb44');
                    alert('注册成功!');
                    location.href = 'denglu.html';
                }else{
                    alert('注册失败！');
                }
            });
        }
    });

}); 