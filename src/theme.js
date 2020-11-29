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
        main: "#C53836",
      },
      secondary: {
        main: "#ffab40",
      },
    },

    typography: {
      fontFamily: ["Arial", "sans-serif", "Microsoft YaHei"].join(","),
      htmlFontSize: 16,
      fontSize: 14,
    },
    props: {
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
