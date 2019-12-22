import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Login from "./components/login/Login";
import CalendarContainer from "./components/Calendar/CalendarContainer";
// import ScheduleContainer from './components/Schedule/ScheduleContainer';
import DashboardContainer from "./components/dashboard/DashboardContainer";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./styles/theme";
import { spring, AnimatedSwitch } from "react-router-transition";
import Trophy from "./components/trophy/Trophy";
import Video from "./components/Video/Video";
import Notfound from "./components/Notfound";
import store from "./store";
import { Provider } from "react-redux";
import Training from "./components/training/Training";

// we need to map the `scale` prop we define below
// to the transform style property
function mapStyles(styles) {
  return {
    opacity: styles.opacity,
    transform: `scale(${styles.scale})`
  };
}

// wrap the `spring` helper to use a bouncy config
function bounce(val) {
  return spring(val, {
    stiffness: 330,
    damping: 22
  });
}

// child matches will...
const bounceTransition = {
  // start in a transparent, upscaled state
  atEnter: {
    opacity: 0,
    scale: 1.3
  },
  // leave in a transparent, downscaled state
  atLeave: {
    opacity: bounce(0),
    scale: bounce(0.7)
  },
  // and rest at an opaque, normally-scaled state
  atActive: {
    opacity: bounce(1),
    scale: bounce(1)
  }
};

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <AnimatedSwitch
            atEnter={bounceTransition.atEnter}
            atLeave={bounceTransition.atLeave}
            atActive={bounceTransition.atActive}
            mapStyles={mapStyles}
            className="route-wrapper"
          >
            <Route exact path="/" component={Login} />
            <Route exact path="/trophy" component={Trophy} />
            <Route exact path="/calendar" component={CalendarContainer} />
            <Route path="/dashboard" component={DashboardContainer} />
            <Route exact path="/video/:userId" component={Video} />
            <Route exact path="/training/:trainingId" component={Training} />
            <Route component={Notfound} />
          </AnimatedSwitch>
        </ThemeProvider>
      </Provider>
    </div>
  );
}

export default App;
