import React from 'react';

function ProjectNode({ title, url, source }) {
    return(
        <div className="ProjectNode">
            <img src={source} alt="project gif 1"/>
            <div>
                <h5>{title}</h5><br/>
                <a href={url}>Repository Here</a>
            </div>
        </div>
    )
}

export default ProjectNode