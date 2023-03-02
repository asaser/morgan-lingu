
/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
// @material-ui/icons
import FacebookIcon from '@material-ui/icons/Facebook';

// core components
import Footer from "components/Footer/Footer.js";

import contactUsStyle from "assets/jss/material-kit-pro-react/views/contactUsStyle.js";


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