import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import cardsStyle from "assets/jss/material-kit-pro-react/views/presentationSections/cardsStyle.js";

import cardsTest from "assets/img/saleInsideBg1.png";

const useStyles = makeStyles(cardsStyle);

export default function SectionCards() {
  const classes = useStyles();
  return (
    <div className={classNames(classes.section)}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem md={3} sm={12}>
            <div className={classes.imageContainer}>
              <img src={cardsTest} alt="views" />
            </div>
          </GridItem>
          <GridItem md={7} sm={12} style={{overflowX:'auto'}}>
            <h1 style={{textAlign: 'center', fontWeight: '500'}}><span style={{color: 'rgba(215, 83, 71, 1)'}}>PROMOCJA!!!</span></h1>

            <h2 style={{textAlign: 'center', fontWeight: '500'}}>Wszystkie języki aż <span style={{
              color: 'rgba(191, 23, 8, 1)',
              fontSize: '50px',
              fontWeight: 'bold'
            }}>
              -30%</span></h2>
          
            <div>
              <div style={{display: 'flex'}}>
                <h3 style={{fontWeight: '500'}}>ZAJĘCIA INDYWIDUALNE ~ </h3>
                <h1 style={{marginLeft: '20px', color: 'rgba(86, 168, 31, 1)', fontWeight: 'bold'}}>70 <small style={{color: 'rgba(86, 168, 31, 1)'}}>zł/h</small></h1>
              </div>
              <hr />

              <div style={{display: 'flex'}}>
                <h3 style={{fontWeight: '500'}}>ZAJĘCIA DLA 2 OSÓB ~</h3>
                <h1 style={{marginLeft: '20px', color: 'rgba(86, 168, 31, 1)', fontWeight: 'bold'}}>45 <small style={{color: 'rgba(86, 168, 31, 1)'}}>zł/h</small></h1>
              </div>
  
              <hr />

              <div style={{display: 'flex'}}>
                <h3 style={{fontWeight: '500'}}>ZAJĘCIA OD 3 OSÓB ~</h3>
                <h1 style={{marginLeft: '20px', color: 'rgba(86, 168, 31, 1)', fontWeight: 'bold'}}>30 <small style={{color: 'rgba(86, 168, 31, 1)'}}>zł/h</small></h1>
              </div>
            </div>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
