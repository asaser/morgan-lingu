    // import React from 'react';

    // const ContactPage = () => {
    //     return (
    //         <h1>ContactPage</h1>
    //     )
    // }

    // export default ContactPage;
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
import PinDrop from "@material-ui/icons/PinDrop";
import Phone from "@material-ui/icons/Phone";
import EmailIcon from '@material-ui/icons/Email';
import LanguageIcon from '@material-ui/icons/Language';
import BusinessCenter from "@material-ui/icons/BusinessCenter";
import FacebookIcon from '@material-ui/icons/Facebook';
import ShareIcon from '@material-ui/icons/Share';


// core components
import Header from "components/Header/Header.js";
import HeaderLinksMorganLingu from "components/Header/HeaderLinksMorganLingu.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Footer from "components/Footer/Footer.js";
import Parallax from "components/Parallax/Parallax.js";

import SectionFooter from "views/SectionsPage/Sections/Footer/SectionFooter.js";


import contactUsStyle from "assets/jss/material-kit-pro-react/views/contactUsStyle.js";
import { Button } from "@material-ui/core";


const useStyles = makeStyles(contactUsStyle);

function ContactPage() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    <div>
      <Header
        brand="MorganLingu"
        links={<HeaderLinksMorganLingu dropdownHoverColor="dark" />}
        fixed
        color="dark"
      />

      <Parallax
        image={require("assets/img/bg13.jpg").default}
        // filter="dark"
        small
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem
              md={8}
              sm={8}
              className={classNames(
                classes.mrAuto,
                classes.textCenter
              )}
            >
                <h1 className={classes.title} style={{color: "#fff"}}>Zadzwoń lub napisz</h1>
                <h2 className={classes.title} style={{color: "#fff"}}>A my nauczymy Cię języka obcego</h2>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>


      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.contactContent}>
          <div className={classes.container}>
            <GridContainer>
            <h2 className={classes.title}>Czekamy na twoją wiadomość</h2>
              <GridItem md={6} sm={6}>
                <form>
                  <CustomInput
                    labelText="Imię"
                    id="float"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                  <CustomInput
                    labelText="Email"
                    id="float"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                  <CustomInput
                    labelText="Numer Telefonu"
                    id="float"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                  <CustomInput
                    labelText="Wiadomość"
                    id="float"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      multiline: true,
                      rows: 6,
                    }}
                  />
                  <div className={classes.textCenter}>
                    <Button variant="contained" size="large" style={{backgroundColor: '#000080'}}>
                        <span style={{color: '#fff'}}>Wyślij</span>
                    </Button>
                  </div>
                </form>
              </GridItem>
              <GridItem md={4} sm={4} className={classes.mlAuto}>
              <h2 className={classes.title} style={{display: 'flex', justifyContent: 'center'}}>Kontakt</h2>

                <InfoArea
                  className={classes.info}
                  title="+48 604 678 347"
                  icon={Phone}
                  iconColor="primary"
                />
                <InfoArea
                  className={classes.info}
                  title="morganlingu@gmail.com"
                  icon={EmailIcon}
                  iconColor="primary"
                />

                <div style={{display: 'flex', justifyContent: 'center', marginTop: '20px'}}>
                  <a
                    href="https://www.facebook.com/morganLingu"
                    target="_blank"
                  >
                      <FacebookIcon style={{transform: 'scale(2)'}} />
                  </a>  
                </div>

              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>

      <SectionFooter />
      
    </div>
  );
}

export default ContactPage;