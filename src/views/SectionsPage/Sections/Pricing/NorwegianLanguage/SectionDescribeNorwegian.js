/* eslint-disable */
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";

import projectsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/projectsStyle.js";

import cardProject2 from "assets/img/examples/card-project2.jpg";

const useStyles = makeStyles(projectsStyle);

export default function SectionProjects({ ...rest }) {
  const classes = useStyles();
  return (
    <div className="cd-section" {...rest}>
      <div className={classes.projects}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={5} md={5} className={classes.mlAuto}>
              <Card
                background
                className={classes.card4}
                style={{ backgroundImage: `url(${cardProject2})` }}
              >
                <CardBody background className={classes.cardBody4} />
              </Card>
            </GridItem>
            <GridItem xs={12} sm={5} md={5} className={classes.mrAuto}>
              <div style={{color: "#000"}}>
                <h2>God dag!</h2>
                <p>Przeprowadzasz się do nowego kraju?</p>
                <p>Szukasz nowej pracy?</p>
                <p>A może przygotowujesz się do egzaminu językowego?</p>
                <p>Niezależnie od powodu z nami szybko i łatwo nauczysz się JĘZYKA NORWESKIEGO</p>
              </div>
            </GridItem>
          </GridContainer>
          <hr />
        </div>
      </div>
    </div>
  );
}
