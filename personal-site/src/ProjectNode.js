import React from 'react';

function ProjectNode({ title, url, source }) {
    return(
        <div className="ProjectNode">
            <img src={source} alt="project gif 1"/>
            <div>
                <h6>{title}</h6>
                <a href={url}>Repository Here</a>
            </div>
        </div>
    )
}

export default ProjectNode