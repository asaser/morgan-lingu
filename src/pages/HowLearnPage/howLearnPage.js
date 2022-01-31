
/*eslint-disable*/ 
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Grid from '@material-ui/core/Grid';

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinksMorganLingu from "components/Header/HeaderLinksMorganLingu.js";
import Parallax from "components/Parallax/Parallax.js";
import PinDrop from "@material-ui/icons/PinDrop";
import FacebookIcon from '@material-ui/icons/Facebook';

import landingPageStyle from "assets/jss/material-kit-pro-react/views/landingPageStyle.js";

// Sections for this page
import SectionProductHowLearn from "../../views/LandingPage/Sections/HowLearn/SectionProductHowLearn.js";
import SectionWorkHowLearn from "../../views/LandingPage/Sections/HowLearn/SectionWorkHowLearn.js";
import SectionFeaturesHowLearn from "../../views/LandingPage/Sections/HowLearn/SectionFeaturesHowLearn.js"; 
import SectionFooter from "views/SectionsPage/Sections/Footer/SectionFooter.js";

import productStyle from "assets/jss/material-kit-pro-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(landingPageStyle);

function HowLearnPage({ ...rest }) {
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
        image={require("assets/img/bgHowLearn.jpg").default}
        // filter="dark"
        small
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem
              md={8}
              sm={8}
              className={classNames(
                classes.mlAuto,
                classes.mrAuto,
                classes.textCenter
              )}
            >
              <h1 style={{marginBottom: "-100px"}} className={classes.title}>Jak uczymy</h1>
              <h4 style={{marginBottom: "-100px"}}>
                <i>„Granice mojego języka są granicami mojego świata”</i>
                <p>~ Ludwig Wittgenstein</p>
              </h4>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={8} md={8}>
              <h2 style={{
                color: "#000", 
                display: "flex", 
                justifyContent: "center", 
                alignItems: "center", 
                fontWeight: 'bold', 
                marginTop: '50px'
              }}>Dlaczego&nbsp;<span style={{color: '#000080'}}>MorganLingu</span>?</h2>

              <div style={{color: "#000"}}>

              <p style={{fontWeight: '400', fontSize: '1.45em', lineHeight: '140%'}}>
                  My w <span style={{fontWeight: 'bold'}}>MorganLingu</span> stawiamy na różnorodność form nauki, w taki sposób, 
                  w jaki stykałbyś się z nimi podczas <span style={{color: "#000080", fontWeight: 'bold'}}>życia codziennego </span> 
                  oraz <span style={{color: "#000080", fontWeight: 'bold'}}>zawodowego</span> żyjąc w danym kraju. Nasze metody nauki 
                  dostosowane są do każdego, niezależnie od wieku oraz doświadczenia językowego.
              </p>

              <hr />

              <p style={{fontWeight: '400', fontSize: '1.5em', lineHeight: '140%'}}>
                  Dlatego u nas <span style={{color: "red", fontWeight: 'bold'}}>NIE</span> uczysz się tak jak w zwykłej szkole metodą 3Z <i>(Zakuj, Zdaj, Zapomnij)</i>,
                  <span style={{color: "red", fontWeight: 'bold'}}> NIE</span> będziesz mieć nudnych lekcji polegających tylko na czytaniu z podręcznika.
              </p>

              </div>
            </GridItem>
          </GridContainer>

          <SectionFeaturesHowLearn />
          <SectionWorkHowLearn />
          <SectionProductHowLearn />
        </div>
      </div>

      <SectionFooter />

    </div>
  );
}

export default HowLearnPage;
