import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Preloader
const Preloader = React.lazy(() => import("./components/layouts/Preloader"));

// Pages
const Home = React.lazy(() => import("./components/pages/Home"));
const Hometwo = React.lazy(() => import("./components/pages/Hometwo"));
const Homethree = React.lazy(() => import("./components/pages/Homethree"));
const Services = React.lazy(() => import("./components/pages/Services"));
const Servicedetails = React.lazy(() => import("./components/pages/Servicedetails"));
const Whyus = React.lazy(() => import("./components/pages/Whyus"));
const Contact = React.lazy(() => import("./components/pages/Contact"));
const About = React.lazy(() => import("./components/pages/About"));
const Team = React.lazy(() => import("./components/pages/Team"));
const Teamdetails = React.lazy(() => import("./components/pages/Teamdetails"));
const Faq = React.lazy(() => import("./components/pages/Faq"));
const Cart = React.lazy(() => import("./components/pages/Cart"));
const Shop = React.lazy(() => import("./components/pages/Shop"));
const Shopleft = React.lazy(() => import("./components/pages/Shopleft"));
const Shopdetails = React.lazy(() => import("./components/pages/Shopdetails"));
const Blogstandard = React.lazy(() => import("./components/pages/Blogstandard"));
const Bloggrid = React.lazy(() => import("./components/pages/Bloggrid"));
const Blogdetails = React.lazy(() => import("./components/pages/Blogdetails"));
const Straingrid = React.lazy(() => import("./components/pages/Straingrid"));
const Strainmasonry = React.lazy(() => import("./components/pages/Strainmasonry"));
const Strainslider = React.lazy(() => import("./components/pages/Strainslider"));
const Straindetails = React.lazy(() => import("./components/pages/Straindetails"));
const Error = React.lazy(() => import("./components/pages/Error"));


function App() {
  return (
    <Router basename={'/themes/themeforest/react/cannaweed'}>
      <Suspense fallback={<div></div>}>
        <Preloader />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home-v2" component={Hometwo} />
          <Route exact path="/home-v3" component={Homethree} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/service-details" component={Servicedetails} />
          <Route exact path="/why-us" component={Whyus} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/about" component={About} />
          <Route exact path="/team" component={Team} />
          <Route exact path="/team-details/:id" component={props => (<Teamdetails {...props} key={window.location.pathname}/>)} />
          <Route exact path="/faq" component={Faq} />
          <Route exact path="/cart" component={Cart} />
          <Route path="/shop" exact component={Shop} />
          <Route exact path="/shop/cat/:catId" component={props => (<Shop {...props} key={window.location.pathname}/>)} />
          <Route exact path="/shop-left" component={Shopleft} />
          <Route exact path="/shop-details/:id" component={props => (<Shopdetails {...props} key={window.location.pathname}/>)} />
          <Route path="/blog-standard" exact component={Blogstandard} />
          <Route exact path="/blog/cat/:catId" component={props => (<Blogstandard {...props} key={window.location.pathname}/>)} />
          <Route exact path="/blog/user/:userId" component={props => (<Blogstandard {...props} key={window.location.pathname}/>)} />
          <Route exact path="/blog/tag/:tagId" component={props => (<Blogstandard {...props} key={window.location.pathname}/>)} />
          <Route exact path="/blog-grid" component={Bloggrid} />
          <Route exact path="/blog-details/:id" component={props => (<Blogdetails {...props} key={window.location.pathname}/>)} />
          <Route exact path="/strain-grid" component={Straingrid} />
          <Route exact path="/strain-masonary" component={Strainmasonry} />
          <Route exact path="/strain-slider" component={Strainslider} />
          <Route exact path="/strain-details/:id" component={props => (<Straindetails {...props} key={window.location.pathname}/>)} />
          <Route exact path="/error-page" component={Error} />
          <Route exact component={Error} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
