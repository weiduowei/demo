var goodsbox = document.querySelector('.goods')
var goods = document.querySelector('.goods1')
var money = document.querySelector('.money')
var money1 = document.querySelectorAll('.money1')
var many = document.querySelectorAll('.many')
var jian = document.querySelectorAll('.jian')
var jia = document.querySelectorAll('.jia')
var zj = document.querySelector('.total1')
var jies = document.querySelector('.right-foot')
var jg = 50;
var flag = 0;
var flag1 = 0;
var flag2 = 0;
for (var i = 0; i < 10; i++) {
    var divs = document.createElement('div')
    goodsbox.appendChild(divs)
    divs.innerHTML = goods.innerHTML
    divs.className = 'goods1'
    var sj = Math.floor((Math.random() * 110) + 1);
    money.innerHTML = sj;
}

function gogo() {
    window.location.href = 'http://localhost:3066/html/xqy.html'
}





// axios
function ax() {
    axios({
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        method: 'post',
        url: 'http://localhost:3066/shop',
        // data: Qs.stringify({
        //     username: ipt.value
        // })
    }).then((data) => {
        for (let i = 0; i < (data.data.length); i++) {
            // 购物车商品链接数据库
            let shop = document.querySelector('.shop2')
            let divs = document.createElement('div')
            divs.className = 'shop2 shop3'
            divs.innerHTML = shop.innerHTML
            let top2 = document.querySelector('.top2')
            top2.appendChild(divs)
                // 拿到img
            let shopimg = document.querySelectorAll('.shop3 .shop2-1 img')

            let divss = document.querySelectorAll('.shop3')
            divss[i].setAttribute('id', data.data[i].id)
            shopimg[i].src = data.data[i].photo
            let bor = document.querySelectorAll('.bor')
            bor[i].innerHTML = data.data[i].wenben
            let money1 = document.querySelectorAll('.money1')
            let many = document.querySelectorAll('.many')
            many[i].innerHTML = data.data[i].mach
                // 判断多选单选
            let c1 = document.querySelector('.c1')
            money1[i].innerHTML = data.data[i].money
            let c3 = document.querySelector('.c4')
                // 价格
            let he = 0
            let sum = 0
                // 删除功能
            var sc = document.querySelectorAll('.shop3 .dui')
            let c2 = document.querySelectorAll('.shop3 input')
            sc[i].onclick = function() {
                    many = 0
                    id = divss[i].id
                    console.log(many)
                    kg = 0;
                    axios({
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                        },
                        method: 'post',
                        url: 'http://localhost:3066/shanchu',
                        data: Qs.stringify({
                            id: id,
                            mach: many,
                            kg: kg
                        })
                    }).then((data) => {})
                    this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode)
                }
                // 点击复选框
            c1.onclick = function() {
                he = 0
                for (let o = 0; o < c2.length; o++) {
                    if (c1.checked == true) {
                        c2[o].checked = true
                        c3.checked = true

                        let money1 = document.querySelectorAll('.money1')
                        let mony = Number(money1[o].innerHTML)
                        let duo = document.querySelectorAll('.many')
                        let many = Number(duo[o].innerHTML)
                        sum = many * mony
                        he += sum
                        zj.innerHTML = he
                    } else {
                        c2[o].checked = false
                        c3.checked = false
                        let money1 = document.querySelectorAll('.money1')
                        let mony = Number(money1[o].innerHTML)
                        let duo = document.querySelectorAll('.many')
                        let many = Number(duo[o].innerHTML)
                        sum = 0
                        he = sum
                        zj.innerHTML = he
                    }
                }
            }
            c3.onclick = function() {
                he = 0
                for (let o = 0; o < c2.length; o++) {
                    if (c3.checked == true) {
                        c2[o].checked = true
                        c1.checked = true
                        let money1 = document.querySelectorAll('.money1')
                        let mony = Number(money1[o].innerHTML)
                        let duo = document.querySelectorAll('.many')
                        let many = Number(duo[o].innerHTML)
                        sum = many * mony
                        he += sum
                        zj.innerHTML = he
                    } else {
                        c2[o].checked = false
                        c1.checked = false
                        let money1 = document.querySelectorAll('.money1')
                        let mony = Number(money1[o].innerHTML)
                        let duo = document.querySelectorAll('.many')
                        let many = Number(duo[o].innerHTML)
                        sum = 0
                        he = sum
                        zj.innerHTML = he
                    }

                }
            }

            // let c2 = document.querySelectorAll('.shop3 input')
            for (let i = 0; i < c2.length; i++) {
                c2[i].onclick = function() {
                    let flag = true;
                    for (var y = 0; y < c2.length; y++) {
                        if (c2[y].checked == false) {
                            flag = false
                            break
                        }
                    }
                    // console.log(flag);
                    c1.checked = flag
                    c3.checked = flag
                    if (c2[i].checked == true) {
                        let rmb = Number(data.data[i].money)
                        let sl = Number(data.data[i].mach)
                        let id = divss[i].id
                        more = sl * rmb
                        let money1 = document.querySelectorAll('.money1')
                        let mony = Number(money1[i].innerHTML)
                        let duo = document.querySelectorAll('.many')
                        let many = Number(duo[i].innerHTML)
                        sum = many * mony
                        he += sum
                        zj.innerHTML = he
                    }
                    if (c2[i].checked == false) {
                        let money1 = document.querySelectorAll('.money1')
                        let mony = Number(money1[i].innerHTML)
                        let duo = document.querySelectorAll('.many')
                        let many = Number(duo[i].innerHTML)
                        sum = many * mony
                        he -= sum
                        zj.innerHTML = he
                    }
                }
            }

            // 判断加减数量
            let jia = document.querySelectorAll('.jia')
            let jian = document.querySelectorAll('.jian')
            let duo = document.querySelectorAll('.many')
            let oneone = document.querySelector('.oneone')
            for (let p = 0; p < duo.length; p++) {
                let duo1 = Number(duo[p].innerHTML)
                    // 加
                jia[p].onclick = function() {
                    duo1++;
                    duo[p].innerHTML = duo1
                    if (c2[p].checked == true) {
                        let money1 = document.querySelectorAll('.money1')
                        let mony = Number(money1[p].innerHTML)
                        let duo = document.querySelectorAll('.many')
                        let many = Number(duo[p].innerHTML)
                        sum = mony * many
                        he += mony
                        zj.innerHTML = he
                    }
                    axios({
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                        },
                        method: 'post',
                        url: 'http://localhost:3066/jia',
                        data: Qs.stringify({
                            jia: duo1,
                            id: divss[p].id
                        })
                    }).then((data) => {})
                }

                jian[p].onclick = function() {
                    if (c2[p].checked == true) {
                        let money1 = document.querySelectorAll('.money1')
                        let mony = Number(money1[p].innerHTML)
                        let duo = document.querySelectorAll('.many')
                        let many = Number(duo[p].innerHTML)
                        sum = mony * many
                        he -= mony
                        zj.innerHTML = he
                    }
                    if (duo1 == 1) {
                        oneone.style.display = 'block'
                        setInterval(function() {
                            oneone.style.display = 'none'
                        }, 3000)
                    } else {
                        duo1--;
                        duo[p].innerHTML = duo1
                        axios({
                            headers: {
                                'Content-Type': 'application/x-www-form-urlencoded'
                            },
                            method: 'post',
                            url: 'http://localhost:3066/jian',
                            data: Qs.stringify({
                                jian: duo1,
                                id: divss[p].id
                            })
                        }).then((data) => {})
                    }
                }
            }
        }
    })
}
ax();





jies.onclick = function() {
    let zj = document.querySelector('.total1')
    qb = zj.innerHTML
    axios({
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        method: 'post',
        url: 'http://localhost:3066/quanbu',
        data: Qs.stringify({
            qb: qb,
        })
    }).then((data) => {})
    window.location.href = 'http://localhost:3066/html/orders.html'
    let c2 = document.querySelectorAll('.shop3 input')
    let divss = document.querySelectorAll('.shop3')
    for (let i = 0; i < c2.length; i++) {
        if (c2[i].checked == true) {
            id = divss[i].id
            kg = 1;
            axios({
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                method: 'post',
                url: 'http://localhost:3066/jiessp',
                data: Qs.stringify({
                    kg: kg,
                    id: id
                })
            }).then((data) => {})
        }
        if (c2[i].checked == false) {
            id = divss[i].id
            kg = 0;
            axios({
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                method: 'post',
                url: 'http://localhost:3066/jiessp',
                data: Qs.stringify({
                    kg: kg,
                    id: id
                })
            }).then((data) => {})
        }
    }
}