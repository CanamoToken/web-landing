import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Headerthree';
import Breadcrumbs from '../layouts/Breadcrumbs';
import Footer from '../layouts/Footertwo';
import Content from '../sections/error-page/Content';

const pagelocation = 'Error 404'

class Error extends Component {
    render() {
        return (
            <Fragment>
            <MetaTags>
                <title>Cannaweed - React Template | {pagelocation}</title>
                <meta
                    name="description"
                    content="#"
                />
            </MetaTags> 
            <Header/>
            <Breadcrumbs breadcrumb={{ pagename: pagelocation }} />
            <Content/>
            <Footer footer={{ style:"footer-style-three", logo:"assets/img/logo.png" }}/>
        </Fragment>
        );
    }
}

export default Error;