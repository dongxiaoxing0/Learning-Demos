let $buttons = $('.buttons > ul > li')
for (let i = 0; i < $buttons.length; i++) {

    $buttons.eq(i).on('click', function (e) {
        let index = $(e.currentTarget).index()
        goToIndex(index)
    })
}

let n = 0
let timer = setInterval(() => {
    goToIndex(n % 4)
    n += 1
}, 2000)

$('.window').eq(0).on('mouseenter',function(){
    window.clearInterval(timer)
})
$('.window').eq(0).on('mouseleave',function(){
    timer = setInterval(() => {
        goToIndex(n % 4)
        n += 1
    }, 2000)
})

$(document).on('visibilitychange',function(){
    if (document.visibilityState !== 'visible') {
        window.clearInterval(timer)
    }else{
        timer = setInterval(() => {
            goToIndex(n % 4)
            n += 1
        }, 2000)
    }
})

function goToIndex(index) {
    $('#images').eq(0).css({transform: 'translateX(' + (-920*index) + 'px)'})
    $('.buttons > ul > li').eq(index).addClass('active').siblings().removeClass('active')
}