var phone = document.querySelector('.region-input')
var login_password = document.querySelector('.password2-input')

var login = document.querySelector('.cilck-login')
var yzm = document.querySelector('.password-input')
var xy = document.querySelector('#good')
var xy2 = document.querySelector('.good')
var huoqu = document.querySelector('.fetch-box')
var huoqu2 = document.querySelector('.fetch-box2')
var xybox = document.querySelector('.xy-box')
var bigbox = document.querySelector('.big-box-login')
var xyym = document.querySelector('.xyym')

var black1 = document.querySelector('.black1')

var zc_open = 1;
// 手机号注册
var sjzc = document.querySelector('.enroll');
var mb = document.querySelector('.mb')
    // 同意；不同意
var no = document.querySelector('.no-ty');
var yes = document.querySelector('.ty2')
var checked = 0;
var ds = 0;
var open = 0;


// 注册返回
var black = document.querySelector('#black')
var zcbox = document.querySelector('.phone-enroll')
    // 注册下一步
var next = document.querySelector('#next');
var ipt = document.querySelector('#ipt')
var mb2 = document.querySelector('.mb2')
var span = document.querySelector('.mb-box-2 span')

var nono = document.querySelector('.no')
var yesyes = document.querySelector('.yes')




console.log(phone)
var tip = document.querySelector('.tip')
    // 点击登录判断数据库内是否已经注册有账号与密码是否正确
login.onclick = function() {
    if (ds == 0) {
        axios({
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            method: 'post',
            url: 'http://localhost:3066/rel',
            data: Qs.stringify({
                login_username: phone.value,
                login_password: login_password.value
            })
        }).then((data) => {
            console.log(data)
            if (data.data == 'yes') {
                window.location.href = 'http://localhost:3066/html/index.html'
            } else {
                tip.style.display = 'block'
                setInterval(function() {
                    tip.style.display = 'none'
                }, 3000)
            }
        })
    }
}

xy2.onclick = function() {
    bigbox.style.display = 'none'
    xyym.style.display = 'block'
}
black1.onclick = function() {
        bigbox.style.display = 'block'
        xyym.style.display = 'none'
    }
    // 手机注册
sjzc.onclick = function() {
    mb.style.display = 'block'
}
no.onclick = function() {
    mb.style.display = 'none'
}
yes.onclick = function() {
        mb.style.display = 'none'
        bigbox.style.display = 'none'
        zcbox.style.display = 'block';
    }
    // 注册返回
black.onclick = function() {
        bigbox.style.display = 'block'
        zcbox.style.display = 'none';
    }
    // 注册下一步
var password = document.querySelector('.password2')
var p = 0;
var zc = /^1[3-9]{1}[0-9]{9}$/
var mima = /^[0-9]{8,16}$/
var name = ipt.value.trim();
document.addEventListener('keyup', function() {
    if (zc.test(ipt.value.trim()) && mima.test(password.value.trim())) {
        next.style.background = 'red'
        p = 1;
    } else {
        next.style.background = ''
        p = 0;
    }
})

next.onclick = function() {
    if (p == 1) {
        mb2.style.display = 'block'
        span.innerHTML = ipt.value
    }
}
nono.onclick = function() {
    mb2.style.display = 'none'
}

var zhcz = document.querySelector('.zhcz')
var zccg = document.querySelector('.zccg')
yesyes.onclick = function() {
    mb2.style.display = 'none'
    if (zc_open == 1) {
        axios({
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            method: 'post',
            url: 'http://localhost:3066/zc',
            data: Qs.stringify({
                username: ipt.value,
                password: password.value
            })
        }).then((data) => {
            if (data.data) {
                zhcz.style.display = 'block'
                setInterval(function() {
                    zhcz.style.display = 'none'
                }, 3000)
            }
        })
    }
}