import React from 'react'
import ProjectSummary from './ProjectSummary'

const ProjectList = () => {
    return (
        <div className="project-list section">
            <ProjectSummary/>
            <div className="card z-depth-0 project-summary">
                <div className="card-content grey-text text-darken-3">
                    <span className="card-title">Cats</span>
                    <p>Posted by Bryan Lou</p>
                    <p className="grey-text">March 6 2020</p>
                </div>
            </div>

            <div className="card z-depth-0 project-summary">
                <div className="card-content grey-text text-darken-3">
                    <span className="card-title">Horses</span>
                    <p>Posted by Bryan Lou</p>
                    <p className="grey-text">February 21 2020</p>
                </div>
            </div>
        </div>
    )
}

export default ProjectList;