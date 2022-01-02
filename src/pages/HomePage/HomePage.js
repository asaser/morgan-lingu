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
import SectionDescription from "views/PresentationPage/Sections/SectionDescription.js";
import SectionComponents from "views/PresentationPage/Sections/SectionComponents.js";
import SectionNewAds from "views/SectionsPage/Sections/MainPage/SectionNewAds.js";
import SectionContent from "views/PresentationPage/Sections/SectionContent.js";
import SectionSections from "views/PresentationPage/Sections/SectionSections.js";
import SectionExamples from "views/PresentationPage/Sections/SectionExamples.js";
import SectionFreeDemo from "views/PresentationPage/Sections/SectionFreeDemo.js";
import SectionOverview from "views/PresentationPage/Sections/SectionOverview.js";
import SectionPricing from "views/PresentationPage/Sections/SectionPricing.js";

import presentationStyle from "assets/jss/material-kit-pro-react/views/presentationStyle.js";

import logo from "assets/img/icons/iconMorganLingu64.png";

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
        links={<HeaderLinksMorganLingu dropdownHoverColor="info" />}
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
                <h1>
                  MorganLingu
                  <span>
                    <img src={logo} alt="Logo" />
                  </span>
                </h1>
                <h3 className={classes.title}>
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
        <SectionContent />
        <SectionSections />
        <SectionExamples />
        <SectionFreeDemo />
        <SectionOverview />
      </div>
      <SectionPricing />
      <Footer
        content={
          <div style={{marginTop: "30px"}}>
            <Grid container>
              <Grid p xs={12} md={5} style={{fontWeight: "bold"}}>
                <p style={{fontSize: "1.5em"}}>Jeśli masz pytania - zadzwoń do nas!</p>
                <p style={{fontSize: "1.5em"}}>+48 604 678 347</p>
              </Grid>
              <Grid p xs={12} md={5} style={{fontWeight: "bold"}}>
                <p style={{fontSize: "1.5em"}}>Lub napisz!</p>
                <p style={{fontSize: "1.5em"}}>morganlingu@gmail.com</p>
              </Grid>
              <Grid p xs={6} md={2}>
                <a
                  href="https://www.facebook.com/morganLingu"
                  target="_blank"
                >
                    <FacebookIcon />
                </a>  
              </Grid>
              <Grid xs={12} md={12}>
                <div style={{fontSize: "15px", justifyContent: "center"}}>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
              </Grid>
            </Grid>
          </div>
        }
      />
    </div>
  );
}
