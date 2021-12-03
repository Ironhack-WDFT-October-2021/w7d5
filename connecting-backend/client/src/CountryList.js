import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function CountryList() {
	const [countries, setCountries] = useState([])

	useEffect(() => {
		axios.get('/countries')
			.then(response => {
				console.log(response)
				setCountries(response.data)
			})
			.catch(err => console.log(err))
	}, [])
	console.log(countries)
	return (
		<div>
			<h1>Country List 🌎</h1>
			{countries.map(country => (
				<Link to={`/${country.cca3}`} key={country.cca3}>
					<h1>{country.name.common}</h1>
				</Link>
			))}
		</div>
	)
}
