import React from 'react';
import EntryText from './EntryText';
import Button from './Button';

function Home(props) {
    return(
        <div id="home" style={{
            display: props.display
        }}>
            <EntryText />
            <Button value="PAST PROJECTS" onClick={props.goProjects} />
            <Button value="CONTACT ME"  onClick={props.goContact} />
        </div>
    )
}

export default Home;