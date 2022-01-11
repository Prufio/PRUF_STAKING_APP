import {
  successColor,
  tooltip,
  cardTitle,
  cardText,
  grayColor,
  primaryColor,
  dangerColor,
  blackColor,
  whiteColor,
  hexToRgb,
} from "assets/jss/material-dashboard-pro-react.js";

import hoverCardStyle from "assets/jss/material-dashboard-pro-react/hoverCardStyle.js";

const dashboardStyle = {
  ...hoverCardStyle,
  tooltip,
  cardTitle: {
    ...cardTitle,
    marginTop: "0px",
    marginBottom: "3px",
  },
  cardHeaderHoverCustom: {
    transition: "all 300ms cubic-bezier(0.34, 1.61, 0.7, 1)",
    width: "calc(40% - 30px)",
    height: "calc(40% - 30px)",
  },
  cardIconTitle: {
    ...cardTitle,
    marginTop: "15px",
    marginBottom: "0px",
  },
  cardProductTitle: {
    ...cardTitle,
    marginTop: "0px",
    marginBottom: "3px",
    textAlign: "center",
  },
  cardTitleContent: {
    ...cardText,
  },
  cardCategory: {
    color: grayColor[0],
    fontSize: "14px",
    paddingTop: "10px",
    marginBottom: "0",
    marginTop: "0",
    margin: "0",
  },
  cardProductDesciprion: {
    textAlign: "center",
    color: grayColor[0],
  },
  stats: {
    color: grayColor[0],
    fontSize: "12px",
    lineHeight: "22px",
    display: "inline-flex",
    "& svg": {
      position: "relative",
      top: "4px",
      width: "16px",
      height: "16px",
      marginRight: "3px",
    },
    "& .fab,& .fas,& .far,& .fal,& .material-icons": {
      position: "relative",
      top: "4px",
      fontSize: "16px",
      marginRight: "3px",
    },
  },
  productStats: {
    paddingTop: "7px",
    paddingBottom: "7px",
    margin: "0",
  },
  successText: {
    color: successColor[0],
  },
  upArrowCardCategory: {
    width: 14,
    height: 14,
  },
  underChartIcons: {
    width: "17px",
    height: "17px",
  },
  price: {
    color: "inherit",
    "& h4": {
      marginBottom: "0px",
      marginTop: "0px",
    },
  },
  checkRoot: {
    padding: "14px",
    "&:hover": {
      backgroundColor: primaryColor[7],
    },
  },
  radioRoot: {
    padding: "16px",
    "&:hover": {
      backgroundColor: primaryColor[5],
    },
  },
  labelRoot: {
    marginLeft: "-14px",
  },
  checkboxAndRadio: {
    position: "relative",
    display: "block",
    marginTop: "10px",
    marginBottom: "10px",
  },
  checkboxAndRadioHorizontal: {
    position: "relative",
    display: "block",
    "&:first-child": {
      marginTop: "10px",
    },
    "&:not(:first-child)": {
      marginTop: "-14px",
    },
    marginTop: "0",
    marginBottom: "0",
  },
  checked: {
    color: primaryColor[5] + "!important",
  },
  checkedIcon: {
    width: "20px",
    height: "20px",
    border: "1px solid rgba(" + hexToRgb(blackColor) + ", .54)",
    borderRadius: "3px",
  },
  uncheckedIcon: {
    width: "0px",
    height: "0px",
    padding: "9px",
    border: "1px solid rgba(" + hexToRgb(blackColor) + ", .54)",
    borderRadius: "3px",
  },
  disabledCheckboxAndRadio: {
    "& $checkedIcon,& $uncheckedIcon,& $radioChecked,& $radioUnchecked": {
      borderColor: blackColor,
      opacity: "0.26",
      color: blackColor,
    },
  },
  label: {
    cursor: "pointer",
    paddingLeft: "0",
    color: grayColor[3],
    fontSize: "14px",
    lineHeight: "1.428571429",
    fontWeight: "400",
    display: "inline-flex",
    transition: "0.3s ease all",
    letterSpacing: "unset",
  },
  labelHorizontal: {
    color: "rgba(" + hexToRgb(blackColor) + ", 0.26)",
    cursor: "pointer",
    display: "inline-flex",
    fontSize: "14px",
    lineHeight: "1.428571429",
    fontWeight: "400",
    paddingTop: "39px",
    marginRight: "0",
    "@media (min-width: 992px)": {
      float: "right",
    },
  },
  labelHorizontalRadioCheckbox: {
    paddingTop: "22px",
  },
  labelLeftHorizontal: {
    color: "rgba(" + hexToRgb(blackColor) + ", 0.26)",
    cursor: "pointer",
    display: "inline-flex",
    fontSize: "14px",
    lineHeight: "1.428571429",
    fontWeight: "400",
    paddingTop: "22px",
    marginRight: "0",
  },
  labelError: {
    color: dangerColor[0],
  },
  radio: {
    color: primaryColor[0] + "!important",
  },
  radioChecked: {
    width: "16px",
    height: "16px",
    border: "1px solid " + primaryColor[7],
    borderRadius: "50%",
  },
  radioUnchecked: {
    width: "0px",
    height: "0px",
    padding: "7px",
    border: "1px solid rgba(" + hexToRgb(blackColor) + ", .54)",
    borderRadius: "50%",
  },
  inlineChecks: {
    marginTop: "8px",
  },
  iconCheckbox: {
    height: "116px",
    width: "116px",
    color: grayColor[0],
    padding: "0",
    margin: "0 auto 20px",
    "& > span:first-child": {
      borderWidth: "4px",
      borderStyle: "solid",
      borderColor: grayColor[9],
      textAlign: "center",
      verticalAlign: "middle",
      borderRadius: "50%",
      color: "inherit",
      transition: "all 0.2s",
    },
    "&:hover": {
      color: primaryColor[5],
      "& > span:first-child": {
        borderColor: primaryColor[5],
      },
    },
  },
  iconCheckboxChecked: {
    color: primaryColor[5],
    "& > span:first-child": {
      borderColor: primaryColor[5],
    },
  },
  iconCheckboxIcon: {
    fontSize: "40px",
    lineHeight: "111px",
  },
  switchBase: {
    color: primaryColor[5] + "!important",
  },
  switchIcon: {
    boxShadow: "0 1px 3px 1px rgba(" + hexToRgb(blackColor) + ", 0.4)",
    color: whiteColor + " !important",
    border: "1px solid rgba(" + hexToRgb(blackColor) + ", .54)",
  },
  switchIconChecked: {
    borderColor: primaryColor[0],
    transform: "translateX(0px)!important",
  },
  switchBar: {
    width: "30px",
    height: "15px",
    backgroundColor: "rgb(" + hexToRgb(grayColor[18]) + ")",
    borderRadius: "15px",
    opacity: "0.7!important",
  },
  switchChecked: {
    "& + $switchBar": {
      backgroundColor: "rgba(" + hexToRgb(primaryColor[5]) + ", 1) !important",
    },
    "& $switchIcon": {
      borderColor: primaryColor[5],
    },
  },
};

export default dashboardStyle;
