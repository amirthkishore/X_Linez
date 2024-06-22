import { ErrorMessage, Field, Form, Formik } from 'formik';
import { Component } from 'react';
import * as Yup from 'yup';

interface FormValues {
  name: string;
  email: string;
  message: string;
}

export class Contactus extends Component {
  initialValues: FormValues = {
    name: '',
    email: '',
    message: '',
  };

  validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    message: Yup.string().required('Message is required'),
  });

  handleSubmit = (values: FormValues) => {
    if (this.validationSchema.isValidSync(values)) {
      console.log('Contact Information:', values);
      this.sentMailEvent(values);
      alert('Message Sent successfully');
    } else {
      alert('Enter valid input');
    }
  };

  sentMailEvent = (values: FormValues) => {
    const mailtoLink = `mailto:support@thexlinez.com?subject=New Message from ${values.name}&body=${values.message}\n\nFrom: ${values.email}`;
    console.log(mailtoLink);

    const emailWindow = window.open(mailtoLink, '_blank');

    if (!emailWindow || emailWindow.closed || typeof emailWindow.closed === 'undefined') {
      alert('Please make sure your browser allows pop-ups for sending emails.');
    }
  };

  render() {
    return (
      <>
        <div className="pt-5 mt-5 mb-5 pb-5">
          <div className="container">
            <div className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center pt-5 pb-5">
              <div className="col-12 col-lg-6" data-aos="fade-down">
                <img
                  className="img-fluid rounded"
                  loading="lazy"
                  src="../../assets/images/working-company.jpg"
                  alt="logistics tracking"
                />
              </div>

              <div className="col-12 col-lg-6" data-aos="fade-down">
                <div className="row justify-content-xl-center">
                  <div className="col-12 col-xl-11">
                    <h3 className="mb-4 display-6" style={{ color: '#a40000' }}>
                      Get Started
                    </h3>
                    <p className="text-secondary p-0">
                      We're always on the lookout to work with new clients. If you're
                      interested in working with us, please get in touch in one of the
                      following ways.
                    </p>
                    <Formik
                      initialValues={this.initialValues}
                      validationSchema={this.validationSchema}
                      onSubmit={this.handleSubmit}
                    >
                      {({ touched, errors }) => (
                        <Form className="form p-0">
                          <div className="username">
                            <Field
                              type="text"
                              name="name"
                              style={{ Color: "red" }}
                              placeholder="Enter your Name"
                              className={touched.name && errors.name ? 'input-error' : ''}
                            />
                            <ErrorMessage name="name" component="div" className="error-message p-1" />
                          </div>
                          <div className="useremail">
                            <Field
                              type="email"
                              name="email"
                              placeholder="Enter your email"
                              className={touched.email && errors.email ? 'input-error' : ''}
                            />
                            <ErrorMessage name="email" component="div" className="error-message p-1" />
                          </div>
                          <div className="usermessage">
                            <Field
                              as="textarea"
                              name="message"
                              placeholder="Enter your message"
                              className={touched.message && errors.message ? 'input-error' : ''}
                            />
                            <ErrorMessage name="message" component="div" className="error-message" />
                          </div>
                          <div className="usersubmit">
                            <input type="submit" value="Send Message" />
                          </div>
                        </Form>
                      )}
                    </Formik>

                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Contactus;
