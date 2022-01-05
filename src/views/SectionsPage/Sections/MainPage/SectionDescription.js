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
import CardFooter from "components/Card/CardFooter";

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
                Poznaj nasze języki
              </h2>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={4} md={4}>
              <Card
                raised
                background
              >
                <a
                  href="/english"
                  target="_blank"
                >
                  <CardBody background style={{ 
                    backgroundImage: `url(${cardProject1})`,
                    opacity: '0.7',
                    backgroundSize: '100%',
                  }}>
                    <h3 className={classes.cardTitleWhite} style={{
                      marginBottom: '20%'
                    }}>
                        Angielski
                      </h3>
                    <Button round color="danger">
                      <Icon>content_copy</Icon> Otwórz język
                    </Button>
                  </CardBody>
                </a>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <Card
                raised
                background
              >
                <a
                  href="/german"
                  target="_blank"
                >
                  <CardBody background style={{ 
                    backgroundImage: `url(${cardProject1})`,
                    opacity: '0.7',
                    backgroundSize: '100%',
                  }}>
                    <h3 className={classes.cardTitleWhite} style={{
                      marginBottom: '20%'
                    }}>
                      Niemiecki
                    </h3>
                    <Button round color="danger">
                      <Icon>content_copy</Icon> Otwórz język
                    </Button>
                  </CardBody>
                </a>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <Card
                raised
                background
              >
                <a
                  href="/norwegian"
                  target="_blank"
                >
                  <CardBody background style={{ 
                    backgroundImage: `url(${cardProject1})`,
                    opacity: '0.7',
                    backgroundSize: '100%',
                  }}>
                    <h3 className={classes.cardTitleWhite} style={{
                      marginBottom: '20%'
                    }}>
                      Norweski
                    </h3>
                    <Button round color="danger">
                      <Icon>content_copy</Icon> Otwórz język
                    </Button>
                  </CardBody>
                </a>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={6}>
              <Card
                raised
                background
              >
                <a
                  href="/russian"
                  target="_blank"
                >
                  <CardBody background style={{ 
                    backgroundImage: `url(${cardProject2})`,
                    opacity: '0.7',
                    backgroundSize: '100%',
                  }}>
                    <h3 className={classes.cardTitleWhite} style={{
                      marginBottom: '20%'
                    }}>
                      Rosyjski
                    </h3>
                    <Button round color="danger">
                      <Icon>content_copy</Icon> Otwórz język
                    </Button>
                  </CardBody>
                </a>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={6}>
              <Card
                raised
                background
              >
                <a
                  href="/russian"
                  target="_blank"
                >
                  <CardBody background style={{ 
                    backgroundImage: `url(${cardProject2})`,
                    opacity: '0.7',
                    backgroundSize: '100%',
                  }}>
                    <h3 className={classes.cardTitleWhite} style={{
                      marginBottom: '20%'
                    }}>
                      Polski
                    </h3>
                    <Button round color="danger">
                      <Icon>content_copy</Icon> Otwórz język
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
