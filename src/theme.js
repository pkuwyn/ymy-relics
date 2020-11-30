import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { zhCN } from "@material-ui/core/locale";

//color defination
const arcBlue = "#3D71A4";
const arcOrange = "#FFBA60";
const ymyYellow = "#D6B87E";
const logoRed = "#C53836";

let theme = createMuiTheme(
  {
    palette: {
      common: {
        blue: arcBlue,
        orange: arcOrange,
      },
      primary: {
        main: ymyYellow,
      },
      secondary: {
        main: logoRed,
      },
    },

    typography: {
      fontFamily: ["sans-serif", "Microsoft YaHei"].join(","),
      htmlFontSize: 16,
      fontSize: 14,
      subtitle2: {
        fontWeight: 700,
      },
      button: {
        fontWeight: 500,
      },
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
      MuiCssBaseline: {
        "@global": {
          body: {
            height: "100vh",
          },
        },
      },
    },
  },
  zhCN
);

// theme = responsiveFontSizes(theme);
// console.log(theme.props.MuiToolbar.root);
export default theme;
