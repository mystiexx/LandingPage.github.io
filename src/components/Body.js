import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import '../stylesheets/clock.css'


export const Body = React.createClass({
	render() {
		return (	
				<div className="jumbotron jumbotron-fluid">
                <div className="container"> 
                <h1 className="display-4"> Fluid Jumbotron </h1>
                <p className="lead">
                    This is a modified Jumbotron that
                    occupies
                </p>
                <div id="intro" className="view">
                <div className="mask">

                </div>
                </div>
                </div> 
                </div>
			
		)
	}
})