import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// import Button from "components/CustomButtons/Button.js";
import Button from "@material-ui/core/Button";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui icons

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
        <div className={classes.container} style={{backgroundColor: 'rgba(133, 133, 133, 0.45)'}}>

        <hr style={{ border: '2px solid #000', margin: '20px 0px 0px 0px' }} />
          <GridContainer justify="center">
            <GridItem md={12}>
              <h2 className={classes.title}>Naciśnij aby skontaktować się z nami</h2>
            </GridItem>

            <div>
              <a
                href="/contact-page"
                target="_blank"
              >
              <Button variant="contained" size="large" style={{ backgroundColor: '#4caf50', color: '#fff'}}>Kontakt</Button>
              </a>
            </div>
          </GridContainer>
        <hr style={{ border: '2px solid #000', margin: '20px 0px 0px 0px' }} />

        </div>
      </div>
    </div>
  );
}
