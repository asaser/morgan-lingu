import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// import  from "@material-ui/icons/";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Button from "components/CustomButtons/Button.js";
import Muted from "components/Typography/Muted.js";

import teamsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/teamsStyle.js";

import bg7 from "assets/img/bg7.jpg";
import city from "assets/img/examples/city.jpg";
import marc from "assets/img/faces/marc.jpg";
import christian from "assets/img/faces/christian.jpg";
import kendall from "assets/img/faces/kendall.jpg";
import avatar from "assets/img/faces/avatar.jpg";
import cardProfile1 from "assets/img/examples/card-profile1.jpg";
import cardProfile2 from "assets/img/examples/card-profile2.jpg";
import cardProfile4 from "assets/img/examples/card-profile4.jpg";
import cardProfile1Square from "assets/img/faces/card-norway-flag.jpg";
// import cardNorwayFlag from "assets/img/faces/card-norway-flag.jpg";
import randomLectorFace from "assets/img/faces/card-profile1-square.jpg";
import lectorBartekNorwegian from "assets/img/Lectors/lectorBartekNorwegian.jpg";
import FlagNorwegian from "assets/img/FlagsLanguage/FlagNorwegian.png";

import cardProfile2Square from "assets/img/faces/card-profile2-square.jpg";
import cardProfile4Square from "assets/img/faces/card-profile4-square.jpg";
import cardProfile6Square from "assets/img/faces/card-profile6-square.jpg";
import { CardMedia } from "@material-ui/core";

const useStyles = makeStyles(teamsStyle);

function SectionInterestedAboutUs({ ...rest }) {
  const classes = useStyles();
  return (
    <div className="cd-section" {...rest}>
     <div
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={8}
              md={8}
              style={{marginBottom: "50px"}}
              className={
                classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
              }
            >
              <h2 className={classes.title}>Poznaj naszych lektorów językowych</h2>
            </GridItem>
          </GridContainer>


          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <Card>
                <GridContainer style={{display: 'flex'}}>
                  <GridItem xs={12} sm={6} md={5}>
                      <div profile style={{position: "absolute"}}>
                        <img src={FlagNorwegian} style={{ marginTop: '5px', height: 'auto', width: '52px', objectFit: 'cover'}} alt="..." />
                      </div>
                        <div style={{padding: "0"}}>
                          <img src={lectorBartekNorwegian} style={{ padding: '0', margin: '0', objectFit: 'contain', height: 'auto', width: '400px'}} alt="..." />
                        </div>
                  </GridItem>
                  <GridItem xs={12} sm={6} md={7}>
                        <h2 className={classes.cardTitle} style={{padding: '0px 20px 0px 20px'}}>Bartek</h2>
                        <Muted>
                          <h3 style={{fontWeight: 'bold', padding: '0px 20px 0px 20px'}}>Lektor <span style={{color: '#000080'}}>Norweskiego</span></h3>
                        </Muted>
                        <p style={{padding: '0px 20px 0px 20px', fontSize: '17px'}}>
                          Przez kilka lat mieszkałem w <span style={{color: '#000080'}}>Norwegii</span>, gdzie uczyłem się oraz pracowałem
                          w mieście Stavanger. Języka <span style={{color: '#000080'}}>Norweskiego</span> nauczyłem się uczęszczając 
                          do szkoły <span style={{color: '#000080'}}>Norweskiej</span> oraz poprzez rozmowę z mieszkańcami.
                          Uwielbiam ten kraj, legendy z nim związane oraz przepiękną przyrodę tam występującą.
                        </p>
                      
                  </GridItem>
                </GridContainer>
              </Card>
            </GridItem>
          </GridContainer>


          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <Card>
                <GridContainer>
                  <GridItem xs={12} sm={6} md={5}>
                      <CardAvatar profile style={{position: "absolute"}}>
                          <img src={FlagNorwegian} alt="..." />
                      </CardAvatar>
                      <div style={{padding: "0"}}>
                        <img src={randomLectorFace} alt="..." />
                      </div>
                  </GridItem>
                  <GridItem xs={12} sm={6} md={7}>
                        <h4 className={classes.cardTitle}>George West</h4>
                        <Muted>
                          <h6 className={classes.cardCategory}>Lector Norwegian</h6>
                        </Muted>
                        <p className={classes.description}>
                          Don{"'"}t be scared of the truth because we need to restart
                          the human foundation in truth And I love you like Kanye
                          loves Kanye I love Rick Owens’ bed design but the back is...
                          Don{"'"}t be scared of the truth because we need to restart
                          the human foundation in truth And I love you like Kanye
                          loves Kanye I love Rick Owens’ bed design but the back is...
                          Don{"'"}t be scared of the truth because we need to restart
                          the human foundation in truth And I love you like Kanye
                          loves Kanye I love Rick Owens’ bed design but the back is...
                        </p>
                      
                  </GridItem>
                </GridContainer>
              </Card>
            </GridItem>
          </GridContainer>


          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <Card>
                <GridContainer>
                  <GridItem xs={12} sm={6} md={5}>
                      <CardAvatar profile style={{position: "absolute"}}>
                          <img src={FlagNorwegian} alt="..." />
                      </CardAvatar>
                      <div style={{padding: "0"}}>
                        <img src={randomLectorFace} alt="..." />
                      </div>
                  </GridItem>
                  <GridItem xs={12} sm={6} md={7}>
                        <h4 className={classes.cardTitle}>George West</h4>
                        <Muted>
                          <h6 className={classes.cardCategory}>Lector Norwegian</h6>
                        </Muted>
                        <p className={classes.description}>
                          Don{"'"}t be scared of the truth because we need to restart
                          the human foundation in truth And I love you like Kanye
                          loves Kanye I love Rick Owens’ bed design but the back is...
                          Don{"'"}t be scared of the truth because we need to restart
                          the human foundation in truth And I love you like Kanye
                          loves Kanye I love Rick Owens’ bed design but the back is...
                          Don{"'"}t be scared of the truth because we need to restart
                          the human foundation in truth And I love you like Kanye
                          loves Kanye I love Rick Owens’ bed design but the back is...
                        </p>
                      
                  </GridItem>
                </GridContainer>
              </Card>
            </GridItem>
          </GridContainer>


          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <Card>
                <GridContainer>
                  <GridItem xs={12} sm={6} md={5}>
                      <CardAvatar profile style={{position: "absolute"}}>
                          <img src={FlagNorwegian} alt="..." />
                      </CardAvatar>
                      <div style={{padding: "0"}}>
                        <img src={randomLectorFace} alt="..." />
                      </div>
                  </GridItem>
                  <GridItem xs={12} sm={6} md={7}>
                        <h4 className={classes.cardTitle}>George West</h4>
                        <Muted>
                          <h6 className={classes.cardCategory}>Lector Norwegian</h6>
                        </Muted>
                        <p className={classes.description}>
                          Don{"'"}t be scared of the truth because we need to restart
                          the human foundation in truth And I love you like Kanye
                          loves Kanye I love Rick Owens’ bed design but the back is...
                          Don{"'"}t be scared of the truth because we need to restart
                          the human foundation in truth And I love you like Kanye
                          loves Kanye I love Rick Owens’ bed design but the back is...
                          Don{"'"}t be scared of the truth because we need to restart
                          the human foundation in truth And I love you like Kanye
                          loves Kanye I love Rick Owens’ bed design but the back is...
                        </p>
                      
                  </GridItem>
                </GridContainer>
              </Card>
            </GridItem>
          </GridContainer>

        </div>
      </div>
    </div>
  );
}

export default SectionInterestedAboutUs;
