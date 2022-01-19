
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
import SectionDescribeNorwegian from "../../../views/SectionsPage/Sections/Pricing/NorwegianLanguage/SectionDescribeNorwegian";
import SectionWordNorwegian from "../../../views/SectionsPage/Sections/Pricing/NorwegianLanguage/SectionWordNorwegian";
import SectionPricesLanguageNorwegian from "../../../views/SectionsPage/Sections/PricesLanguage/SectionPricesLanguageNorwegian";
import SectionFooter from "views/SectionsPage/Sections/Footer/SectionFooter.js";


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
        image={require("assets/img/bgLanguageNorwegian.jpg").default}
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
              <h1 className={classes.title}>Język Norweski</h1>
              <h4>
                <i>„Aldri for gammel til å lære”</i>
                <p><i>„Nigdy nie jest za późno na naukę”</i></p>
              </h4>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <SectionDescribeNorwegian />
          <SectionWordNorwegian />
          <SectionPricesLanguageNorwegian />

        </div>
      </div>
      
      <SectionFooter />

    </div>
  );
}

export default HowLearnPage;
