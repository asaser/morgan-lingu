
/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Grid from '@material-ui/core/Grid';

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
import Footer from "components/Footer/Footer.js";
import PinDrop from "@material-ui/icons/PinDrop";
import FacebookIcon from '@material-ui/icons/Facebook';
// sections for this page
import HeaderLinksMorganLingu from "components/Header/HeaderLinksMorganLingu.js";

import aboutUsStyle from "assets/jss/material-kit-pro-react/views/aboutUsStyle.js";
import SectionPricesLanguageEnglish from "../../views/SectionsPage/Sections/PricesLanguage/SectionPricesLanguageEnglish";
import SectionPricesLanguageGerman from "../../views/SectionsPage/Sections/PricesLanguage/SectionPricesLanguageGerman";
import SectionPricesLanguageNorwegian from "../../views/SectionsPage/Sections/PricesLanguage/SectionPricesLanguageNorwegian";
import SectionPricesLanguageRussian from "../../views/SectionsPage/Sections/PricesLanguage/SectionPricesLanguageRussian";
import SectionFooter from "views/SectionsPage/Sections/Footer/SectionFooter.js";

const useStyles = makeStyles(aboutUsStyle);

function AboutPage() {
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
        // changeColorOnScroll={{
        //   height: 300,
        //   color: "info",
        // }}
        // {...rest}
      />
      <Parallax
        image={require("assets/img/bgPrice.jpg").default}
        filter="dark"
        small
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem
              md={8}
              sm={8}
              className={classNames(
                classes.mlAuto,
                classes.mrAuto,
                classes.textCenter
              )}
            >
              <h1 className={classes.title}>Cennik</h1>
              <h4>
                Znajdź idealny kurs dla siebie
              </h4>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <SectionPricesLanguageEnglish />
          <hr style={{border: "2px solid #000"}} />
          <SectionPricesLanguageGerman />
          <hr style={{border: "2px solid #000"}} />
          <SectionPricesLanguageNorwegian />
          <hr style={{border: "2px solid #000"}} />
          <SectionPricesLanguageRussian />
        </div>
      </div>

      <SectionFooter />
      
    </div>
  );
}

export default AboutPage;