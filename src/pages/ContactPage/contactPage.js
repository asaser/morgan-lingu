
/*eslint-disable*/
import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Card from '@material-ui/core/Card';

// components
import SnackbarContent from "components/Snackbar/SnackbarContent.js";


// @material-ui/icons
import Phone from "@material-ui/icons/Phone";
import EmailIcon from '@material-ui/icons/Email';
import Check from "@material-ui/icons/Check";

import FacebookIcon from '@material-ui/icons/Facebook';


// core components
import Header from "components/Header/Header.js";
import HeaderLinksMorganLingu from "components/Header/HeaderLinksMorganLingu.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
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

  const [sendForm, setSendForm] = useState(false);

  // emailJS

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_uk0lq78', 'template_8t5rp0l', form.current, 'user_vyHWNn3S1Lr15SW3FTE8q')
      .then((result) => {
          console.log('SUCCES!', result.text);
          setSendForm(true);
      }, (error) => {
          console.log('FAILED',error.text);
      });

      form.current.reset();
  };


  // success alert
    const renderAlert = () => (
      <SnackbarContent
          message={
            <span>
              <b style={{fontSize: '20px'}}>Wiadomość wysłana: </b>
              Odezwiemy się do Ciebie jak najszybciej
            </span>
          }
          close
          color="success"
          icon={Check}
      />
    )


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

          {sendForm && renderAlert()}

          <h2 className={classes.title}>Czekamy na twoją wiadomość</h2>
            <GridContainer>
              <GridItem md={6} sm={6}>

                <form ref={form} onSubmit={sendEmail} style={{display: 'flex', flexDirection: 'column'}}>

                <FormControl>
                  <InputLabel htmlFor="name-component">Imię</InputLabel>
                  <Input 
                    id="name-component"
                    aria-describedby="name-component-text" 
                    type="text" 
                    name="to_name" 
                    style={{ marginBottom: '35px' }}
                  />
                </FormControl>

                <FormControl>
                  <InputLabel htmlFor="email-component">Adres email</InputLabel>
                  <Input 
                    id="email-component"
                    aria-describedby="email-component-text" 
                    type="email"
                    name="to_email" 
                    style={{ marginBottom: '35px' }}
                  />
                </FormControl>

                <FormControl>
                  <InputLabel htmlFor="phone-component">Numer Telefonu (opcjonalnie)</InputLabel>
                  <Input 
                    id="phone-component"
                    aria-describedby="phone-component-text" 
                    type="text" 
                    name="telefon_number" 
                    style={{ marginBottom: '35px' }}
                  />
                </FormControl>

                <FormControl>
                  <InputLabel htmlFor="text-component">Treść wiadomości</InputLabel>
                  <Input 
                    id="text-component"
                    aria-describedby="text-component-text" 
                    type="text" 
                    name="message" 
                    multiline
                    rows={10}
                    style={{ marginBottom: '35px'}}
                  />
                </FormControl>

                  <div className={classes.textCenter}>
                    <Button type="submit" value="Send" variant="contained" size="large" style={{backgroundColor: '#000080'}}>
                        <span style={{color: '#fff'}}>Wyślij</span>
                    </Button>
                  </div>
                </form>
              </GridItem>

              <GridItem md={4} sm={4} className={classes.mlAuto}>

                <Card style={{paddingBottom: '20px', marginLeft: '50px', height: 'auto', width: '400px', backgroundColor: 'rgba(240, 240, 240, 1)', boxShadow: '0 10px 10px 0 rgba(0,0,0,0.2)'}}>

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

                </Card>

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