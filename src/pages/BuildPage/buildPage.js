/*eslint-disable*/
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Header from "components/Header/Header.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import errorPageStyle from "assets/jss/material-kit-pro-react/views/errorPageStyles.js";
import HeaderLinksMorganLingu from "components/Header/HeaderLinksMorganLingu.js";
import SectionFooter from "views/SectionsPage/Sections/Footer/SectionFooter.js";

import image from "assets/img/bgBuildPage.png";

const useStyles = makeStyles(errorPageStyle);

export default function ErrorPage({ ...rest }) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    <div>
      <Header
        // color="transparent"
        brand="MorganLingu"
        links={<HeaderLinksMorganLingu dropdownHoverColor="info" />}
        fixed
        color="dark"
      />
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
      >
        {/* <div className={classes.container}> */}
        <div className={classes.contentCenter}>
          <GridContainer>
            <GridItem md={12}>
              <h1 style={{fontWeight: 'bold'}}>Strona w budowie</h1>
              
              <h3 style={{fontWeight: 'bold'}}>Przepraszamy za utrudnienia</h3>
              <h4 style={{marginTop: '50px', fontWeight: 'bold'}}>
                Zespół MorgnaLingu prosi o cierpliwość
              </h4>
            </GridItem>
          </GridContainer>
        </div>
        {/* </div> */}
      </div>

        <SectionFooter />

    </div>
  );
}
