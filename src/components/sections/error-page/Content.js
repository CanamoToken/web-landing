import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Content extends Component {
    render() {
        return (
            <section className="section errorpage pt-120 pb-120">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7 text-center">
                            <img src={process.env.PUBLIC_URL + "/assets/img/banner/circle-icon.png"} alt="img" />
                        </div>
                        <div className="col-lg-5 text-center">
                            <div className="error-texts relative">
                                <h1>404</h1>
                                <h3>Ooops! That page doesn't exist!</h3>
                                <p>This file May Have Been Moved or Deleted. Be Sure to Check Your Spelling.</p>
                                <Link to="/" className="main-btn btn-filled">Back to Home</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Content;