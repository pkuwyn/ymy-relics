import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

//local import
import theme from "./theme";
import CollectionPage from "./pages/CollectionPage";
import ItemPage from "./pages/ItemPage";
import Header from "./components/Header";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header />

        <Switch>
          <Route exact path="/" component={CollectionPage}></Route>
          <Route path="/:collectionId" component={ItemPage}></Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
