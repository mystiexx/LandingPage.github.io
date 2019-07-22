import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'


export class Grid extends React.Component {
    render() {
        return (

            <div className="container">
                <div className="row">
                    <div className="col">
                        <h3> Lecture Notes </h3>
                        <p> Here we offer Lecture notes for your use, </p>
                        <p> You can read up or either download a pdf of the note your interested in... </p>
                        <a href="" className="btn btn-primary">Learn more</a>
                    </div>
                    <div className="col">
                        <h3> Research Materials </h3>
                        <p> Here we offer research materials for your use,</p>
                        <p> You can use our available reserach materials to help make an oustanding project...</p>
                        <a href="" className="btn btn-primary">Learn more</a>
                    </div>
                    <div className="col-sm">
                        <h3> Past Questions </h3>
                        <p> Here we offer Past Questions to help you prepare for your exams... </p>
                        <a href="" className="btn btn-primary">Learn more</a>
                                         </div>
                                         </div>
                                        </div>

        ) }
    }
            