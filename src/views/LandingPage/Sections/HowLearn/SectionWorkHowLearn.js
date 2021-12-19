import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CustomInput from "components/CustomInput/CustomInput.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui icons
import Mail from "@material-ui/icons/Mail";

import bg7 from "assets/img/bg7.jpg";

import styles from "assets/jss/material-kit-pro-react/views/componentsSections/preFooter.js";

const useStyles = makeStyles(styles);

export default function SectionPreFooter() {
  const classes = useStyles();
  return (
    <div>
      <div
        className={classNames(
          classes.textCenter,
        )}
      >
        <div className={classes.container}>

        <hr style={{ border: '2px solid #000', margin: '20px 50px 0px 50px' }} />
          <GridContainer justify="center">
            <GridItem md={12}>
              <h4 className={classes.title}>Click to contact us</h4>
            </GridItem>
            <Button variant="outlined">Contact</Button>
          </GridContainer>
        <hr style={{ border: '2px solid #000', margin: '20px 50px 20px 50px' }} />

        </div>
      </div>
    </div>
  );
}
