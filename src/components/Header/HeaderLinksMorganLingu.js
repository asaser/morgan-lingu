/* eslint-disable */
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-pro-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const easeInOutQuad = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  const scrollGo = (element, to, duration) => {
    var start = element.scrollTop,
      change = to - start,
      currentTime = 0,
      increment = 20;

    var animateScroll = function () {
      currentTime += increment;
      var val = easeInOutQuad(currentTime, start, change, duration);
      element.scrollTop = val;
      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    };
    animateScroll();
  };

  const { dropdownHoverColor } = props;
  const classes = useStyles();
  return (
    <>
    <List>

    <ListItem className={classes.listItem}>
      <Link to="/" className={classes.dropdownLink} style={{fontSize: '16px', fontWeight: '500'}}>
        STRONA GŁÓWNA
      </Link>
    </ListItem>

    <ListItem className={classes.listItem}>
      <Link to="/price-language-page" className={classes.dropdownLink} style={{fontSize: '16px', fontWeight: '500'}}>
        CENNIK
      </Link>
    </ListItem>

    <ListItem className={classes.listItem}>
      <CustomDropdown
        noLiPadding
        navDropdown
        hoverColor={dropdownHoverColor}
        buttonText="Języki"
        buttonProps={{
          className: classes.navLink,
          color: "transparent",
        }}
        dropdownList={[
          <Link to="/english" className={classes.dropdownLink}>
            Angielski
          </Link>,

          <Link to="/german" className={classes.dropdownLink}>
            Niemiecki
          </Link>,


          <Link to="/norwegian" className={classes.dropdownLink}>
            Norweski
          </Link>,

          <Link to="/russian" className={classes.dropdownLink}>
            Rosyjski
          </Link>,

          <Link to="/polish" className={classes.dropdownLink}>
            Polski
          </Link>,
        ]}
      />
      </ListItem>

    <ListItem className={classes.listItem}>
      <Link to="/how-learn-page" className={classes.dropdownLink} style={{fontSize: '16px', fontWeight: '500'}}>
        JAK UCZYMY
      </Link>
    </ListItem>

    <ListItem className={classes.listItem}>
      <Link to="/about-page" className={classes.dropdownLink} style={{fontSize: '16px', fontWeight: '500'}}>
        O NAS
      </Link>
    </ListItem>

    <ListItem className={classes.listItem}>
      <Link to="/contact-page" className={classes.dropdownLink} style={{fontSize: '16px', fontWeight: '500'}}>
        KONTAKT
      </Link>
    </ListItem>

    <List className={classes.list + " " + classes.mlAuto}>
      <ListItem className={classes.listItem}>
          <Button
            color="transparent"
            href="https://www.facebook.com/morganLingu"
            target="_blank"
            className={classes.navLink + " " + classes.navLinkJustIcon}
          >
            <i className={"fab fa-facebook"} />
          </Button>
        </ListItem>
    </List>
  </List>
</>
  );
}

HeaderLinks.defaultProps = {
  hoverColor: "primary",
};

HeaderLinks.propTypes = {
  dropdownHoverColor: PropTypes.oneOf([
    "dark",
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "rose",
  ]),
};
