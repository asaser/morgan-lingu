import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import cardsStyle from "assets/jss/material-kit-pro-react/views/presentationSections/cardsStyle.js";

import cardsTest from "assets/img/picAdsMainPage.jpg";

const useStyles = makeStyles(cardsStyle);

export default function SectionCards() {
  const classes = useStyles();
  return (
    <div className={classNames(classes.section)}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem md={7} sm={7}>
            <div className={classes.imageContainer}>
              <img src={cardsTest} alt="views" />
            </div>
          </GridItem>
          <GridItem md={4} sm={5}>
            <div className={classes.sectionDescription}>
              <h1>Okazja noworoczna</h1>
              <h3>Kursy indywidualne ~</h3>
              <h4><del>100 zł/h</del> || 70 zł/h</h4>
              <hr />

              <h3>Kursy Grupowe ~</h3>
              <h4>Zajęcia dla 2 osób</h4>
              <h4><del>60 zł/h</del> || 45 zł/h</h4>
              <hr />

              <h3>Zajęcia grupowe ~</h3>
              <h4><del>40 zł/h</del> || 30 zł/h</h4>
            </div>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
