require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT

app.use(express.static('public'))

app.get('/', (req, res) => {
	res.render('index.ejs')
})


app.listen(PORT, () => {
	console.log('Server is listening to port', PORT);
})