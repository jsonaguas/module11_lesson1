import  { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div>
                <section className="foot">
                    <h3>Contact:</h3>
                    <p>Send me some fanmail! <br />
                        <a className="link" href="#">📧 moo.deng@hippo.com</a>
                    </p>
                </section>
            </div>
        );
    }
}

export default Contact;