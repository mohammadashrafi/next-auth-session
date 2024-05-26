const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

exports.login = (req, res) => {
    console.log('req', req.body)
    const email = req.body.email;
    const password = req.body.password;

    const cookie = req.cookies.token;
    if (cookie === undefined) {
        // no: set a new cookie
        if (email === 'test@test.com' && password === '1234') {
            const token = jwt.sign({
                email: email,
                password: password.toString()
            }, 'Fp^,)q5$2Z1WTL$XrMD9:[E', {
                expiresIn: '1d'
            });

            console.log('token',token)

            let options = {
                maxAge: 1000 * 60 * 15, // would expire after 15 minutes
                httpOnly: true, // The cookie only accessible by the web server
                signed: false // Indicates if the cookie should be signed
            }

            // Set cookie
            res.cookie('token', token, options) // options is optional
            res.status(201).json({
                id:11,
		name:"ashrafi",
		userName:"m.ashrafi",
		token:token
            })
        }
    } else {
        // yes, cookie was already present
        console.log('cookie exists', cookie);
        console.log('cookie', cookie)
        res.status(204).json({
            message: 'Your Login Success'
        })
    }
}
