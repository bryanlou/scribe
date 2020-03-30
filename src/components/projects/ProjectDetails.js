import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id;
    return (
        <div>
            <div className="container section project-details">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <span className="card-title">Open Source Tool </span> 
                        <p>Seeking to automate this process, we developed Shark, a tool that scans source code to delete code related to stale, or obsolete, feature flags, leading to a cleaner, safer, more  performant, and more maintainable code base. We run Shark in an ongoing pipeline for our Android and iOS codebases, and have used it to remove around two thousand stale feature flags and their related code.</p>
                        <br/>
                        <p>When a flag becomes stale, it should be disabled in the feature flag management system and all code artifacts related to the flag need to be removed from the source code, including the now-unreachable implementation of alternative versions of the feature. This ensures improved code hygiene and avoids technical debt. </p>
                    </div>
                    <div className="card-action white length-4 grey-text">
                        <div>Posted by Bryan Lou</div>
                        <div>January 27 2020</div>
                        <div>{id}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
