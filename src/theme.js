import { red } from "@material-ui/core/colors";
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { zhCN } from "@material-ui/core/locale";

//color defination
const arcBlue = "#0B72B9";
const arcOrange = "#FFBA60";

let theme = createMuiTheme(
  {
    palette: {
      common: {
        blue: arcBlue,
        orange: arcOrange,
      },
      primary: {
        main: "#c62828",
      },
      secondary: {
        main: "#ffab40",
      },
    },

    typography: {
      fontFamily: ["Arial", "sans-serif", "Microsoft YaHei"].join(","),
      htmlFontSize: 16,
      // fontSize: 14,
      fontSize: 14,
      // h3: {
      //   fontSize: "1.6rem",
      //   fontWeight: 300,
      // },

      tab: {
        fontFamily: "Raleway",
        fontWeight: 700,
        fontSize: "1rem",
        textTransform: "none",
      },
      estimate: {
        fontFamily: "Pacifico",
        fontSize: "1rem",
        fontWeight: 300,
        textTransform: "none",
        color: "white",
      },
    },
    props: {
      // MuiToolbar: {
      //   disableGutters: true,
      // },
      MuiButton: {
        variant: "outlined",
      },
    },
    overrides: {
      // MuiToolbar: {
      //   root: {
      //     paddingLeft: "0 !important",
      //   },
      // },
      // MuiAppBar: {
      //   root: {
      //     border: "5px solid green",
      //   },
      // },
      //   MuiCssBaseline: {
      //     "@global": {
      //       html: {
      //         backgroundColor: "red",
      //       },
      //     },
      //   },
    },
  },
  zhCN
);

// theme = responsiveFontSizes(theme);
// console.log(theme.props.MuiToolbar.root);
export default theme;
