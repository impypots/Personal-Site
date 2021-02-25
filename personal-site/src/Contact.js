import React from 'react';

function Contact(props) {
    return(
        <div id="contact" style={{
            display: props.display
        }}>
            <h1>Say Hello!</h1>
            <h5>Feel free to email me below. Alternatively, you are welcome to call or text me at (615) 318-7701.</h5>
            <form action="MAILTO:impypots@gmail.com" method="post" enctype="text/plain">
            <label for="name">Name: </label>
            <input type="text" id="name" name="user"/>
            <label htmlFor=""></label>


            </form>
        </div>
    )
}

export default Contact;