/* eslint-disable */
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Build from "@material-ui/icons/Build";
import Subject from "@material-ui/icons/Subject";
import FormatPaint from "@material-ui/icons/FormatPaint";
import Code from "@material-ui/icons/Code";
import Dashboard from "@material-ui/icons/Dashboard";
import Timeline from "@material-ui/icons/Timeline";
import Group from "@material-ui/icons/Group";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import Button from "components/CustomButtons/Button.js";
import Muted from "components/Typography/Muted.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import Badge from "components/Badge/Badge.js";

import projectsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/projectsStyle.js";

import office2 from "assets/img/examples/office2.jpg";
import cardBlog3 from "assets/img/examples/card-blog3.jpg";
import cardProject1 from "assets/img/examples/card-project1.jpg";
import cardProject2 from "assets/img/examples/card-project2.jpg";
import cardProject3 from "assets/img/examples/card-project3.jpg";
import cardProject4 from "assets/img/examples/card-project4.jpg";
import cardProject5 from "assets/img/examples/card-project5.jpg";
import cardProject6 from "assets/img/examples/card-project6.jpg";

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
                <CardBody background>
                  <h6 className={classes.cardCategory}>SŁÓWKA</h6>
                  <h3 className={classes.cardTitleWhite}>
                    Słówka Angielskie
                  </h3>
                  <Button round color="danger">
                    <Icon>content_copy</Icon> Naucz się
                  </Button>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={6}>
              <Card
                raised
                background
                style={{ backgroundImage: `url(${office2})` }}
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
              </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={6}>
              <Card
                raised
                background
                style={{ backgroundImage: `url(${office2})` }}
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
              </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={6}>
              <Card
                raised
                background
                style={{ backgroundImage: `url(${office2})` }}
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
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
