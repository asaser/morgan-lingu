import React from "react";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import componentsStyle from "assets/jss/material-kit-pro-react/views/presentationSections/componentsStyle.js";

import websiteScreenShoot from "assets/img/websiteScreenShoot.png";

import FlagNorwegian from "assets/img/FlagsLanguage/FlagNorwegian.png";
import FlagRussia from "assets/img/FlagsLanguage/FlagRussia.png";
import FlagGerman from "assets/img/FlagsLanguage/FlagGerman.png";
import FlagGreatBritain from "assets/img/FlagsLanguage/FlagGreatBritain.png";
import FlagPoland from "assets/img/FlagsLanguage/FlagPoland.png";

import Button from "components/CustomButtons/Button.js";

const useStyles = makeStyles(componentsStyle);

export default function SectionComponents() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem md={5} lg={5} sm={12} xs={12}>
            <h2 className={classes.title}>Z nami nauczysz się języka</h2>
            <h3 className={classes.description}>
              Do nauczania podchodzimy rzetelnie stosując urozmaicone formy nauki
              oraz dopasowujemy materiał indywidualnie do osób
            </h3>
            <div>
              <a
                href="/how-learn-page"
                target="_blank"
              >
                <Button block round type="button" color="success">Sprawdź JAK UCZYMY</Button>
              </a>
            </div>
          </GridItem>

          {/* Różne flagi tutaj będę umieszczać a w bg screen z naszej strony internetowej */}
          <GridItem xs={12} sm={12} md={6} lg={6} className={classes.mlAuto}>
            <div className={classes.imageContainer}>
              <img
                src={websiteScreenShoot}
                alt="MorganLingu"
                className={classes.componentsMacbook}
              />
              <img
                src={FlagRussia}
                alt="MorganLingu"
                className={classes.cardImage}
              />
              <img
                src={FlagPoland}
                alt="MorganLingu"
                className={classes.shareButton}
              />
              <img
                src={FlagGerman}
                alt="MorganLingu"
                className={classes.twitterImage}
              />
              <img
                src={FlagNorwegian}
                alt="MorganLingu"
                className={classes.iconsImage}
              />
              <img
                src={FlagGreatBritain}
                alt="MorganLingu"
                className={classes.repostImage}
              />
            </div>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
