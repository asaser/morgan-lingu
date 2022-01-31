import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import MenuBookIcon from "@material-ui/icons/MenuBook";
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';
import HeadsetIcon from '@material-ui/icons/Headset';
import GTranslateIcon from '@material-ui/icons/GTranslate';
import SchoolIcon from '@material-ui/icons/School';
import HighlightIcon from '@material-ui/icons/Highlight';

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import featuresStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/featuresStyle.js";


const useStyles = makeStyles(featuresStyle);

export default function SectionFeatures({ ...rest }) {
  const classes = useStyles();
  return (
    <div className="cd-section" {...rest}
      style={{paddingBottom: "50px"}}
    >
      <div
        className={classes.featuresHowLearn}
      >
        <GridContainer>
          <GridItem
            xs={12}
            sm={8}
            md={8}
            className={
              classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
            }
          >
            <h2 className={classes.title}>Nasze metody nauki</h2>
          </GridItem>
          <div className={classes.container}>
            <GridContainer className={classes.gridContainer}>
              <GridItem xs={12} sm={4} className={classes.gridItem}>
                <InfoArea
                  vertical
                  className={classes.infoArea5}
                  icon={MenuBookIcon}
                  title="Materiały"
                  description={
                    <p style={{fontSize: '1.2em'}}>
                      Udostępniamy dużą ilość darmowych materiałów dostosowane do zainteresowań
                      ucznów oraz poziomu jezyka
                    </p>
                  }
                  iconColor="info"
                />
              </GridItem>
              <GridItem xs={12} sm={4} className={classes.gridItem}>
                <InfoArea
                  vertical
                  className={classes.infoArea5}
                  icon={RecordVoiceOverIcon}
                  title="Przełamanie barier w mówieniu"
                  description={
                    <p style={{fontSize: '1.2em'}}>
                      Stawiamy przede wszystkim na naukę swobodnego komunikowania się
                      poprzez dużą ilość konwersacji na lekcjach z lektorami
                    </p>
                  }
                  iconColor="danger"
                />
              </GridItem>
              <GridItem xs={12} sm={4} className={classes.gridItem}>
                <InfoArea
                  vertical
                  className={classes.infoArea5}
                  icon={HeadsetIcon}
                  title="Słuchamy i piszemy"
                  description={
                    <p style={{fontSize: '1.2em'}}>
                      Nauka poprzez słuchanie podcastów, muzyki, kanałów na YouTube 
                      oraz poprzez pisanie różnorodnych dłuższych i krótszych przydatnych tekstów
                    </p>
                  }
                  iconColor="primary"
                />
              </GridItem>
            </GridContainer>
            <GridContainer className={classes.gridContainer}>
              <GridItem xs={12} sm={4} className={classes.gridItem}>
                <InfoArea
                  vertical
                  className={classes.infoArea5}
                  icon={GTranslateIcon}
                  title="Proste tłumaczenie"
                  description={
                    <p style={{fontSize: '1.2em'}}>
                      Wyjaśniamy przejrzyście gramatykę oraz inne, nurtujące Cię zagadnienia,
                      aż staną się proste i zrozumiałe
                    </p>
                  }
                />
              </GridItem>
              <GridItem xs={12} sm={4} className={classes.gridItem}>
                <InfoArea
                  vertical
                  className={classes.infoArea5}
                  icon={SchoolIcon}
                  title="Motywacja"
                  description={
                    <p style={{fontSize: '1.2em'}}>
                      Motywujemy Cię do samodzielnej nauki poprzez ciekawe zadania domowe,
                      dodatkowe materiały, udostępniane filmy, muzykę itp.
                    </p>
                  }
                />
              </GridItem>
              <GridItem xs={12} sm={4} className={classes.gridItem}>
                <InfoArea
                  vertical
                  className={classes.infoArea5}
                  icon={HighlightIcon}
                  title="Indywidualne podejście"
                  description={
                    <p style={{fontSize: '1.2em'}}>
                      Rozumiemy, że każdy potrzebuje innych metod nauki (metody wzrokowe,
                      słuchowe, kinestetyczne) i dopasowujemy je do Ciebie
                    </p>
                  }
                />
              </GridItem>
            </GridContainer>
          </div>
        </GridContainer>
      </div>
    </div>
  );
}
