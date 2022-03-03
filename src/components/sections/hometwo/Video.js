import React, { Component } from 'react';
import $ from 'jquery'
import 'magnific-popup'

class Video extends Component {
    componentDidMount() {
        function popup() {
            $('.popup-video').magnificPopup({
                type: 'iframe'
            });
        }
        popup()
    }
    render() {
        return (
            <section className="video-section">
                <div className="container">
                    <div className="row justify-content-center justify-content-lg-end">
                        <div className="col-lg-5 col-md-8">
                            <div className="video-text pl-30">
                                <div className="section-title left-border mb-40">
                                    <span className="title-tag">intro video</span>
                                    <h2>Let’s make A farm tour from here.</h2>
                                </div>
                                <p>Over the years, a wide range of developments &amp; innovations in the Medical Cannabis have led to
            many new Cannabis Firm and services being produced.</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Video-wrap */}
                <div className="video-wrap">
                    <div className="video-bg" style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/assets/img/video-bg.jpg)" }}>
                        <div className="video-link">
                            <a rel={'external'} className="popup-video" href={"https://www.youtube.com/embed/pbiEfJd2Hpw"}>play</a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Video;