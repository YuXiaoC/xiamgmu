$(function () {
    var scan = document.querySelector('#show');
    var phone = document.querySelector('#phone');
    //点击切换登陆方式
    $('#scan').click(function () {
        $('#login-box').css('display', 'none');
        $('#scan-box').css('display', 'block');
    });
    $('#zhanghao').click(function () {
        $('#login-box').css('display', 'block');
        $('#scan-box').css('display', 'none');
    });
    //鼠标经过二维码移动
    $('.scanCode').hover(function () {
        startMove(scan, { 'left': '85' }, function () {
            $('#phone').css('display', 'block');
        });
    }, function () {
        $('#phone').css('display', 'none');
        startMove(scan, { 'left': '150' });
    });
    //点击登陆
    $('#login').click(function () {
        var can = '';
        var user = $('#username').val().trim();
        var psw = $('#password').val().trim();
        //判断用户名类型
        if (checkReg.name(user)) {
            can = 'username';
        }
        if (checkReg.tel(user)) {
            can = 'phonecode';
        }
        if (checkReg.email(user)) {
            can = 'email';
        }
        //ajax请求
        $.ajax({
            url: '../api/denglu.php',
            type: 'post',
            data: {
                username: user,
                password: psw,
                ziduan: can
            },
            success: function (str) {
                var res = str.trim();
                // console.log(res);
                if (res == 'no') {
                    alert('登陆失败了！用户名或密码错误！');
                } else {
                    var arr = JSON.parse(res);
                    var username = arr[0].username;
                    var len = arr.length
                    if (len > 0) {
                        setCookie('username', username);
                        window.open('../index.html?username='+username);
                    }
                }


            }
        });
    });

});