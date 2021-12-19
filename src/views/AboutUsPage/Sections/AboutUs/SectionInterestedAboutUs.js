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
import cardNorwayFlag from "assets/img/faces/card-norway-flag.jpg";

import cardProfile2Square from "assets/img/faces/card-profile2-square.jpg";
import cardProfile4Square from "assets/img/faces/card-profile4-square.jpg";
import cardProfile6Square from "assets/img/faces/card-profile6-square.jpg";

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
              <h5 className={classes.descriptionWhite}>
                Może jakiś tekst
              </h5>
            </GridItem>
          </GridContainer>


          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <Card>
                <GridContainer>
                  <GridItem xs={12} sm={6} md={6}>
                      <CardAvatar profile>
                        <a>
                          <img src={cardNorwayFlag} alt="..." />
                        </a>
                      </CardAvatar>
                      {/* <CardBody>
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          <img src={cardNorwayFlag} alt="..." />
                        </a>                      
                      </CardBody> */}
                      
                      
                  </GridItem>
                  <GridItem xs={12} sm={6} md={6}>
                        <h4 className={classes.cardTitle}>George West</h4>
                        <Muted>
                          <h6 className={classes.cardCategory}>BACKEND HACKER</h6>
                        </Muted>
                        <p className={classes.description}>
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
