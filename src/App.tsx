import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import moment from 'moment';
import 'moment/locale/fr';
import { GlobalStyle } from 'theme/styled/reset.theme';
import './App.css';
/* --------------------------------- APOLLO --------------------------------- */

import { CalendarContext, CalendarProvider } from 'data/context/calendar/calendar.context';
import { ROUTER } from 'data/constant/routing.constant';

/* --------------------------------- ROUTES --------------------------------- */
import Home from 'pages/home.page';

moment.locale('fr');

const App = () => {
  return (
    <CalendarProvider>
      <GlobalStyle />
      <CalendarContext.Consumer>
        {CalendarContextConsumer => (
          <Router>
            <Switch>
              <Route exact path={ROUTER.page.home.path} component={() => <Home />} />
            </Switch>
          </Router>
        )}
      </CalendarContext.Consumer>
    </CalendarProvider>
  );
};

export default App;
