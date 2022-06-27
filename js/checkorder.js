window.addEventListener('load', function () {
    // 删除
    $('.dele').click(function () {
        $(this).parent().parent().parent().parent().remove()
        $('.nod').show()
        getSum()
    })

    // 点击+号，数量加1
    $('.add').click(function () {
        var q = $(this).siblings('input').val()//数量
        q = Number(q)
        $(this).siblings('input').val(++q)
        var u = Number($(this).parent().siblings().eq(1).html())//单价
        // console.log('u'+u);
        var s = $(this).parent().siblings().eq(3).html()//小计
        console.log(s+'s');
        s = u * q + '.00'//小计等于单价乘以数量

        //再把s赋值给小计
        $(this).parent().siblings().eq(3).html(s)

        // let z = $(this).parent().siblings().eq(3).html(s)
        // $('.red').html(z)

        getSum()
    })
    // 点击减号数量减一
    $('.reduce').click(function () {
        var q = $(this).siblings('input').val()
        if (q == 1) {
            q = 1
        } else {
            a = Number(q)
            $(this).siblings('input').val(--q)
            var u = Number($(this).parent().siblings().eq(1).html())//单价
            var s = $(this).parent().siblings().eq(3).html()//小计
            s = u * q + '.00'//小计等于单价乘以数量
            // console.log(s);
            
            $(this).parent().siblings().eq(3).html(s)
            //  $('.red').html(z)
            
        }
        getSum()
    })

    function getSum() {
        var quantity = 0; // 计算总件数 
        var money = 0; // 计算总价钱
        //  遍历input所有的数量
        $('.reduce').siblings('input').each(function (i, e) {
            quantity += parseInt($(e).val());
        })
        // 计算所有的件数
        $('.num').text(quantity)
        // 小计
        $('.Subtotal').each(function (i, e) {
            money += parseFloat($(e).text());
        });
        // 保留两位小数
        $(".red").text('￥'+money.toFixed(2));
    }
})