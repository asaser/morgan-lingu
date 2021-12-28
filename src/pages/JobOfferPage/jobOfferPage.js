// import React from 'react';

// const JobOfferPage = () => {
//     return (
//         <h1>JobOfferPage</h1>
//     )
// }

// export default JobOfferPage;


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
import SectionDescription from "views/AboutUsPage/Sections/SectionDescription.js";
import SectionTeam from "views/AboutUsPage/Sections/SectionTeam.js";
import SectionServices from "views/AboutUsPage/Sections/SectionServices.js";
import SectionOffice from "views/AboutUsPage/Sections/SectionOffice.js";
import SectionContact from "views/AboutUsPage/Sections/SectionContact.js";

import aboutUsStyle from "assets/jss/material-kit-pro-react/views/aboutUsStyle.js";

const useStyles = makeStyles(aboutUsStyle);

function JobOfferPage() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    <div>
      <Header
        brand="MorganLingu"
        links={<HeaderLinksMorganLingu dropdownHoverColor="info" />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 300,
          color: "info",
        }}
      />
      <Parallax
        image={require("assets/img/bg9.jpg").default}
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
              <h1 className={classes.title}>Job Offer Page</h1>
              <h4>
                Meet the amazing team behind this project and find out more
                about how we work.
              </h4>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <SectionDescription />
          <SectionTeam />
          <SectionServices />
          <SectionOffice />
          <SectionContact />
        </div>
      </div>
      <Footer
        content={
          <div style={{marginTop: "30px"}}>
            <Grid container>
              <Grid p xs={12} md={8} style={{fontWeight: "bold"}}>
                <p style={{fontSize: "1.5em"}}>Jeśli masz pytania zadzwoń do nas!</p>
                <p style={{fontSize: "1.5em"}}>+48 604 678 347</p>
              </Grid>
              <Grid p xs={6} md={2}>
                <p style={{fontWeight: "bold"}}>
                  <PinDrop /> Szkoła Językowa MorganLingu
                </p>
              </Grid>
              <Grid p xs={6} md={2}>
                <a
                  href="https://www.facebook.com/morganLingu"
                  target="_blank"
                >
                    <FacebookIcon />
                </a>  
              </Grid>
            </Grid>
          </div>
        }
      />
    </div>
  );
}

export default JobOfferPage;