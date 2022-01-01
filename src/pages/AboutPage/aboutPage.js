
/*eslint-disable*/
import React from "react";
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
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
import Footer from "components/Footer/Footer.js";
import PinDrop from "@material-ui/icons/PinDrop";
import FacebookIcon from '@material-ui/icons/Facebook';
// sections for this page
import HeaderLinksMorganLingu from "components/Header/HeaderLinksMorganLingu.js";
import SectionInterestedAboutUs from "views/AboutUsPage/Sections/AboutUs/SectionInterestedAboutUs.js";

import aboutUsStyle from "assets/jss/material-kit-pro-react/views/aboutUsStyle.js";

const useStyles = makeStyles(aboutUsStyle);

function AboutPage() {
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
        image={require("assets/img/bgAboutUs.jpg").default}
        filter="dark"
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
              <h1 className={classes.title}>Nasi Lektorzy</h1>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>          
          <SectionInterestedAboutUs />
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

export default AboutPage;