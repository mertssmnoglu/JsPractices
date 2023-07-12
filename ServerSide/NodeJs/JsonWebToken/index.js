const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')
require('dotenv-safe/config')

app.use(express.json())

app.post('/login', async (req, res) => {
    const { email, password } = req.body
    const admin = {
        username: 'admin',
        email: 'admin@admin.com',
        password: 'admin'
    }
    if (email !== admin.email || password !== admin.password)
        return res.status(401).json({
            error: 'Unauthorized, given datas are invalidate',
            statusCode: '401'
        })

    const accessToken = jwt.sign(
        { username: admin.username, email: admin.email },
        process.env.JWT_ACCESS_TOKEN,
        { expiresIn: '1m' }
    )

    const refreshToken = jwt.sign(
        { username: admin.username, email: admin.email },
        process.env.JWT_REFRESH_TOKEN
    )

    return res.status(200).json({ accessToken, refreshToken })
    /* 
    Admin hesabı giriş yaptığında
    */
})

app.listen(5000, () => {
    console.log('Uygulama 5000 portunda dinlemede')
})
