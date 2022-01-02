import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
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


const useStyles = makeStyles(featuresStyle);

export default function SectionFeatures({ ...rest }) {
  const classes = useStyles();
  return (
    <div className="cd-section" {...rest}
      style={{paddingBottom: "50px"}}
    >
      {/* Feature 5 START */}
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
                  icon={Code}
                  title="Materiały"
                  description={
                    <p>
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
                  icon={FormatPaint}
                  title="Przełamanie barier w mówieniu"
                  description={
                    <p>
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
                  icon={Dashboard}
                  title="Słuchamy i piszemy"
                  description={
                    <p>
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
                  icon={ViewCarousel}
                  title="Proste tłumaczenie"
                  description={
                    <p>
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
                  icon={AccessTime}
                  title="Motywacja"
                  description={
                    <p>
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
                  icon={AttachMoney}
                  title="Indywidualne podejście"
                  description={
                    <p>
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
      {/* Feature 5 END */}
    </div>
  );
}
