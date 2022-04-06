import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Check from "@material-ui/icons/Check";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Success from "components/Typography/Success.js";

import pricingStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/pricingStyle.js";


const useStyles = makeStyles(pricingStyle);

export default function SectionPricing({ ...rest }) {
  const classes = useStyles();
  return (
    <div className="cd-section" {...rest}>
      <div className={classes.pricing}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={6}
              md={6}
              className={
                classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
              }
            >
              <h2 className={classes.title}>Język Niemiecki</h2>
              {/* <h5 className={classes.description}>
                You have Free Unlimited Updates and Premium Support on each
                package.
              </h5> */}
              {/* <div className={classes.sectionSpace} /> */}
            </GridItem>
          </GridContainer>
          <GridContainer>
          <GridItem xs={12} sm={6} md={6} lg={4}>
              <Card pricing color="rose">
                <CardBody pricing>
                  <h4 style={{fontWeight: 'bold'}} className={classes.marginBottom30}>ZAJĘCIA INDYWIDUALNE</h4>
                  <h4 style={{fontWeight: 'bold'}} className={classes.marginBottom30}>Oferujemy pakiet semestralny</h4>

                  <h1 style={{marginTop: '-20px'}} className={classes.cardTitleWhite}>
                    70 <small>zł/h</small>
                  </h1>
                  <ul>
                    <li>
                      <Check /> ONLINE
                    </li>
                    <li>
                      <Check /> Zajęcia 2 razy w tygodniu
                    </li>
                    <li>
                      <Check /> Płatność raz w miesiącu
                    </li>
                    <li>
                      <Check /> Możliwość rezygnacji w każdej chwili
                    </li>
                    <li>
                      <Check /> Stałe godziny zajęć
                    </li>
                  </ul>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={6} lg={4}>
              <Card pricing color="success">
                <CardBody pricing>
                  <h5 style={{fontWeight: 'bold'}} className={classes.marginBottom30}>ZAJĘCIA DLA 2 OSÓB</h5>
                  <h4 style={{fontWeight: 'bold'}} className={classes.marginBottom30}>Oferujemy pakiet semestralny</h4>

                  <h1 style={{marginTop: '-20px'}} className={classes.cardTitleWhite}>
                    40 <small>zł/h</small>
                  </h1>
                  <ul>
                    <li>
                      <Check /> ONLINE
                    </li>
                    <li>
                      <Check /> Zajęcia 2 razy w tygodniu
                    </li>
                    <li>
                      <Check /> Płatność raz w miesiącu
                    </li>
                    <li>
                      <Check /> Możliwość rezygnacji w każdej chwili
                    </li>
                    <li>
                      <Check /> Stałe godziny zajęć
                    </li>
                  </ul>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={6} lg={4}>
              <Card pricing color="primary">
                <CardBody pricing>
                  <h5 style={{fontWeight: 'bold'}} className={classes.marginBottom30}>ZAJĘCIA OD 3 OSÓB</h5>
                  <h4 style={{fontWeight: 'bold'}} className={classes.marginBottom30}>Oferujemy pakiet semestralny</h4>

                  <h1 style={{marginTop: '-20px'}} className={classes.cardTitleWhite}>
                    25 <small>zł/h</small>
                  </h1>
                  <ul>
                    <li>
                      <Check /> ONLINE
                    </li>
                    <li>
                      <Check /> Zajęcia 2 razy w tygodniu
                    </li>
                    <li>
                      <Check /> Płatność raz w miesiącu
                    </li>
                    <li>
                      <Check /> Możliwość rezygnacji w każdej chwili
                    </li>
                    <li>
                      <Check /> Stałe godziny zajęć
                    </li>
                  </ul>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
