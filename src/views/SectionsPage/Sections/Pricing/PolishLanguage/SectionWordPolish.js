/* eslint-disable */
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
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
      <div>
        <div className={classes.container}>
          <h2 style={{
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            color: '#3C4858',
            fontWeight: '700'
          }}>
            Słówka Językowe
          </h2>

          <GridContainer>
            <GridItem xs={12} sm={6} md={6}>
              <Card
                raised
                background
                style={{ backgroundImage: `url(${office2})` }}
              >
                <a 
                  href="/build-page"
                >

                <CardBody background>
                  <h6 className={classes.cardCategory}>SŁÓWKA</h6>
                  <h3 className={classes.cardTitleWhite}>
                    Słówka zimowe
                  </h3>
                  <Button round color="danger">
                    <Icon>content_copy</Icon> Otwórz
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
                >

                <CardBody background>
                  <h6 className={classes.cardCategory}>SŁÓWKA</h6>
                  <h3 className={classes.cardTitleWhite}>
                    Sport i rekreacja
                  </h3>
                  <Button round color="danger">
                    <Icon>content_copy</Icon> Otwórz
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
