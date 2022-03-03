import React from 'react';
import HeaderComponent from '../../helper/Navhelper';

class Backtotop extends HeaderComponent {
    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    render() {
        const className = this.state.stickyHeader ? 'active' : '';
        return (
            <div className="go-top-area">
                <div className="go-top-wrap">
                    <div className="go-top-btn-wrap">
                        <div className={`go-top-btn go-top ${className}`} id="backToTop" onClick={() => this.scrollToTop()}>
                            <i className="fal fa-angle-double-up" />
                            <i className="fal fa-angle-double-up" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Backtotop;