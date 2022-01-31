/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Grid from '@material-ui/core/Grid';

// core components
import Header from "components/Header/Header.js";
import HeaderLinksMorganLingu from "components/Header/HeaderLinksMorganLingu.js";
import Parallax from "components/Parallax/Parallax.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import PinDrop from "@material-ui/icons/PinDrop";
import FacebookIcon from '@material-ui/icons/Facebook';
// sections for this page
import SectionNewAds from "views/SectionsPage/Sections/MainPage/SectionNewAds.js";
import SectionDescription from "views/SectionsPage/Sections/MainPage/SectionDescription.js";
import SectionComponents from "views/SectionsPage/Sections/MainPage/SectionComponents.js";
import SectionContent from "views/SectionsPage/Sections/MainPage/SectionContent.js";
import SectionContact from "views/SectionsPage/Sections/MainPage/SectionContact.js";
import SectionExamples from "views/SectionsPage/Sections/MainPage/SectionExamples.js";
// import SectionFreeDemo from "views/PresentationPage/Sections/SectionFreeDemo.js";
// import SectionOverview from "views/PresentationPage/Sections/SectionOverview.js";
// import SectionPricing from "views/PresentationPage/Sections/SectionPricing.js";

import presentationStyle from "assets/jss/material-kit-pro-react/views/presentationStyle.js";

import logo from "assets/img/icons/iconMorganLingu64.png";

import SectionFooter from "views/SectionsPage/Sections/Footer/SectionFooter.js";


const useStyles = makeStyles(presentationStyle);

export default function PresentationPage() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    <div>
      <Header
        // color="transparent"
        brand="MorganLingu"
        links={<HeaderLinksMorganLingu/>}
        fixed
        color="dark"
        // changeColorOnScroll={{
        //   height: 300,
        //   color: "info",
        // }}
        // {...rest}
      />

      <Parallax
        image={require("assets/img/bgMainPage.jpg").default}
        className={classes.parallax}
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 style={{fontSize: '80px'}}>
                  MorganLingu
                  <span style={{
                    backgroundColor: '#fff',
                    borderRadius: '20%',
                    marginLeft: '15px',
                    padding: '0px 5px 5px 5px'
                    }}
                  >
                    <img src={logo} alt="Logo" />
                  </span>
                </h1>
                <h3 style={{fontWeight: '700', fontSize: '35px'}}>
                  Szkoła językowa
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <SectionNewAds />
        <SectionDescription />
        <SectionComponents />
        {/* <SectionContent /> */}
        <SectionContact />
        <SectionExamples />
        {/* <SectionFreeDemo />
        <SectionOverview /> */}
      </div>
      {/* <SectionPricing /> */}

      <SectionFooter />

    </div>
  );
}
