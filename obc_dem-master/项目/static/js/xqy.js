function gogo() {
    window.location.href = 'http://localhost:3066/html/index.html'
}

function gogo1() {
    window.location.href = 'http://localhost:3066/html/shop.html'
}
var hour = document.querySelector('.h')
var min = document.querySelector('.m')
var sec = document.querySelector('.s')
var timer = +new Date('2022-11-11');
getTimes();
setInterval(getTimes, 1000);

function getTimes() {
    var nowTime = +new Date();
    var times = (timer - nowTime) / 1000;
    var h = parseInt(times / 60 / 60);
    h = h < 10 ? '0' + h : h;
    hour.innerHTML = h;
    var m = parseInt(times / 60);
    m = m < 10 ? '0' + m : m;
    min.innerHTML = m;
    var s = parseInt(times % 60);
    s = s < 10 ? '0' + s : s;
    sec.innerHTML = s;
}
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
var buyimg = document.querySelector('.buy-img')
var buymoney = document.querySelector('.buy-money')
var buy = document.querySelector('.buy-2')
    // 购物车链接数据库
function ax() {
    axios({
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        method: 'post',
        url: 'http://localhost:3066/xqy',
        // data: Qs.stringify({
        //     username: ipt.value
        // })
    }).then((data) => {
        for (var i = 0; i < data.data.length; i++) {
            var divs = document.createElement('div')
            buy.appendChild(divs)
            divs.innerHTML = data.data[i].wenben
        }

        var divss = document.querySelectorAll('.buy-2 div')
        for (let k = 0; k < data.data.length; k++) {
            buyimg.src = data.data[0].photo
            buymoney.innerHTML = data.data[0].money
            divss[k].setAttribute('id', data.data[k].id)
            var yyx = document.querySelector('.yyx')
            divss[k].onclick = function() {
                for (var y = 0; y < data.data.length; y++) {
                    buyimg.src = ''
                    buymoney.innerHTML = ''
                    divss[y].style.color = ''
                    divss[y].style.borderColor = ''
                    yyx.innerHTML = ''
                }
                localStorage.setItem('id', `${divss[k].id}`)
                buyimg.src = data.data[k].photo
                buymoney.innerHTML = data.data[k].money
                divss[k].style.color = 'red'
                divss[k].style.borderColor = 'red'
                yyx.innerHTML = data.data[k].wenben
            }
        }
    })
}
ax()
var by = document.querySelector('.b2')
var mb = document.querySelector('.buy-box')
var mach = document.querySelector('.buy')
by.onclick = function() {
    mb.style.display = 'block'
    mach.style.display = 'block'
}
mb.onclick = function() {
    mb.style.display = 'none'
    mach.style.display = 'none'
}


// 通过商城渲染详情页页面
var id = localStorage.getItem('id')



function idc() {
    axios({
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        method: 'post',
        url: 'http://localhost:3066/jj',
        data: Qs.stringify({
            id: id
        })
    }).then((data) => {
        var one = document.querySelector('.one')
        var two = document.querySelector('.two')
        var there = document.querySelector('.there')
        one.src = data.data[0].photo
        two.innerHTML = data.data[0].Price
        there.innerHTML = data.data[0].xqy
    })
}
idc();


// 猜你喜欢
function love() {
    axios({
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        method: 'post',
        url: 'http://localhost:3066/love',
        // data: Qs.stringify({
        //     id: id
        // })
    }).then((data) => {
        var ban = document.querySelector('.banner')
        var bann = document.querySelector('.banner-img')
        for (let i = 0; i < 5; i++) {
            var divs = document.createElement('div')
            ban.appendChild(divs)
            divs.innerHTML = bann.innerHTML
            divs.className = 'banner-img'

        }
        for (let j = 0; j < data.data.length; j++) {
            var imge = document.querySelectorAll('.imge')
            var p1 = document.querySelectorAll('.p1')
            var p2 = document.querySelectorAll('.p2')
            var rmb = document.querySelectorAll('.rmb')
            imge[j].src = data.data[j].img
            p1[j].innerHTML = data.data[j].p1
            p2[j].innerHTML = data.data[j].p2
            rmb[j].innerHTML = data.data[j].money
        }
    })
}
love();
// 判断数量
var f = document.querySelector('.f')
var z = document.querySelector('.z')
var slmach = document.querySelector('.slmach')
var oneone = document.querySelector('.oneone')
var sl = 1;
slmach.innerHTML = sl;
z.onclick = function() {
    sl++;
    slmach.innerHTML = sl;
    f.onclick = function() {
        if (sl == 1) {
            oneone.style.display = 'block'
            setInterval(function() {
                oneone.style.display = 'none'
            }, 3000)
        } else {
            sl--;
            slmach.innerHTML = sl;
        }
    }
}
f.onclick = function() {
        if (sl == 1) {
            oneone.style.display = 'block'
            setInterval(function() {
                oneone.style.display = 'none'
            }, 3000)
        }
    }
    // 加入购物车
var jiajia = document.querySelector('.jiajia')
var buysl = slmach.innerHTML
var id2 = localStorage.getItem('id')
var cgg = document.querySelector('.cgg2')
jiajia.onclick = function() {
    buysl = slmach.innerHTML
    id2 = localStorage.getItem('id')
    axios({
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        method: 'post',
        url: 'http://localhost:3066/buy',
        data: Qs.stringify({
            sl: buysl,
            id: id2
        })
    }).then((data) => {})
    mb.style.display = 'none'
    mach.style.display = 'none'
    cgg.style.display = 'block'
    setInterval(function() {
        cgg.style.display = 'none'
    }, 3000)
}