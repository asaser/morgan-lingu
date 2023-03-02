import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import LooksOneIcon  from "@material-ui/icons/LooksOne"
import LooksTwoIcon  from "@material-ui/icons/LooksTwo"
import Looks3Icon  from "@material-ui/icons/Looks3"
import Looks4Icon  from "@material-ui/icons/Looks4"
import Looks5Icon  from "@material-ui/icons/Looks5"

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import featuresStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/featuresStyle.js";

import iphone from "assets/img/mobilePictureHowLearn.png";


const useStyles = makeStyles(featuresStyle);

export default function SectionFeatures({ ...rest }) {
  const classes = useStyles();
  return (
    <div className="cd-section" {...rest}>
      <div className={classes.container}>
        {/* Feature 3 START */}
        <div className={classes.features3}>
          <GridContainer>
            <GridItem xs={12} sm={6} md={6}>
              <div className={classes.phoneContainer} style={{marginTop: '100px'}}>
                <img src={iphone} alt="..." />
              </div>
            </GridItem>
            <GridItem xs={12} sm={6} md={6}>
              <h2 className={classes.title}>Co zyskasz ucząc się z nami</h2>
              <InfoArea
                className={classes.infoArea}
                icon={LooksOneIcon}
                title="Zaczniesz mówić płynnie w danym języku"
                iconColor="primary"
              />
              <InfoArea
                className={classes.infoArea}
                icon={LooksTwoIcon}
                title="W prosty sposób zrozumiesz gramatykę"
                iconColor="primary"
              />
              <InfoArea
                className={classes.infoArea}
                icon={Looks3Icon}
                title="Będziesz przygotowany na testy językowe"
                iconColor="primary"
              />
              <InfoArea
                className={classes.infoArea}
                icon={Looks4Icon}
                title="Poznasz kulturę i zwyczaje mieszkańców wybranego kraju"
                iconColor="primary"
              />
              <InfoArea
                className={classes.infoArea}
                icon={Looks5Icon}
                title="Będziesz w stanie załatwić każdą sprawę w urzędzie, u lekarza itp."
                iconColor="primary"
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}