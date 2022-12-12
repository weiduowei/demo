const express = require('express')
const { db } = require('../db/db')
const router = express.Router()

// 注册账号放入数据库
router.post('/zc', (req, res) => {
    let { username, password } = req.body
    const sql3 = `select * from user where username='${username}'`
    db.query(sql3, (err, data) => {
        if (err) return console.log(err)
        if (data[0]) {
            res.send(data)
        } else {
            const zc = `insert into user (username,password) values (${username},${password}) `
            db.query(zc, (err, data) => {
                if (err) return console.log(err);
            })
        }
    })
})
// 对比将数据库内的账号后登录
router.post('/rel', (req, res) => {
    let { login_username, login_password } = req.body
    const sql = `select * from user where username='${login_username}' and password='${login_password}'`
    db.query(sql, (err, data) => {
        if (err) return console.log(err)
        if (data[0]) {
            res.send('yes')
        } else {
            res.send('no')
        }
    })
})
// 网页内容链接数据库进行操作
router.post('/index', (req, res) => {
    // let { img, money } = req.body
    const sql4 = `select * from kkkk`
    db.query(sql4, (err, data) => {
        if (err) return console.log(err)
        if (data[0]) {
            res.send(data)
        }
    })
    return;
})
// 轮播图
router.post('/index/ban', (req, res) => {
    // let { img, money } = req.body
    const sql6 = `select * from banner`
    db.query(sql6, (err, ban) => {
        if (err) return console.log(err)
        if (ban[0]) {
            res.send(ban)
        }
    })
})
// 轮播后图片详情
router.post('/index/ph', (req, res) => {
    const sql6 = `select * from index_photo`
    db.query(sql6, (err, data) => {
        if (err) return console.log(err)
        if (data[0]) {
            res.send(data)
        }
    })
})





// 购物车选择链接数据库
router.post('/xqy', (req, res) => {
    // let { img, money } = req.body
    const sql5 = `select * from buy`
    db.query(sql5, (err, data) => {
        if (err) return console.log(err)
        if (data[0]) {
            res.send(data)
        }
    })
})


router.post('/jj', (req, res) => {
    let { id } = req.body
    const sql5 = `select * from kkkk where id=${id}`
    db.query(sql5, (err, data) => {
        if (err) return console.log(err)
        if (data[0]) {
            res.send(data)
        }
    })
})

router.post('/shop', (req, res) => {
    // let { img, money } = req.body
    const sql5 = `select * from buy where mach>0`
    db.query(sql5, (err, data) => {
        if (err) return console.log(err)
        res.send(data)
    })
})

router.post('/orders', (req, res) => {
    const sql5 = `select * from buy where kg>0`
    db.query(sql5, (err, data) => {
        if (err) return console.log(err)
        if (data[0]) {
            res.send(data)
        }
    })
})

// 猜你喜欢
router.post('/love', (req, res) => {
    // let { img, money } = req.body
    const sql8 = `select * from love`
    db.query(sql8, (err, data) => {
        if (err) return console.log(err)
        if (data[0]) {
            res.send(data)
        }
    })
})
// 加入购物车

router.post('/buy', (req, res) => {
    let { id, sl } = req.body
    const sql5 = `select * from buy where id=${id}`
    db.query(sql5, (err, data) => {
        if (err) return console.log(err)
        if (data[0]) {
            res.send(data)
            const sql8 = `update buy set mach=${sl} where id=${id}`
            db.query(sql8, (err, data) => {
                if (err) return console.log(err)
                if (data[0]) {
                    res.send(data)
                }
            })
        }
    })
})

// 加
router.post('/jia', (req, res) => {
    let { jia, id } = req.body
    const sql8 = `update buy set mach=${jia} where id=${id}`
    db.query(sql8, (err, data) => {
        if (err) return console.log(err)
        if (data[0]) {
            res.send(data)
        }
    })
})
// 减
router.post('/jian', (req, res) => {
    let { jian, id } = req.body
    const sql8 = `update buy set mach=${jian} where id=${id}`
    db.query(sql8, (err, data) => {
        if (err) return console.log(err)
        if (data[0]) {
            res.send(data)
        }
    })
})
// 总价


