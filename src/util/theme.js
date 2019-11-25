export default {
  palette: {
    primary: {
      light: "#c483de",
      main: "#393e46",
      dark: "#29a19c",
      contrastText: "#fff"
    },
    secondary: {
      light: "#83deda",
      main: "#29a19c",
      dark: "#469592",
      contrastText: "#fff"
    }
  },
  spread: {
    typography: {
      useNextVariants: true
    },
    form: {
      textAlign: "center",
      backgroundColor: "white"
    },
    image: {
      margin: "100px auto 20px auto",
      width: 150
    },
    pageTitle: {
      margin: "100px auto 10px auto",
      
    },
    textField: {
      margin: "20px auto 10px auto",
      width: '100%'
    },
    button: {
      marginTop: 20,

      position: "relative"
    },
    customError: {
      color: "red",
      fontSize: "0.8rem",
      marginTop: 10
    },
    progress: {
      position: "absolute"
    },
    invisibleSeparator: {
      border: "none",
      margin: 4
    },
    visibleSeparator: {
      width: "100%",
      borderBottom: "1px solid rgba(0,0,0,0.1)",
      marginBottom: 10
    },
    paper: {
      padding: 20,
      margin: '0 auto',
      width: '80%'
    },
    buttons: {
      textAlign: "center",
      "& a": {
        margin: "20px 10px"
      }
    },
    inputURL: {
      marginTop: '5%',
      width: '80%',
      marginBottom: '5%'
    }
  }
};
