import * as React from 'react';
import LayoutPage from 'components/layout/page/page.layout.controller';
import CalendarView from '../containers/calendar/view/view.calendar.controller';

const Home: React.FC = () => (
  <LayoutPage active="statistics">
    <CalendarView />
  </LayoutPage>
);

export default Home;
