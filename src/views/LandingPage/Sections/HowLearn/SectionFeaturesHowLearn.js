import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Code from "@material-ui/icons/Code";
import FormatPaint from "@material-ui/icons/FormatPaint";
import Dashboard from "@material-ui/icons/Dashboard";
import ViewCarousel from "@material-ui/icons/ViewCarousel";
import AccessTime from "@material-ui/icons/AccessTime";
import AttachMoney from "@material-ui/icons/AttachMoney";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import featuresStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/featuresStyle.js";


const useStyles = makeStyles(featuresStyle);

export default function SectionFeatures({ ...rest }) {
  const classes = useStyles();
  return (
    <div className="cd-section" {...rest}
      style={{paddingBottom: "50px"}}
    >
      {/* Feature 5 START */}
      <div
        className={classes.featuresHowLearn}
      >
        <GridContainer>
          <GridItem
            xs={12}
            sm={8}
            md={8}
            className={
              classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
            }
          >
            <h2 className={classes.title}>Your life will be much easier</h2>
          </GridItem>
          <div className={classes.container}>
            <GridContainer className={classes.gridContainer}>
              <GridItem xs={12} sm={4} className={classes.gridItem}>
                <InfoArea
                  vertical
                  className={classes.infoArea5}
                  icon={Code}
                  title="For Developers"
                  description={
                    <p>
                      The moment you use Material Kit, you know you’ve never
                      felt anything like it. With a single use, this powerfull
                      UI Kit lets you do more than ever before.
                    </p>
                  }
                  iconColor="info"
                />
              </GridItem>
              <GridItem xs={12} sm={4} className={classes.gridItem}>
                <InfoArea
                  vertical
                  className={classes.infoArea5}
                  icon={FormatPaint}
                  title="For Designers"
                  description={
                    <p>
                      Divide details about your product or agency work into
                      parts. Write a few lines about each one. A paragraph
                      describing a feature will be enough.
                    </p>
                  }
                  iconColor="danger"
                />
              </GridItem>
              <GridItem xs={12} sm={4} className={classes.gridItem}>
                <InfoArea
                  vertical
                  className={classes.infoArea5}
                  icon={Dashboard}
                  title="Material-UI Grid"
                  description={
                    <p>
                      Divide details about your product or agency work into
                      parts. Write a few lines about each one. A paragraph
                      describing a feature will be enough.
                    </p>
                  }
                  iconColor="primary"
                />
              </GridItem>
            </GridContainer>
            <GridContainer className={classes.gridContainer}>
              <GridItem xs={12} sm={4} className={classes.gridItem}>
                <InfoArea
                  vertical
                  className={classes.infoArea5}
                  icon={ViewCarousel}
                  title="Example Pages Included"
                  description={
                    <p>
                      The moment you use Material Kit, you know you’ve never
                      felt anything like it. With a single use, this powerfull
                      UI Kit lets you do more than ever before.
                    </p>
                  }
                />
              </GridItem>
              <GridItem xs={12} sm={4} className={classes.gridItem}>
                <InfoArea
                  vertical
                  className={classes.infoArea5}
                  icon={AccessTime}
                  title="Save Time"
                  description={
                    <p>
                      The moment you use Material Kit, you know you’ve never
                      felt anything like it. With a single use, this powerfull
                      UI Kit lets you do more than ever before.
                    </p>
                  }
                />
              </GridItem>
              <GridItem xs={12} sm={4} className={classes.gridItem}>
                <InfoArea
                  vertical
                  className={classes.infoArea5}
                  icon={AttachMoney}
                  title="Save Money"
                  description={
                    <p>
                      The moment you use Material Kit, you know you’ve never
                      felt anything like it. With a single use, this powerfull
                      UI Kit lets you do more than ever before.
                    </p>
                  }
                />
              </GridItem>
            </GridContainer>
          </div>
        </GridContainer>
      </div>
      {/* Feature 5 END */}
    </div>
  );
}
