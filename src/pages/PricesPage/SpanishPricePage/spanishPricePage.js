
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
import PinDrop from "@material-ui/icons/PinDrop";
import FacebookIcon from '@material-ui/icons/Facebook';
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

import landingPageStyle from "assets/jss/material-kit-pro-react/views/landingPageStyle.js";

// Sections for this page
import SectionSpanishPricing from "../../../views/SectionsPage/Sections/Pricing/SectionSpanishPricing";

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
        color="transparent"
        brand="MorganLingu"
        links={<HeaderLinksMorganLingu dropdownHoverColor="info" />}
        fixed
        changeColorOnScroll={{
          height: 300,
          color: "info",
        }}
        {...rest}
      />
      <Parallax image={require("assets/img/bg8.jpg").default} filter="dark">
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={6} md={6}>
              <h1 className={classes.title}>Danish</h1>
              <h4>
                <i>"Jakiś cytat o nauce językowej"</i>
              </h4>
              <br />
              <Button
                color="danger"
                size="lg"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"
                target="_blank"
              >
                <i className="fas fa-play" />
                Może jakiś odnośnik????
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <SectionSpanishPricing />

        </div>
      </div>
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
            </Grid>
          </div>
        }
      />
    </div>
  );
}

export default HowLearnPage;
