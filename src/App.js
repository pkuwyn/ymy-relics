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
import Container from "@material-ui/core/Container";
//local import
import theme from "./theme";
import CollectionPage from "./pages/CollectionPage";
import ItemPage from "./pages/ItemPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useJsonApi } from "./hooks/dataFetchHooks";

function App() {
  const [collections, setCollections] = useJsonApi(
    "http://www.sourcescene.com/map/json_collections/"
  );
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div
          style={{
            minHeight: "100vh",
            paddingBottom: 60,
          }}
        >
          <Header />
          {collections.length > 0 ? (
            <Container maxWidth={false}>
              <Switch>
                <Route
                  exact
                  path="/"
                  render={(renderProps) => (
                    <CollectionPage
                      collections={collections}
                      {...renderProps}
                    />
                  )}
                ></Route>
                <Route
                  path="/:collectionId"
                  render={(renderProps) => (
                    <ItemPage collections={collections} {...renderProps} />
                  )}
                ></Route>
              </Switch>
            </Container>
          ) : null}
        </div>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
