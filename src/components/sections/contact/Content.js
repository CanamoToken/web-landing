import React from 'react';
import Contacthelper from '../../../helper/Contacthelper';
import ReCAPTCHA from "react-google-recaptcha";
import { Alert } from 'react-bootstrap';

class Content extends Contacthelper {
    render() {
        return (
            <section className="contact-section with-map-bg pt-120 pb-120">
                <div className="container">
                    <div className="contact-form-wrapper">
                        <div className="row no-gutters align-items-center align-items-lg-start justify-content-center">
                            <div className="col-lg-5 col-md-5">
                                <div className="contact-info-list">
                                    <div className="info-box">
                                        <div className="icon">
                                            <i className="pe-7s-home" />
                                        </div>
                                        <div className="content">
                                            <h4>Office Address</h4>
                                            <p>19/A, Cirikon City hall Tower <br /> New York, NYC</p>
                                        </div>
                                    </div>
                                    <div className="info-box">
                                        <div className="icon">
                                            <i className="pe-7s-call" />
                                        </div>
                                        <div className="content">
                                            <h4>Phone Number</h4>
                                            <p>+987 876 7765 76 519 <br /> 987 (876) 76 78 89 9</p>
                                        </div>
                                    </div>
                                    <div className="info-box">
                                        <div className="icon">
                                            <i className="pe-7s-comment" />
                                        </div>
                                        <div className="content">
                                            <h4>Email address</h4>
                                            <p>info@yourwebsite.com <br /> jobs.example@mail.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-7">
                                <div className="contact-form">
                                    <form onSubmit={this.handleSubmit} method="GET">
                                        <div className="row padding-custom">
                                            <div className="col-12 col-lg-6">
                                                <div className="input-group mb-10">
                                                    <div className="icon">
                                                        <i className="fal fa-user" />
                                                    </div>
                                                    <input type="text" placeholder="Your name" name="name" value={this.state.name} onChange={this.onNameChange} required />
                                                </div>
                                            </div>
                                            <div className="col-12 col-lg-6">
                                                <div className="input-group mb-10">
                                                    <div className="icon">
                                                        <i className="fal fa-envelope" />
                                                    </div>
                                                    <input type="email" placeholder="Your email" name="email" value={this.state.email} onChange={this.onEmailChange} required />
                                                </div>
                                            </div>
                                            <div className="col-12 col-lg-6">
                                                <div className="input-group mb-10">
                                                    <div className="icon">
                                                        <i className="fal fa-phone" />
                                                    </div>
                                                    <input type="text" placeholder="Your Phone" name="phone" value={this.state.phone} onChange={this.onPhoneChange} required />
                                                </div>
                                            </div>
                                            <div className="col-12 col-lg-6">
                                                <div className="input-group mb-10">
                                                    <div className="icon">
                                                        <i className="fal fa-list" />
                                                    </div>
                                                    <input type="text" placeholder="Your Subject" name="subject" value={this.state.subject} onChange={this.onSubjectChange} required />
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="input-group textarea mb-10">
                                                    <div className="icon">
                                                        <i className="fal fa-edit" />
                                                    </div>
                                                    <textarea placeholder="Enter message" name="message" value={this.state.message} onChange={this.onMessageChange} required />
                                                </div>
                                            </div>
                                            <div className="col-12 text-center">
                                                <ReCAPTCHA
                                                    sitekey="6LdxUhMaAAAAAIrQt-_6Gz7F_58S4FlPWaxOh5ib"
                                                    onChange={this.reCaptchaLoaded.bind(this)}
                                                    size="invisible"
                                                />
                                                <button type="submit" className="main-btn btn-filled">Get A QUote</button>
                                                {/* Form Messages */}
                                                <Alert variant="success" className="d-none mt-3 mb-0" id="server_response_success">
                                                    <strong>Success!</strong> Contact form has been successfully submitted.
                                                </Alert>
                                                <Alert variant="danger" className="d-none mt-3 mb-0" id="server_response_danger">
                                                    <strong>Oops!</strong> Something bad happened. Please try again later.
                                                </Alert>
                                                {/* Form Messages */}
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="contact-maps">
                        <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d180508.00515044518!2d90.61153473006058!3d23.544910075716373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1592212793858!5m2!1sen!2sbd">
                        </iframe>
                    </div>
                </div>
            </section>
        );
    }
}

export default Content;