import React, { ChangeEvent, FormEvent } from 'react';

interface State {
  name: string;
  email: string;
  subject: string;
  message: string;
  formSubmitted: boolean;
}

class ContactForm extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: '',
      formSubmitted: false
    };
  }

  handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // You can handle form submission logic here, e.g., sending form data to a server
    this.setState({ formSubmitted: true });
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      ...prevState,
      [name]: value
    }));
  }

  render() {
    const { name, email, subject, message, formSubmitted } = this.state;
    return (
      <div>
        <a href="https://colorlib.com/wp/templates/">
          <img src="https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-push-logo.png" alt="Colorlib logo" />
        </a>
        <h1 style={{ textAlign: 'center' }}>Thank you for using our template!</h1>
        <p style={{ textAlign: 'center' }}>For more awesome templates please visit <strong><a href="https://colorlib.com/wp/templates/">Colorlib</a></strong>.</p>
        <section className="ftco-section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-6 text-center mb-5">
                <h2 className="heading-section">Contact Form #07</h2>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="wrapper">
                  <div className="row no-gutters">
                    <div className="col-md-6 d-flex align-items-stretch">
                      <div className="contact-wrap w-100 p-md-5 p-4 py-5">
                        <h3 className="mb-4">Write us</h3>
                        <form onSubmit={this.handleSubmit} className="contactForm">
                          <div className="row">
                            <div className="col-md-12">
                              <div className="form-group">
                                <input type="text" className="form-control" name="name" value={name} onChange={this.handleChange} placeholder="Name" required />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-group">
                                <input type="email" className="form-control" name="email" value={email} onChange={this.handleChange} placeholder="Email" required />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-group">
                                <input type="text" className="form-control" name="subject" value={subject} onChange={this.handleChange} placeholder="Subject" required />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-group">
                                <textarea name="message" className="form-control" value={message} onChange={this.handleChange} cols={30} rows={6} placeholder="Message" required></textarea>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-group">
                                <button type="submit" className="btn btn-primary">Send Message</button>
                              </div>
                            </div>
                            {formSubmitted && <div className="col-md-12">Your message was sent, thank you!</div>}
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default ContactForm;
