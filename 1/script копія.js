let green = document.querySelector('.green')
let hei = 480;
let t = 34;
let p = 0;
let interval = setInterval(() =>{
    if(p == 0){
        green.style.height = hei + 'px'
        hei--
        green.style.top = t + 'px'
        t++
        if(hei == 0) p++
    } else if(p == 1) {
        document.querySelector('.time').innerHTML = 1
        green.style.height = hei + 'px'
        hei++
        green.style.top = t + 'px'
        t--
        if(hei == 480) p++
    } else if(p == 2) {
        document.querySelector('.time').innerHTML = 0
    clearInterval(interval)
    }
}, 125)
