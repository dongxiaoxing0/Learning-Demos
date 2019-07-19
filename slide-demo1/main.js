var $buttons = $('.buttons')

for (let i = 0; i < $buttons.length; i++) {
    $($buttons[i]).on('click', function (x) {
        let index = $(x.currentTarget).index()
        console.log(index)
        let p = -index * 400
        $('#images').css({
            transform: 'translateX(' + p + 'px)'
        })
        $buttons.eq(index).addClass('red').siblings().removeClass('red')
    })
}

var n = 0
var size = $buttons.length
var timerId = setInterval(function () {
    $($buttons[n % size]).trigger('click')
    n += 1
}, 2000)

$('.window').on('mouseenter', function () {
    window.clearInterval(timerId)
})
$('.window').on('mouseleave', function () {
    timerId = setInterval(function () {
        $($buttons[n % size]).trigger('click')
        n += 1
    }, 2000)
})