// 删除节点
router.post('/shanchu', (req, res) => {
    let { id, mach, kg } = req.body
    const sql5 = `select * from buy where id=${id}`
    db.query(sql5, (err, data) => {
        if (err) return console.log(err)
        if (data[0]) {
            res.send(data)
            const sql8 = `update buy set mach=${mach},kg=${kg} where id=${id}`
            db.query(sql8, (err, data) => {
                if (err) return console.log(err)
                if (data[0]) {
                    res.send(data)
                }
            })
        }
    })
})
// 总价传入数据库
router.post('/quanbu', (req, res) => {
    let { qb } = req.body
    const sql8 = `update buy set more=${qb}`
    db.query(sql8, (err, data) => {
        if (err) return console.log(err)
        if (data[0]) {
            res.send(data)
        }
    })
})
router.post('/jiessp', (req, res) => {
    let { kg, id } = req.body
    const sql8 = `update buy set kg=${kg} where id=${id}`
    db.query(sql8, (err, data) => {
        if (err) return console.log(err)
        if (data[0]) {
            res.send(data)
        }
    })
})
// 传入订单
router.post('/ddan', (req, res) => {
    let { id, zj, tj, cg } = req.body
    const sql5 = `select * from buy where id=${id}`
    db.query(sql5, (err, data) => {
        if (err) return console.log(err)
        if (data[0]) {
            res.send(data)
            const sql8 = `update buy set qb=${zj},tj=${tj},cg=${cg} where id=${id}`
            db.query(sql8, (err, data) => {
                if (err) return console.log(err)
                if (data[0]) {
                    res.send(data)
                }
            })
            const sql9 = `update buy set cg=${cg} where id=${id}`
            db.query(sql9, (err, data) => {
                if (err) return console.log(err)
                if (data[0]) {
                    res.send(data)
                }
            })
        }
    })
})
// 待支付
router.post('/ddan2', (req, res) => {
    let { id, zj, tj, fk } = req.body
    const sql5 = `select * from buy where id=${id}`
    db.query(sql5, (err, data) => {
        if (err) return console.log(err)
        if (data[0]) {
            res.send(data)
            const sql8 = `update buy set qb=${zj},tj=${tj},fk=${fk} where id=${id}`
            db.query(sql8, (err, data) => {
                if (err) return console.log(err)
                if (data[0]) {
                    res.send(data)
                }
            })
        }
    })
})
// 订单页
router.post('/jiesuan', (req, res) => {
    const sql8 = `select * from buy where tj>0`
    db.query(sql8, (err, data) => {
        if (err) return console.log(err)
        if (data[0]) {
            res.send(data)
        }
    })
})
// 已完成

router.post('/ok', (req, res) => {
    const sql8 = `select * from buy where cg>0`
    db.query(sql8, (err, data) => {
        if (err) return console.log(err)
        if (data[0]) {
            res.send(data)
        }
    })
})
// 待付款订单
router.post('/fk', (req, res) => {
    const sql8 = `select * from buy where fk>0`
    db.query(sql8, (err, data) => {
        if (err) return console.log(err)
        if (data[0]) {
            res.send(data)
        }
    })
})
// 全部删除
router.post('/sc1', (req, res) => {
    let { id, qx, tj, fk, cg } = req.body
    const sql5 = `select * from buy where id=${id}`
    db.query(sql5, (err, data) => {
        if (err) return console.log(err)
        if (data[0]) {
            res.send(data)
            const sql8 = `update buy set tj=${tj},qx=${qx} where id=${id}`
            db.query(sql8, (err, data) => {
                if (err) return console.log(err)
                if (data[0]) {
                    res.send(data)
                }
            })
            const sql9 = `update buy set fk=${fk},cg=${cg} where id=${id}`
            db.query(sql9, (err, data) => {
                if (err) return console.log(err)
                if (data[0]) {
                    res.send(data)
                }
            })
        }
    })
})
// 待付款删除
router.post('/sc2', (req, res) => {
    let { id, qx, tj, fk } = req.body
    const sql5 = `select * from buy where id=${id}`
    db.query(sql5, (err, data) => {
        if (err) return console.log(err)
        if (data[0]) {
            res.send(data)
            const sql8 = `update buy set tj=${tj},qx=${qx} where id=${id}`
            db.query(sql8, (err, data) => {
                if (err) return console.log(err)
                if (data[0]) {
                    res.send(data)
                }
            })
            const sql9 = `update buy set fk=${fk} where id=${id}`
            db.query(sql9, (err, data) => {
                if (err) return console.log(err)
                if (data[0]) {
                    res.send(data)
                }
            })
        }
    })
})
// 删除成功订单
router.post('/sc3', (req, res) => {
    let { id, qx, tj, cg } = req.body
    const sql5 = `select * from buy where id=${id}`
    db.query(sql5, (err, data) => {
        if (err) return console.log(err)
        if (data[0]) {
            res.send(data)
            const sql8 = `update buy set tj=${tj},qx=${qx} where id=${id}`
            db.query(sql8, (err, data) => {
                if (err) return console.log(err)
                if (data[0]) {
                    res.send(data)
                }
            })
            const sql9 = `update buy set cg=${cg} where id=${id}`
            db.query(sql9, (err, data) => {
                if (err) return console.log(err)
                if (data[0]) {
                    res.send(data)
                }
            })
        }
    })
})
// 取消
router.post('/qxx', (req, res) => {
    const sql8 = `select * from buy where qx>0`
    db.query(sql8, (err, data) => {
        if (err) return console.log(err)
        if (data[0]) {
            res.send(data)
        }
    })
})

// 删除取消
router.post('/sc44', (req, res) => {
    let { id, qx, tj, cg } = req.body
    const sql5 = `select * from buy where id=${id}`
    db.query(sql5, (err, data) => {
        if (err) return console.log(err)
        if (data[0]) {
            res.send(data)
            const sql8 = `update buy set tj=${tj},qx=${qx} where id=${id}`
            db.query(sql8, (err, data) => {
                if (err) return console.log(err)
                if (data[0]) {
                    res.send(data)
                }
            })
            const sql9 = `update buy set cg=${cg} where id=${id}`
            db.query(sql9, (err, data) => {
                if (err) return console.log(err)
                if (data[0]) {
                    res.send(data)
                }
            })
        }
    })
})









module.exports = {
    router
}