const express = require('express');
const app = express()

const countries = require('./countries.json')

console.log(countries)

app.get('/countries', (req, res) => {
	res.json(countries)
})

app.get('/countries/:cca3', (req, res) => {
	const country = countries.find(country => country.cca3 === req.params.cca3)
	res.json(country)
})

app.listen(5555, () => console.log('Server listening'))