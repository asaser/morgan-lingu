import React from "react";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router";

import "assets/scss/material-kit-pro-react.scss?v=1.10.0";

// pages for this product
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

                <Route path="/" component={HomePage} />
            </Switch>
        </Router>
    )
}

export default App;
