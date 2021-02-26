import React from 'react';
import emailjs from 'emailjs-com';

function Contact(props) {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_qc5ya8e', 'template_i816mz3', e.target, 'user_qlo8F25xtWkwusQy6gyGG')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
          alert("Something happened!")
    }

    return(
        <div id="contact" style={{
            display: props.display
        }}>
            <h1>Say Hello!</h1>
            <h5>Feel free to email me below. Put something else here later lol.</h5>
            <form onSubmit={sendEmail}>
                <label htmlFor="name">Name: </label>
                <input type="text" name="name" /><br/>
                <label htmlFor="email">Email: </label>
                <input type="text" name="email" /><br/>
                <label htmlFor="email">Subject: </label>
                <input type="text" name="subject" /><br/>
                <label htmlFor="message">Message: </label><br/>
                <textarea name="message" id="" cols="30" rows="10" ></textarea><br/>
                <input type="submit" value="send email"/>


            </form>
        </div>
    )
}

export default Contact;