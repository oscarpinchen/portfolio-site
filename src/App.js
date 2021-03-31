import React from "react";
import Home from "./pages/home";
import Toggle from "./components/globalStyles/Toggler";
import GlobalStyles from "./components/globalStyles/globalStyles";
import { ThemeProvider } from "styled-components";
import { useDarkMode } from "./components/globalStyles/useDarkMode";
import { lightTheme, darkTheme } from "./components/globalStyles/Themes";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import About from "./pages/about";
// import Navbar from "./components/navbar/Navbar";
// import { PATHS } from "./constants/paths";

function App() {
  const [theme, themeToggler, mountedComponent] = useDarkMode();

  const themeMode = theme === "light" ? lightTheme : darkTheme;

  if (!mountedComponent) return <div />;
  return (
    <div>
      <ThemeProvider theme={themeMode}>
        <>
          <GlobalStyles />
          <Toggle theme={theme} toggleTheme={themeToggler} />
          <Home />
          {/* <Router>
            <>
              <Navbar />
              <Switch>
                <Route path={PATHS.about} component={About} />
                <Route path={PATHS.home} component={Home} />
              </Switch>
            </>
          </Router> */}
        </>
      </ThemeProvider>
    </div>
  );
}

export default App;
