import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import '../../../styles/StyleSectionNewAds.css';

import cardsStyle from "assets/jss/material-kit-pro-react/views/presentationSections/cardsStyle.js";

import Card from "components/Card/Card.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter";
import Muted from "components/Typography/Muted.js";

import FlagNorwegian from "assets/img/FlagsLanguage/FlagNorwegian.png";
import FlagRussia from "assets/img/FlagsLanguage/FlagRussia.png";
import FlagGerman from "assets/img/FlagsLanguage/FlagGerman.png";
import FlagGreatBritain from "assets/img/FlagsLanguage/FlagGreatBritain.png";
import FlagPoland from "assets/img/FlagsLanguage/FlagPoland.png";

const useStyles = makeStyles(cardsStyle);

export default function SectionCards() {

  const classes = useStyles();
  return (
    <div className={classNames(classes.section)}>
      <div className={classes.container}>

        <GridContainer justify="center">

          <div
          className={classes.team + " " + classes.section}
        >
          <div className={classes.container}>
            <GridContainer>
              <GridItem
                xs={12}
                sm={12}
                md={12}
                className={
                  classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
                }
              >
                <h1 style={{textTransform: 'uppercase', textAlign: 'center', fontWeight: '500'}}>Promocja</h1>
                <div style={{textAlign: 'center', fontWeight: '500'}} className='css-typing'>
                  <p style={{fontSize: '30px'}}>
                    Wszystkie języki aż 
                      <span 
                        style={{
                          paddingLeft: '10px',
                          color: 'rgba(191, 23, 8, 1)',
                          fontSize: '30px',
                          fontWeight: 'bold'
                      }}>
                         -30%
                      </span>
                  </p>
                </div>
              </GridItem>
            </GridContainer>
            <GridContainer>
              <GridItem xs={12} sm={4} md={4}>
                <Card profile>

                  <CardBody>
                    <h4 className={classes.cardTitle} style={{fontWeight: 'bold'}}>ZAJĘCIA INDYWIDUALNE</h4>
                    <Muted>
                      <p style={{color: 'rgba(86, 168, 31, 1)', fontWeight: 'bold', fontSize: '3em', marginTop: '10px'}} className={classes.cardCategory}>
                        70 <small style={{color: 'rgba(86, 168, 31, 1)'}}>zł/h</small>
                      </p>
                    </Muted>
                    <p style={{fontSize: '.85em', marginTop: '15px'}}>
                      Cena dotyczy języka: 
                      <br />
                      <span style={{fontWeight: 'bold'}}>Angielskiego, Niemieckiego, Norweskiego, Rosyjskiego, Polskiego</span>
                    </p>
                  </CardBody>
                  <CardFooter style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                    <div>
                      <img src={FlagGreatBritain} style={{ marginTop: '5px', height: 'auto', width: '30px', objectFit: 'cover'}} alt="..." />
                      <img src={FlagGerman} style={{ marginTop: '5px', height: 'auto', width: '30px', objectFit: 'cover'}} alt="..." />
                      <img src={FlagNorwegian} style={{ marginTop: '5px', height: 'auto', width: '30px', objectFit: 'cover'}} alt="..." />
                      <img src={FlagRussia} style={{ marginTop: '5px', height: 'auto', width: '30px', objectFit: 'cover'}} alt="..." />
                      <img src={FlagPoland} style={{ marginTop: '5px', height: 'auto', width: '30px', objectFit: 'cover'}} alt="..." />
                    </div>
                  </CardFooter>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={4} md={4}>
                <Card profile>
                  <CardBody>
                    <h4 className={classes.cardTitle} style={{fontWeight: 'bold'}}>ZAJĘCIA DLA 2 OSÓB</h4>
                    <Muted>
                      <p style={{color: 'rgba(86, 168, 31, 1)', fontWeight: 'bold', fontSize: '3em', marginTop: '10px'}} className={classes.cardCategory}>
                        40 <small style={{color: 'rgba(86, 168, 31, 1)'}}>zł/h</small>
                      </p>
                    </Muted>
                    <p style={{fontSize: '.85em', marginTop: '15px'}}>
                      Cena dotyczy języka: 
                      <br />
                      <span style={{fontWeight: 'bold'}}>Angielskiego, Niemieckiego, Norweskiego, Rosyjskiego, Polskiego</span>
                    </p>
                  </CardBody>
                  <CardFooter style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                    <div>
                      <img src={FlagGreatBritain} style={{ marginTop: '5px', height: 'auto', width: '30px', objectFit: 'cover'}} alt="..." />
                      <img src={FlagGerman} style={{ marginTop: '5px', height: 'auto', width: '30px', objectFit: 'cover'}} alt="..." />
                      <img src={FlagNorwegian} style={{ marginTop: '5px', height: 'auto', width: '30px', objectFit: 'cover'}} alt="..." />
                      <img src={FlagRussia} style={{ marginTop: '5px', height: 'auto', width: '30px', objectFit: 'cover'}} alt="..." />
                      <img src={FlagPoland} style={{ marginTop: '5px', height: 'auto', width: '30px', objectFit: 'cover'}} alt="..." />
                    </div>
                  </CardFooter>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={4} md={4}>
                <Card profile>
                  <CardBody>
                    <h4 className={classes.cardTitle} style={{fontWeight: 'bold'}}>ZAJĘCIA OD 3 OSÓB</h4>
                    <Muted>
                      <p style={{color: 'rgba(86, 168, 31, 1)', fontWeight: 'bold', fontSize: '3em', marginTop: '10px'}} className={classes.cardCategory}>
                        25 <small style={{color: 'rgba(86, 168, 31, 1)'}}>zł/h</small>
                      </p>
                    </Muted>
                    <p style={{fontSize: '.85em', marginTop: '15px'}}>
                      Cena dotyczy języka: 
                      <br />
                      <span style={{fontWeight: 'bold'}}>Angielskiego, Niemieckiego, Norweskiego, Rosyjskiego, Polskiego</span>
                    </p>
                  </CardBody>
                  <CardFooter style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                    <div>
                      <img src={FlagGreatBritain} style={{ marginTop: '5px', height: 'auto', width: '30px', objectFit: 'cover'}} alt="..." />
                      <img src={FlagGerman} style={{ marginTop: '5px', height: 'auto', width: '30px', objectFit: 'cover'}} alt="..." />
                      <img src={FlagNorwegian} style={{ marginTop: '5px', height: 'auto', width: '30px', objectFit: 'cover'}} alt="..." />
                      <img src={FlagRussia} style={{ marginTop: '5px', height: 'auto', width: '30px', objectFit: 'cover'}} alt="..." />
                      <img src={FlagPoland} style={{ marginTop: '5px', height: 'auto', width: '30px', objectFit: 'cover'}} alt="..." />
                    </div>
                  </CardFooter>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
        </div>
        </GridContainer>
      </div>
    </div>
  );
}
