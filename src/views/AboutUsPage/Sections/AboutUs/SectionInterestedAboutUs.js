import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// import  from "@material-ui/icons/";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import Muted from "components/Typography/Muted.js";

import teamsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/teamsStyle.js";

import lectorBartekKorytkowski from "assets/img/Lectors/lectorBartek.jpg";
import lectorZygmuntMocek from "assets/img/Lectors/lectorZygmunt.jpg";
import lectorMalgorzataPac from "assets/img/Lectors/lectorMałgorzata.jpg";

import FlagNorwegian from "assets/img/FlagsLanguage/FlagNorwegian.png";
import FlagRussia from "assets/img/FlagsLanguage/FlagRussia.png";
import FlagGerman from "assets/img/FlagsLanguage/FlagGerman.png";
import FlagGreatBritain from "assets/img/FlagsLanguage/FlagGreatBritain.png";
import FlagPoland from "assets/img/FlagsLanguage/FlagPoland.png";

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
                          <img src={lectorBartekKorytkowski} style={{ padding: '0', margin: '0', objectFit: 'contain', height: 'auto', width: '400px'}} alt="..." />
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

                          <br />
                          <span style={{color: '#000080', fontSize: '20px', fontWeight: 'bold'}}>Nauczmy się języka! :D</span>
                        </p>
                      
                  </GridItem>
                </GridContainer>
              </Card>
            </GridItem>
          </GridContainer>


          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <Card>
                <GridContainer style={{display: 'flex'}}>
                  <GridItem xs={12} sm={6} md={5}>
                      <div profile style={{position: "absolute", display: 'flex', flexDirection: 'column'}}>
                        <img src={FlagGreatBritain} style={{ marginTop: '5px', height: 'auto', width: '52px', objectFit: 'cover'}} alt="..." />
                        <img src={FlagGerman} style={{ marginTop: '5px', height: 'auto', width: '52px', objectFit: 'cover'}} alt="..." />
                        <img src={FlagRussia} style={{ marginTop: '5px', height: 'auto', width: '52px', objectFit: 'cover'}} alt="..." />
                        <img src={FlagNorwegian} style={{ marginTop: '5px', height: 'auto', width: '52px', objectFit: 'cover'}} alt="..." />

                      </div>
                        <div style={{padding: "0"}}>
                          <img src={lectorZygmuntMocek} style={{ padding: '0', margin: '0', objectFit: 'contain', height: 'auto', width: '400px'}} alt="..." />
                        </div>
                  </GridItem>
                  <GridItem xs={12} sm={6} md={7}>
                        <h2 className={classes.cardTitle} style={{padding: '0px 20px 0px 20px'}}>Zygmunt</h2>
                        <Muted>
                          <h3 style={{fontWeight: 'bold', padding: '0px 20px 0px 20px'}}>Lektor <span style={{color: '#000080'}}>Angielskiego, Niemieckiego, Rosyjskiego i Norweskiego</span></h3>
                        </Muted>
                        <p style={{padding: '0px 20px 0px 20px', fontSize: '17px'}}>
                          Od młodości interesowały mnie współczesne i przeszłe <span style={{color: '#000080'}}>języki świata.</span>
                          chciałem mieć chociaż powierzchowną wiedzą na temat każdego <span style={{color: '#000080'}}>języka.</span>
                          Wraz z wiekiem moje zainteresowania skonkretyzowały się na <span style={{color: '#000080'}}>angielski, niemiecki, rosyjski i norweski.</span>
                          Lubię ćwiczyć języki poprzez luźną rozmowę i uważam że gry komputerowe, muzyka czy filmy to świetne narzędzia do nauki.
                          <br />
                          <span style={{color: '#000080', fontSize: '20px', fontWeight: 'bold'}}>Do usłyszenia!</span>
                        </p>
                      
                  </GridItem>
                </GridContainer>
              </Card>
            </GridItem>
          </GridContainer>



          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <Card>
                <GridContainer style={{display: 'flex'}}>
                  <GridItem xs={12} sm={6} md={5}>
                      <div profile style={{position: "absolute"}}>
                        <img src={FlagPoland} style={{ marginTop: '5px', height: 'auto', width: '52px', objectFit: 'cover'}} alt="..." />
                      </div>
                        <div style={{padding: "0"}}>
                          <img src={lectorMalgorzataPac} style={{ padding: '0', margin: '0', objectFit: 'contain', height: 'auto', width: '400px'}} alt="..." />
                        </div>
                  </GridItem>
                  <GridItem xs={12} sm={6} md={7}>
                        <h2 className={classes.cardTitle} style={{padding: '0px 20px 0px 20px'}}>Małgorzata</h2>
                        <Muted>
                          <h3 style={{fontWeight: 'bold', padding: '0px 20px 0px 20px'}}>Lektor <span style={{color: '#000080'}}>Polskiego</span></h3>
                        </Muted>
                        <p style={{padding: '0px 20px 0px 20px', fontSize: '17px'}}>
                          Jestem absolwentką <span style={{color: '#000080'}}>Uniwersytetu Jagiellońskiego na Wydziale Filozoficznym</span> 
                          Od najmłodszych lat fascynuje mnie piękno <span style={{color: '#000080'}}>języka polskiego</span>, lubię 
                          spędzać czas wśród słów. Pisze wiersze, które są wynikiem kompilacji emocji i zdarzeń, jakich 
                          doświadczyłam na swojej drodze. W 2021 wydałam swój debiutancki tomik poezji pt. <span style={{color: '#000080'}}>„Sanktuarium”.</span>.
                          Na co dzień staram się czytać dobre książki, opiekuję się trzema kotami. Do każdego ucznia mam 
                          indywidualne i fachowe podejście. 

                          <br />
                          <span style={{color: '#000080', fontSize: '20px', fontWeight: 'bold'}}>Zapraszam na wspólne zajęcia. :)</span>
                        </p>
                      
                  </GridItem>
                </GridContainer>
              </Card>
            </GridItem>
          </GridContainer>



          {/* <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <Card>
                <GridContainer style={{display: 'flex'}}>
                  <GridItem xs={12} sm={6} md={5}>
                      <div profile style={{position: "absolute"}}>
                        <img src={FlagNorwegian} style={{ marginTop: '5px', height: 'auto', width: '52px', objectFit: 'cover'}} alt="..." />
                      </div>
                        <div style={{padding: "0"}}>
                          <img src={lectorBartekKorytkowski} style={{ padding: '0', margin: '0', objectFit: 'contain', height: 'auto', width: '400px'}} alt="..." />
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
          </GridContainer> */}


        </div>
      </div>
    </div>
  );
}

export default SectionInterestedAboutUs;
