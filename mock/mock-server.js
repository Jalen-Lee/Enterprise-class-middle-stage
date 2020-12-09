const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
const chokidar = require('chokidar')
const path = require('path')
//生成token的密钥
const TOKEN_SECRET = 'JiaLongLi'

const mockDir = path.join(process.cwd(), 'mock')
module.exports = app =>{

    //使res.body能取得表单内容
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({
        extended: true
    }))

    function getToken(req,res,next){
        req.token = req.headers.authorization.split(' ').pop()
        next()
    }

    app.get('/hello', function(req, res) {
        res.json({ custom: 'response' });
    });

    //登录
    app.post('/api/auth/login',(req,res)=>{
        const {username,password} = req.body
        if(username === 'admin'  && password === '123456'){
            const token = jwt.sign({
                //1h有效期
                exp: Math.floor(Date.now() / 1000) + 10,
                data: {
                    username,password
                }
            }, TOKEN_SECRET)
            res.json({
                code: 0,
                token
            })
        }else {
            res.json({
                code: 401.1,
                msg:"密码或用户错误"
            })
        }
    })

    app.post('/api/auth/logout',getToken,(req,res)=>{
        res.json({
            code: 0,
            msg: '登出成功！'
        })
    })

    app.post('/api/auth/checkToken',getToken,(req,res)=>{
        jwt.verify(req.token, TOKEN_SECRET, function(err, decoded) {
            if(err){
                res.json({
                    code:403.17,
                    msg:"身份已过期"
                })
            }else{
                const {username,password} = decoded
                if(username === 'admin'  && password === '123456'){
                    res.json({
                        code:0,
                        msg:"身份有效"
                    })
                }else{
                    res.json({
                        code: 401.1,
                        msg:"密码或用户错误"
                    })
                }
            }
        });
    })

    //watch files, hot reload mock server
    chokidar.watch(mockDir, {
        // ignored: /mock-server/,
        // ignoreInitial: true
    }).on('all', (event, path) => {
        if (event === 'change' || event === 'add') {

        }
    })
}
