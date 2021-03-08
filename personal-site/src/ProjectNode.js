import React from 'react';

function ProjectNode({ title, url, source }) {
    return(
        <div className="ProjectNode">
            <div className="gifImage" style={{
                backgroundImage: `url(${source})`
            }}></div>
            <div>
                <h6>{title}</h6>
                <a href={url}>Repository Here</a>
            </div>
        </div>
    )
}

export default ProjectNode