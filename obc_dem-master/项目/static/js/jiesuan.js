let click = document.querySelectorAll('.click')
let span = document.querySelectorAll('.top span')
for (let i = 0; i < click.length; i++) {
    span[i].onclick = function() {
        for (let k = 0; k < click.length; k++) {
            click[k].style.display = 'none'
            span[k].style.color = '#333'
        }
        click[i].style.display = 'block'
        span[i].style.color = 'red'
    }
}




// 传入全部订单
function ax() {
    axios({
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        method: 'post',
        url: 'http://localhost:3066/jiesuan',
        // data: Qs.stringify({

        // })
    }).then((data) => {
        for (let i = 0; i < data.data.length; i++) {
            let divs = document.createElement('div')
            let shop = document.querySelector('.shop')
            let box = document.querySelector('.box')
            divs.className = 'shop shop2'
            divs.innerHTML = shop.innerHTML
            box.appendChild(divs)
            let img = document.querySelectorAll('.shop2 img')
            img[i].src = data.data[i].photo
            let zj = document.querySelectorAll('.shop2 .zj')
            zj[i].innerHTML = data.data[i].qb
            let jian = document.querySelectorAll('.shop2 .jian')
            jian[i].innerHTML = data.data[i].mach
            let sc = document.querySelectorAll('.shop2 .sc')
            let shop2 = document.querySelectorAll('.shop2')
            shop2[i].setAttribute('id', data.data[i].id)
            sc[i].onclick = function() {
                tj = 0;
                id = data.data[i].id
                qx = 1
                fk = 0
                cg = 0
                axios({
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    method: 'post',
                    url: 'http://localhost:3066/sc1',
                    data: Qs.stringify({
                        id: id,
                        tj: tj,
                        qx: qx,
                        fk: fk,
                        cg: cg
                    })
                }).then((data) => {})
                this.parentNode.parentNode.removeChild(this.parentNode)
                window.location.href = 'http://localhost:3066/html/jiesuan.html'
            }
        }
    })
}
ax();
// 待付款订单
function ax3() {
    axios({
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        method: 'post',
        url: 'http://localhost:3066/fk',
        // data: Qs.stringify({

        // })
    }).then((data) => {
        for (let i = 0; i < data.data.length; i++) {
            let divs = document.createElement('div')
            let shop = document.querySelector('.shop88')
            let box = document.querySelector('.box22')
            divs.className = 'shop88 shoo'
            divs.innerHTML = shop.innerHTML
            box.appendChild(divs)
            let img = document.querySelectorAll('.shoo img')
            img[i].src = data.data[i].photo
            let zj = document.querySelectorAll('.shoo .zj')
            zj[i].innerHTML = data.data[i].qb
            let jian = document.querySelectorAll('.shoo .jian')
            jian[i].innerHTML = data.data[i].mach
            let span = document.querySelectorAll('.shoo .span2')
            span[i].innerHTML = '待付款'
            let shoo = document.querySelectorAll('.shoo')
            let sc = document.querySelectorAll('.shoo .sc1')
            shoo[i].setAttribute('id', data.data[i].id)
            sc[i].onclick = function() {
                tj = 0;
                id = data.data[i].id
                qx = 1
                fk = 0
                axios({
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    method: 'post',
                    url: 'http://localhost:3066/sc2',
                    data: Qs.stringify({
                        id: id,
                        tj: tj,
                        qx: qx,
                        fk: fk
                    })
                }).then((data) => {})
                this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode)
                window.location.href = 'http://localhost:3066/html/jiesuan.html'
            }
        }
    })
}
ax3();
// 已完成订单
function ax2() {
    axios({
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        method: 'post',
        url: 'http://localhost:3066/ok',
        // data: Qs.stringify({

        // })
    }).then((data) => {
        for (let i = 0; i < data.data.length; i++) {
            let divs = document.createElement('div')
            let shop = document.querySelector('.shop')
            let box = document.querySelector('.box3')
            divs.className = 'shop ok'
            divs.innerHTML = shop.innerHTML
            box.appendChild(divs)
            let img = document.querySelectorAll('.ok img')
            img[i].src = data.data[i].photo
            let zj = document.querySelectorAll('.ok .zj')
            zj[i].innerHTML = data.data[i].qb
            let jian = document.querySelectorAll('.ok .jian')
            jian[i].innerHTML = data.data[i].mach
            let span = document.querySelectorAll('.ok .span2')
            span[i].innerHTML = '已完成'
            let shoo = document.querySelectorAll('.ok')
            let sc = document.querySelectorAll('.ok .sc')
            shoo[i].setAttribute('id', data.data[i].id)
            sc[i].onclick = function() {
                tj = 0;
                id = data.data[i].id
                qx = 1
                cg = 0
                axios({
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    method: 'post',
                    url: 'http://localhost:3066/sc3',
                    data: Qs.stringify({
                        id: id,
                        tj: tj,
                        qx: qx,
                        cg: cg
                    })
                }).then((data) => {})
                this.parentNode.parentNode.removeChild(this.parentNode)
                window.location.href = 'http://localhost:3066/html/jiesuan.html'
            }
        }
    })
}
ax2();

// 取消
function ax4() {
    axios({
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        method: 'post',
        url: 'http://localhost:3066/qxx',
        // data: Qs.stringify({

        // })
    }).then((data) => {
        for (let i = 0; i < data.data.length; i++) {
            let divs = document.createElement('div')
            let shop = document.querySelector('.shop')
            let box = document.querySelector('.box44')
            divs.className = 'shop qxx'
            divs.innerHTML = shop.innerHTML
            box.appendChild(divs)
            let img = document.querySelectorAll('.qxx img')
            img[i].src = data.data[i].photo
            let zj = document.querySelectorAll('.qxx .zj')
            zj[i].innerHTML = data.data[i].qb
            let jian = document.querySelectorAll('.qxx .jian')
            jian[i].innerHTML = data.data[i].mach
            let span = document.querySelectorAll('.qxx .span2')
            span[i].innerHTML = '已完成'
            let shoo = document.querySelectorAll('.qxx')
            let sc = document.querySelectorAll('.qxx .sc')
            shoo[i].setAttribute('id', data.data[i].id)
            sc[i].onclick = function() {
                tj = 0;
                id = data.data[i].id
                qx = 0
                cg = 0
                axios({
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    method: 'post',
                    url: 'http://localhost:3066/sc44',
                    data: Qs.stringify({
                        id: id,
                        tj: tj,
                        qx: qx,
                        cg: cg
                    })
                }).then((data) => {})
                this.parentNode.parentNode.removeChild(this.parentNode)
            }
        }
    })
}
ax4();
let black = document.querySelector('.black')
black.onclick = function() {
    window.location.href = 'http://localhost:3066/html/orders.html'
}