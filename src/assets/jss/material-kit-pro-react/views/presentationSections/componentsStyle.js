import {
  container,
  title,
  mlAuto,
  blackColor,
  grayColor,
  hexToRgb,
} from "assets/jss/material-kit-pro-react.js";

const reusableStylesForImgs = {
  position: "absolute",
  boxShadow:
    "0 8px 10px 1px rgba(" +
    hexToRgb(blackColor) +
    ", 0.14), 0 3px 14px 2px rgba(" +
    hexToRgb(blackColor) +
    ", 0.12), 0 5px 5px -3px rgba(" +
    hexToRgb(blackColor) +
    ", 0.2)",
};

const componentsStyle = (theme) => ({
  container,
  mlAuto,
  title: {
    ...title,
    marginBottom: "5px",
    marginTop: "60px",
    "& + $description": {
      marginTop: "5px",
      marginBottom: "30px",
    },
  },
  description: {
    color: grayColor[0],
  },
  imageContainer: {
    height: "560px",
    position: "relative",
  },
  componentsMacbook: {
    [theme.breakpoints.down("sm")]: {
      maxWidth: "850px!important",
      maxHeight: "480px!important",
      marginTop: "12vh",
      left: "-12px",
    },
    [theme.breakpoints.down(768)]: {
      maxWidth: "350px!important",
      maxHeight: "250px!important",
      marginTop: "12vh",
      left: "-12px",
    },
    width: "auto",
    left: "-100px",
    top: 0,
    height: "100%",
    position: "absolute",
  },
  shoppingCart: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
    ...reusableStylesForImgs,
    left: "-13%",
    top: "27%",
    height: "175px",
    borderRadius: "2px",
    WebkitAnimation: "Floatingx 14s ease-in-out infinite",
    float: "left",
  },
  shareButton: {
    [theme.breakpoints.down("md")]: {
      left: "17%",
      top: "27%",
    },
    [theme.breakpoints.down("sm")]: {
      left: "-17%",
      top: "27%",
    },
    ...reusableStylesForImgs,
    left: "50%",
    top: "40%",
    height: "40px",
    WebkitAnimation: "Floatingy 16s ease-in-out infinite",
  },
  cardImage: {
    [theme.breakpoints.down("md")]: {
      top: "20%",
      left: "65%",
    },
    [theme.breakpoints.down("sm")]: {
      top: "20%",
    },
    ...reusableStylesForImgs,
    left: "35%",
    top: "20%",
    height: "50px",
    WebkitAnimation: "Floatingy 18s ease-in-out infinite",
  },
  twitterImage: {
    [theme.breakpoints.down("md")]: {
      top: "20%",
      left: "65%",
    },
    [theme.breakpoints.down("sm")]: {
      top: "20%",
    },
    ...reusableStylesForImgs,
    left: "10%",
    top: "30%",
    height: "50px",
    WebkitAnimation: "Floatingy 20s ease-in-out infinite",
  },




  iconsImage: {
    [theme.breakpoints.down("md")]: {
      left: "47%",
      top: "37%",
    },
    [theme.breakpoints.down("sm")]: {
      left: "-7%",
      top: "37%",
    },
    ...reusableStylesForImgs,
    left: "55%",
    top: "60%",
    height: "40px",
    WebkitAnimation: "Floatingx 16s ease-in-out infinite",
  },



  repostImage: {
    [theme.breakpoints.down("md")]: {
      top: "54%",
    },
    ...reusableStylesForImgs,
    left: "0%",
    top: "58%",
    height: "40px",
    WebkitAnimation: "Floatingy 15s ease-in-out infinite",
  },
});

export default componentsStyle;
