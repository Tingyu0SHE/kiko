window.addEventListener('load', function () {
    // 排他导航栏切换
    $('.tab p').click(function(){
        $(this).addClass("curr").siblings().removeClass("curr");
        var index = $(this).index();
        // console.log(index);
        $(".tab_item .item").eq(index).show().siblings().hide();
        $('.errp').hide()
        $('.pass_err').hide()
    })
    
    $('.register').click(function () {
        $('#dl').hide();
        $('#zc').show();
        $('.errp').hide()
        $('.pass_err').hide()
    })
    // 短信验证登录的手机号
    $('.phone').blur(function () {
        var Pval = $(this).val()
        let p = /^1(?:3\d|4[4-9]|5[0-35-9]|6[67]|7[0138]|8\d|9)\d{8}$/
        if (p.test(Pval) !== true) {
            $('.errp').show()
        } else {
            $('.errp').hide()
        }
    })
    // 账号登录中的手机号
    $('.phonenum').blur(function () {
        var phonenumval = $(this).val()
        let p = /^1(?:3\d|4[4-9]|5[0-35-9]|6[67]|7[0138]|8\d|9)\d{8}$/
        if (p.test(phonenumval) !== true) {
            $('.errp').show()
        } else {
            $('.errp').hide()
        }
    })
    // 账号登录中的密码
    $('.num_pass').blur(function () {
        var num_passval = $(this).val()
        let s = /^(?=.*\d)(?=.*[A-z])[\da-zA-Z]{6,16}$/
        if (s.test(num_passval) !== true) {
            $('.pass_err').show()
        } else {
            $('.pass_err').hide()
        }
    })
// 注册中的密码
    $('#password').blur(function(){
        var passval = $(this).val()
        var s = /^(?=.*\d)(?=.*[A-z])[\da-zA-Z]{6,16}$/
        if (s.test(passval) !== true) {
            $('.pass_err').show()
        } else {
            $('.pass_err').hide()
        }
    })
    // 获取验证码倒计时
    var timer = '';
    var nums = 60;
    var vc = true
    $('.verification').click(function () {
        if (vc) {
            vc = false
            timer = setInterval(function () {
                if (nums > 0) {
                    nums--;
                    $('.vf').html('重新获取(' + nums + ')s');
                    $('.verification').css('padding','16px 20px 20px 24px')
                    if(nums<10){
                        $('.vf').html('重新获取(0' + nums + ')s');
                    }
                }else {
                    clearInterval(timer)
                    nums = 60;
                    vc = 60;
                    $('.vf').html('发送验证码')
                    $('.verification').css('padding', '16px 20px 20px 48px')
                }
            },1000)
        }
    })
    // 二维码登录
    // 点击微信或者支付宝 显示二维码登录
    $('.moverbig').click(function(){
        $('#dl').hide()
        $('.erQDl').show()
    })
    // 点击注册,
    $('.er_zc').click(function(){
        $('.erQDl').hide()
        $('#zc').show()
    })
    // 点击用户登录
    $('.gouser').click(function(){
        $('.erQDl').hide()
        $('#dl').show()
        $('#zc').hide()
    })
})
