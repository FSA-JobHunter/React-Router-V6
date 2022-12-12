const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 3000

app.listen(port, ()=>console.log(`App is listening at port:${port}`))


app.use('/dist', express.static('dist'));

app.get('/*', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'index.html'));
  });
