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

// core components
import Header from "components/Header/Header.js";
import HeaderLinksMorganLingu from "components/Header/HeaderLinksMorganLingu.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Footer from "components/Footer/Footer.js";
import Parallax from "components/Parallax/Parallax.js";

import contactUsStyle from "assets/jss/material-kit-pro-react/views/contactUsStyle.js";


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
                classes.mrAuto,
                classes.textCenter
              )}
            >
                <h1 className={classes.title} style={{color: "#fff"}}>Zadzwoń lub napisz</h1>
                <h3 className={classes.title} style={{color: "#fff"}}>A my nauczymy Ciebie języka obcego</h3>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>


        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.contactContent}>
            <div className={classes.container}>
              {/* <h1 className={classes.title}>Zadzwoń lub napisz</h1>
              <h2 className={classes.title}>A my nauczymy Ciebie języka obcego</h2> */}
              <GridContainer>
                {/* <GridItem md={6} sm={6}>
                  <p>
                    You can contact us with anything related to our Products. We
                    {"'"}ll get in touch with you as soon as possible.
                    <br />
                    <br />
                  </p>
                  <form>
                    <CustomInput
                      labelText="Your Name"
                      id="float"
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                    <CustomInput
                      labelText="Email address"
                      id="float"
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                    <CustomInput
                      labelText="Phone"
                      id="float"
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                    <CustomInput
                      labelText="Your message"
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
                      <Button color="primary" round>
                        Contact us
                      </Button>
                    </div>
                  </form>
                </GridItem> */}

                <GridItem sm={12} md={6} lg={6} className={classes.mlAuto}>
                  <h2 style={{fontWeight: "bold"}}>Kontankt</h2>
                  <h3>Dane Szkoły Językowej:</h3>

                  <div style={{marginTop: "40px"}}>
                      <p style={{fontWeight: "bold"}}>
                        <PinDrop /> Szkoła Językowa MorganLingu
                      </p>
                      <p>
                        <Phone /> +48 604 678 347
                      </p>
                      <p>
                        <EmailIcon /> morganlingu@gmail.com
                      </p>
                      <p>
                        <LanguageIcon /> 
                        <a
                          href="https://morganlingu.pl/"
                          target="_blank"
                        >
                          https://www.morganlingu.pl/
                        </a>  
                      </p>
                  </div>

                  <div style={{marginTop: "50px"}}>
                    <p>
                      Odwiedź nas na:
                      <a
                        href="https://www.facebook.com/morganLingu"
                        target="_blank"
                      >
                          <FacebookIcon size='large' />
                      </a>
                    </p>
                  </div>

                  {/* <InfoArea
                    className={classes.info}
                    title="Kontakt"
                    description={
                      <div>
                        <p>
                          Telefon · +48 604 678 347<br />
                          Mail · morganlingu@gmail.com<br />
                          Facebook · https://www.facebook.com/morganLingu
                        </p>

                        <p>Odwiedź nas na: https://www.facebook.com/morganLingu</p>
                      </div>
                    }
                    icon={Phone}
                    iconColor="primary"
                  /> */}
                  
                </GridItem>

                <GridItem sm={12} md={6} lg={6} className={classes.mlAuto}>
                  <h2 style={{fontWeight: "bold"}}>Zapisy prowadzone są:</h2>

                  <div style={{marginTop: "40px"}}>
                      <p>
                        · Telefonicznie - +48 604 678 347
                      </p>
                      <p>
                        · Mailowo - morganlingu@gmail.com
                      </p>
                      <p>
                        · Przez Facebooka - 
                        <a
                          href="https://www.facebook.com/morganLingu"
                          target="_blank"
                        >
                            <FacebookIcon />
                        </a>  
                      </p>
                  </div>


                  {/* <InfoArea
                    className={classes.info}
                    title="Zapisy prowadzone są:"
                    description={
                      <ul>
                        <li>
                          Telefonicznie - +48 604 678 347
                        </li>
                        <li>
                          Mailowo - morganlingu@gmail.com
                        </li>
                        <li>
                          Przez Facebooka - https://www.facebook.com/morganLingu
                        </li>
                      </ul>
                    }
                    icon={PinDrop}
                    iconColor="primary"
                  /> */}
                </GridItem>

              </GridContainer>
            </div>
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

export default ContactPage;