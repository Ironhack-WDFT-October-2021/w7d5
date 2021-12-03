import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function CountryDetails() {

	const { cca3 } = useParams()
	console.log(cca3)

	const [country, setCountry] = useState(null)

	useEffect(() => {
		axios.get(`/countries/${cca3}`)
			.then(response => {
				console.log(response)
				setCountry(response.data)
			})
			.catch(err => console.log(err))
	}, [])

	if (country === null) return <></>
	return (
		<h1>
			{country.name.common}
		</h1>
	)
}
