const User = require('../models/user')

exports.main = (req,res) => {
    User.find({ name: 'Test User' }, (error,result) => {
        if (error) return console.log(error)
        res.json({
            status: 200,
            ok: true,
            body: result.length > 0 ? result : null
        })
    })
}