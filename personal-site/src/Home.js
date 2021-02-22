import React from 'react';
import EntryText from './EntryText';
import Button from './Button';

function Home(props) {
    return(
        <div id="home" style={{
            display: props.display
        }}>
            <EntryText />
            <Button value="Past Projects" color="rgb(187, 59, 81)" onClick={props.goProjects} />
            <Button value="Contact Me"  color="gray" onClick={props.goContact} />
        </div>
    )
}

export default Home;