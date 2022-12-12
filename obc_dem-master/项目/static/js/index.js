var goodsbox = document.querySelector('.goods')
var goods = document.querySelector('.goods1')
var money = document.querySelectorAll('.money')
var xiu = document.querySelector('.selected-nav')
var shop = document.querySelector('.nav-shop')
var p1 = document.querySelector('.nav1-p')
var p2 = document.querySelector('.shop-p')
var none1 = document.querySelectorAll('.none')
var box = document.querySelector('.big-box')
var nav1 = document.querySelector('.nav1')
var nav = document.querySelector('.recommend-nav')
var img = document.querySelectorAll('.img')


function ax() {
    axios({
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        method: 'post',
        url: 'http://localhost:3066/index',
        // data: Qs.stringify({
        //     img: img.src,
        //     money: money.innerHTML
        // })
    }).then((data) => {
        for (let i = 0; i < data.data.length; i++) {
            // console.log(data.data[i].photo)
            var divs = document.createElement('div')
            goodsbox.appendChild(divs)
            divs.innerHTML = goods.innerHTML
            divs.className = 'goods1'
            var money = document.querySelectorAll('.money')
            var img = document.querySelectorAll('.img')
            img[i].src = data.data[i].photo
            money[i].innerHTML = data.data[i].Price
                // 生成商品并赋值id
            var divid = document.querySelectorAll('.goods1')
            let id = data.data[i].id
            divid[i].setAttribute('id', id)
                // 商品介绍链接数据库
            var introduce = document.querySelectorAll('.introduce')
            var Hot = document.querySelectorAll('.Hot')
            var man = document.querySelectorAll('.man')

            introduce[i].innerHTML = data.data[i].introduce
            Hot[i].innerHTML = data.data[i].Hot
            man[i].innerHTML = data.data[i].man
                // div点击事件
            divid[i].onclick = function() {
                console.log(`${divid[i].id}`)
                localStorage.setItem('id', `${divid[i].id}`)
                window.location.href = 'http://localhost:3066/html/xqy.html'
            }
        }
    })
}
ax();



// 轮播图链接数据库
function banner() {
    axios({
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        method: 'post',
        url: 'http://localhost:3066/index/ban',
        // data: Qs.stringify({
        //     img: img.src,
        //     money: money.innerHTML
        // })
    }).then((data) => {
        for (var i = 0; i < data.data.length; i++) {
            var imge = document.querySelectorAll('.imge')
            imge[i].src = data.data[i].banner
        }
    })
    return;
}
banner();
// 轮播后图片详情
function ph() {
    axios({
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        method: 'post',
        url: 'http://localhost:3066/index/ph',
        // data: Qs.stringify({
        //     img: img.src,
        //     money: money.innerHTML
        // })
    }).then((data) => {
        for (var i = 0; i < data.data.length; i++) {
            var ph = document.querySelectorAll('.ph')
            ph[i].src = data.data[i].photo
        }
    })
    return;
}
ph();
// 判断页面位置修改定位
// window.addEventListener('wheel', function(e) {
//     var event = event || window.event
//     if (scrollY >= 90) {
//         xiu.style.position = 'fixed'
//         xiu.style.top = 0
//         xiu.style.left = 0
//         xiu.style.background = 'url(../img/shouye-img/bc.jpg!q80)'
//         xiu.style.backgroundSize = 100 + '%'
//     } else {
//         xiu.style.position = 'absolute'
//         xiu.style.background = ''
//     }
// })
shop.onclick = function() {
    for (var a = 0; a < none1.length; a++) {
        none1[a].style.display = 'none'
        box.style.height = 1 + 'rem'
        p1.style.display = 'none'
        p2.style.display = 'block'
    }

}
nav1.onclick = function() {
    for (var a = 0; a < none1.length; a++) {
        none1[a].style.display = 'block'
        box.style.height = 9.5 + 'rem'
        p1.style.display = 'block'
        p2.style.display = 'none'
    }
}

// document.ontouchmove = function() {
//     if (window.pageYOffset >= 90) {
//         xiu.style.position = 'fixed'
//         xiu.style.top = 0
//         xiu.style.left = 0
//         xiu.style.background = 'url(../img/shouye-img/bc.jpg!q80)'
//         xiu.style.backgroundSize = 100 + '%'
//     } else {
//         xiu.style.position = 'absolute'
//         xiu.style.background = ''
//     }
// }
setInterval(function() {
        if (window.pageYOffset >= 90) {
            xiu.style.position = 'fixed'
            xiu.style.top = 0
            xiu.style.left = 0
            xiu.style.background = 'url(../img/shouye-img/bc.jpg!q80)'
            xiu.style.backgroundSize = 100 + '%'
        } else {
            xiu.style.position = 'absolute'
            xiu.style.background = ''
        }

    })
    // document.onmousemove = function() {
    //         if (window.pageYOffset >= 90) {
    //             xiu.style.position = 'fixed'
    //             xiu.style.top = 0
    //             xiu.style.left = 0
    //             xiu.style.background = 'url(../img/shouye-img/bc.jpg!q80)'
    //             xiu.style.backgroundSize = 100 + '%'
    //         } else {
    //             xiu.style.position = 'absolute'
    //             xiu.style.background = ''
    //         }
    //     }
    // 点谁谁红
var mach = document.querySelectorAll('.mach')
for (var i = 0; i < mach.length; i++) {
    mach[0].style.color = 'red'
    mach[i].style.color = '#333'
    mach[i].onclick = function() {
        for (var i = 0; i < mach.length; i++) {
            mach[i].style.color = '#333'
        }
        this.style.color = 'red'
    }
}
var go = document.querySelectorAll('.goods1')