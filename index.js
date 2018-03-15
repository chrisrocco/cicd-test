const express = require('express')



const app = express()


app.set('port', 7001)


app.get('/hello', (req, res) => {
    res.json({
        'msg': "Hello, Node!"
    })
})


app.listen(app.get('port'), () => {
    console.log("app is listening on port " + app.get('port'))
})

module.exports = app