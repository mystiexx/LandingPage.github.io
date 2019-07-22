import React from 'react'
import  { Header } from './Header'
import { Body } from './Body'
import { Grid } from './Grid'


	
export const App = React.createClass({
	render() {
		return (
			<div> 
			<Header />	
			<Body />,
			<Grid />
			</div>
		)
	}
})