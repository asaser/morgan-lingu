
/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Grid from '@material-ui/core/Grid';
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
import PinDrop from "@material-ui/icons/PinDrop";
import Phone from "@material-ui/icons/Phone";
import EmailIcon from '@material-ui/icons/Email';
import LanguageIcon from '@material-ui/icons/Language';
import BusinessCenter from "@material-ui/icons/BusinessCenter";
import FacebookIcon from '@material-ui/icons/Facebook';
import ShareIcon from '@material-ui/icons/Share';


// core components
import Header from "components/Header/Header.js";
import HeaderLinksMorganLingu from "components/Header/HeaderLinksMorganLingu.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Footer from "components/Footer/Footer.js";
import Parallax from "components/Parallax/Parallax.js";


import contactUsStyle from "assets/jss/material-kit-pro-react/views/contactUsStyle.js";
import { Button } from "@material-ui/core";


const useStyles = makeStyles(contactUsStyle);

function SectionFooter() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
      
      <Footer
        content={
          <div style={{marginTop: "30px"}}>
            <Grid container>
              <Grid xs={12} md={4} style={{fontWeight: "bold", marginTop: '10px'}}>
                <div>
                  <p style={{fontSize: "1.5em"}}>Jeśli masz pytania - zadzwoń do nas</p>
                  <p style={{fontSize: "2em", color: '#000080'}}>+48 604 678 347</p>
                </div>
              </Grid>
              <Grid xs={12} md={5} style={{fontWeight: "bold", marginTop: '10px'}}>
                <div>
                  <p style={{fontSize: "1.5em"}}>Lub napisz</p>
                  <p style={{fontSize: "2em", color: '#000080'}}>morganlingu@gmail.com</p>
                </div>
              </Grid>
              <Grid xs={12} md={3} style={{fontWeight: "bold", marginTop: '10px'}}>
                <div>
                  <p style={{fontSize: "1.5em"}}>Odwiedź nas:</p>
                  <p>
                    <a
                      href="https://www.facebook.com/morganLingu"
                      target="_blank"
                    >
                        <FacebookIcon style={{transform: 'scale(2)'}} />
                    </a>  
                  </p>
                </div>
              </Grid>
              <Grid xs={12} md={12} style={{marginTop: '20px'}}>
                <div style={{fontSize: "15px", justifyContent: "center"}}>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
              </Grid>
            </Grid>
          </div>
        }
      />
  );
}

export default SectionFooter;