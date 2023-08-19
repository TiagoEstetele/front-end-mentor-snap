const $j = document.querySelector.bind(document)
const $$j = document.querySelectorAll.bind(document)

window.addEventListener('DOMContentLoaded', function(){

    // DOM event listeners
    $j('.menu-toggle').addEventListener('click', function(){
        $j('.header__menu').classList.toggle('active')
    })

    window.scrollTo(window.scrollX, window.scrollY - 1)
    wrapperDistance()
})

window.addEventListener('resize', function(){
    wrapperDistance()
})

var lastScrollTop = 0;
window.addEventListener('scroll', function(){
    var st = window.scrollY;

    if ( st > lastScrollTop ){
        console.log('Scrolling down')
    } else {
        console.log('Scrolling up')
    }

    lastScrollTop = st;
    wrapperDistance()
})

/*
 * Functions
 */

// ex: <div data-distance="padding-Left;margin-Right"></div>
function wrapperDistance(){
    if ( !$j('.wrapper') ) return;
    
    let distance = $j('.wrapper').offsetLeft

    $$j('[data-distance]').forEach(function(item){
        let datas = item.dataset.distance.split(';')
        datas.forEach(function(data){
            let property = data.split('-')[0]
            let side = data.split('-')[1]
            item.style[`${property}${side}`] = `${distance}px`
        })
    })
}