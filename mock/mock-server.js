const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
//生成token的密钥
const TOKEN_SECRET = 'JiaLongLi'

module.exports = app =>{

    //使res.body能取得表单内容
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({
        extended: true
    }))

    app.get('/hello', function(req, res) {
        res.json({ custom: 'response' });
    });

    //登录
    app.post('/api/auth/login',(req,res)=>{
        const {username,password} = req.body
        if(username === 'admin'  && password === '123456'){
            const token = jwt.sign({
                //10s有效期
                exp: Math.floor(Date.now() / 1000) + 10,
                data: 'foobar'
            }, TOKEN_SECRET)

            res.json({
                code: 0,
                token
            })
        }else {
            res.sendStatus(401)
        }
    })

    app.post('/api/auth/checkToken',(req,res)=>{
        const {token} = req.body
        jwt.verify(token, TOKEN_SECRET, function(err, decoded) {
            if(err){
                res.json({
                    code:403.17,
                    msg:"身份已过期"
                })
            }else{
                res.json({
                    code:0,
                    msg:"身份有效"
                })
            }
        });
    })
}
