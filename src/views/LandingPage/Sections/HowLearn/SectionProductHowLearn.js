import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
import GroupWork from "@material-ui/icons/GroupWork";
import Airplay from "@material-ui/icons/Airplay";
import LocationOn from "@material-ui/icons/LocationOn";
import Extension from "@material-ui/icons/Extension";
import ChildFriendly from "@material-ui/icons/ChildFriendly";
import WatchLater from "@material-ui/icons/WatchLater";
import Code from "@material-ui/icons/Code";
import FormatPaint from "@material-ui/icons/FormatPaint";
import Dashboard from "@material-ui/icons/Dashboard";
import ViewCarousel from "@material-ui/icons/ViewCarousel";
import AccessTime from "@material-ui/icons/AccessTime";
import AttachMoney from "@material-ui/icons/AttachMoney";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import featuresStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/featuresStyle.js";

import iphone from "assets/img/sections/iphone.png";
import iphone2 from "assets/img/sections/iphone2.png";
import bg9 from "assets/img/bg9.jpg";

import productStyle from "assets/jss/material-kit-pro-react/views/landingPageSections/productStyle.js";


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
              <div className={classes.phoneContainer}>
                <img src={iphone} alt="..." />
              </div>
            </GridItem>
            <GridItem xs={12} sm={6} md={6}>
              <h2 className={classes.title}>Co zyskasz ucząc się z nami</h2>
              <InfoArea
                className={classes.infoArea}
                icon={Extension}
                title="Zaczniesz mówić płynnie w danym języku"
                iconColor="primary"
              />
              <InfoArea
                className={classes.infoArea}
                icon={ChildFriendly}
                title="W prosty sposób zrozumiesz gramatykę"
                iconColor="primary"
              />
              <InfoArea
                className={classes.infoArea}
                icon={WatchLater}
                title="Będziesz przygotowany na testy językowe"
                iconColor="primary"
              />
              <InfoArea
                className={classes.infoArea}
                icon={ChildFriendly}
                title="Poznasz kulturę i zwyczaje mieszkańców wybranego kraju"
                iconColor="primary"
              />
              <InfoArea
                className={classes.infoArea}
                icon={ChildFriendly}
                title="Będziesz w stanie załatwić każdą sprawę w urzędzie, u lekarza itp."
                iconColor="primary"
              />
            </GridItem>
          </GridContainer>
        </div>
        {/* Feature 3 END */}
      </div>
    </div>
  );
}