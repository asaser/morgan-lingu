import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router";

import "assets/scss/material-kit-pro-react.scss?v=1.10.0";

// pages for this product
import AboutUsPage from "views/AboutUsPage/AboutUsPage.js";
import BlogPostPage from "views/BlogPostPage/BlogPostPage.js";
import BlogPostsPage from "views/BlogPostsPage/BlogPostsPage.js";
import ComponentsPage from "views/ComponentsPage/ComponentsPage.js";
import ContactUsPage from "views/ContactUsPage/ContactUsPage.js";
import EcommercePage from "views/EcommercePage/EcommercePage.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import PricingPage from "views/PricingPage/PricingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import ProductPage from "views/ProductPage/ProductPage.js";
import SectionsPage from "views/SectionsPage/SectionsPage.js";
import ShoppingCartPage from "views/ShoppingCartPage/ShoppingCartPage.js";
import SignupPage from "views/SignupPage/SignupPage.js";
import ErrorPage from "views/ErrorPage/ErrorPage.js";

import HomePage from "./pages/HomePage/HomePage";
import HowLearnPage from "./pages/HowLearnPage/howLearnPage";
import AboutPage from "./pages/AboutPage/aboutPage";

import EnglishPricePage from "./pages/PricesPage/EnglishPricePage/englishPricePage.js";
import GermanPricePage from "./pages/PricesPage/GermanPricePage/germanPricePage.js";
import NorwegianPricePage from "./pages/PricesPage/NorwegianPricePage/norwegianPricePage.js";
import RussianPricePage from "./pages/PricesPage/RussianPricePage/russianPricePage.js";
import PolishPricePage from "./pages/PricesPage/PolishPricePage/polishPricePage.js";

import PricesLanguagePage from "./pages/PricesLanguagePage/pricesLanguagePage.js";
import BuildPage from "./pages/BuildPage/buildPage.js";

import ContactPage from "./pages/ContactPage/contactPage";


var hist = createBrowserHistory();

const App = () => {
    return (
        <Router history={hist}>
            <Switch>
                <Route path="/how-learn-page" component={HowLearnPage} />
                <Route path="/about-page" component={AboutPage} />
                <Route path="/price-language-page" component={PricesLanguagePage} />

                <Route path="/english" component={EnglishPricePage} />
                <Route path="/german" component={GermanPricePage} />
                <Route path="/norwegian" component={NorwegianPricePage} />
                <Route path="/russian" component={RussianPricePage} />
                <Route path="/polish" component={PolishPricePage} />

                <Route path="/build-page" component={BuildPage} />
                <Route path="/contact-page" component={ContactPage} />

                <Route path="/about-us" component={AboutUsPage} />
                <Route path="/blog-post" component={BlogPostPage} />
                <Route path="/blog-posts" component={BlogPostsPage} />
                <Route path="/components" component={ComponentsPage} />
                <Route path="/contact-us" component={ContactUsPage} />
                <Route path="/ecommerce-page" component={EcommercePage} />
                <Route path="/landing-page" component={LandingPage} />
                <Route path="/login-page" component={LoginPage} />
                <Route path="/pricing" component={PricingPage} />
                <Route path="/profile-page" component={ProfilePage} />
                <Route path="/product-page" component={ProductPage} />
                <Route path="/sections" component={SectionsPage} />
                <Route path="/shopping-cart-page" component={ShoppingCartPage} />
                <Route path="/signup-page" component={SignupPage} />
                <Route path="/error-page" component={ErrorPage} />
                <Route path="/" component={HomePage} />
            </Switch>
        </Router>
    )
}

export default App;
