/* eslint-disable */
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button.js";

import projectsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/projectsStyle.js";

import office2 from "assets/img/examples/office2.jpg";
const useStyles = makeStyles(projectsStyle);

export default function SectionProjects({ ...rest }) {
  const classes = useStyles();
  return (
    <div className="cd-section" {...rest}>
      <div className={classes.projects}>
        <div className={classes.container}>
          <GridContainer>
              <GridItem
                xs={12}
                sm={8}
                md={8}
                className={
                  classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
                }
              >
                <h2 className={classes.title}>
                  A może trochę słówek?
                </h2>
                <h4>
                  Zobacz nasze słówka językowe dedykowane pod każdy język
                </h4>
              </GridItem>
            </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={6} md={6}>
              <Card
                raised
                background
                style={{ backgroundImage: `url(${office2})` }}
              >
                <a 
                  href="/build-page"
                  target="_blank"
                >
                <CardBody background>

                    <h6 className={classes.cardCategory}>SŁÓWKA</h6>
                    <h3 className={classes.cardTitleWhite}>
                      Słówka Angielskie
                    </h3>
                    <Button round color="danger">
                      <Icon>content_copy</Icon> Naucz się
                    </Button>
                </CardBody>

                </a>

              </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={6}>
              <Card
                raised
                background
                style={{ backgroundImage: `url(${office2})` }}
              >
                <a 
                  href="/build-page"
                  target="_blank"
                >
                <CardBody background>
                  <h6 className={classes.cardCategory}>SŁÓWKA</h6>
                  <h3 className={classes.cardTitleWhite}>
                    Słówka Niemieckie
                  </h3>
                  <Button round color="danger">
                    <Icon>content_copy</Icon> Naucz się
                  </Button>
                </CardBody>
                </a>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={6}>
              <Card
                raised
                background
                style={{ backgroundImage: `url(${office2})` }}
              >
                <a 
                  href="/build-page"
                  target="_blank"
                >
                <CardBody background>
                  <h6 className={classes.cardCategory}>SŁÓWKA</h6>
                  <h3 className={classes.cardTitleWhite}>
                    Słówka Norweskie
                  </h3>
                  <Button round color="danger">
                    <Icon>content_copy</Icon> Naucz się
                  </Button>
                </CardBody>
                </a>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={6}>
              <Card
                raised
                background
                style={{ backgroundImage: `url(${office2})` }}
              >
                <a 
                  href="/build-page"
                  target="_blank"
                >
                <CardBody background>
                  <h6 className={classes.cardCategory}>SŁÓWKA</h6>
                  <h3 className={classes.cardTitleWhite}>
                    Słówka Rosyjskie
                  </h3>
                  <Button round color="danger">
                    <Icon>content_copy</Icon> Naucz się
                  </Button>
                </CardBody>
                </a>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
