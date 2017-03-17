import React from 'react';

class EmailForm extends React.Component {
    constructor() {
        super()
        this.sendEmail = this.sendEmail.bind(this);
    }

    sendEmail(event) {
        event.preventDefault();
        var email = {
            timestamp: Date.now(),
            subject: this.emailSubject.value,
            body: this.emailBody.value,
        }
        this.props.createEmail(email);
        this.form.reset();
    }

    render() {
        return (
            <form ref={(input) => this.form = input} className="email">
                <input ref={(input) => this.emailSubject = input} type="text" placeholder="Subject"/>
                <textarea  ref={(input) => this.emailBody = input} cols="50" rows="10" placeholder="Email Text">

                </textarea>
                <button onClick={(e) => this.sendEmail(e)}>Send Email</button>
            </form>
        )
    }
}

export default EmailForm;