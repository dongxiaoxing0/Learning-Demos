var $buttons = $('#buttons > span')
for (let i = 0; i < $buttons.length; i++) {
    $($buttons[i]).on('click', function (x) {
        let index = $(x.currentTarget).index()
        let p = $('.show').index()
        var $images = $('#images > img')
        if (p !== index) {
            $images.eq(p).addClass('leave').removeClass('show enter')
            $images.eq(p).one('transitionend', function (x) {
                $images.eq(p).addClass('enter').removeClass('leave show')
            })
        }
        $images.eq(index).addClass('show').removeClass('leave enter')
        $buttons.eq(index).addClass('active').siblings().removeClass('active')

    })
}

var n = 0
var size = $buttons.length
var timerId = setInterval(function(){
    $buttons.eq(n % size).trigger('click')
    console.log()
    n += 1
    console.log(n % size)
},2000) 