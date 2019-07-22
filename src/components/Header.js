import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'


export const Header = React.createClass({
    render () {
        return (		
            <div> 
                <nav className="navbar navbar-light bg-light">
            <span className="navbar-brand mb-0 h1">TimeMaster </span>
            <form className="form-inline">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" />
            <button className="btn btn-primary"> Search </button>
            </form>
                </nav>  
            </div>
        )
        
    }

 })

