import * as React from 'react';
import { Box, Grommet, ResponsiveContext } from 'grommet';
import { Menu } from 'grommet-icons';
import { useState } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import { theme } from './styles';
import { Info } from './pages/info';
import { RecoilTodos } from './pages/recoil-todos';
import { FormikForm } from './pages/formik-form';
import { SimpleForm } from './pages/simple-form';
import { TopTen } from './pages/top-ten';
import { FirstTen } from './pages/first-ten';
import { AppHeader } from './components/AppHeader';
import { SideBar } from './components/SideBar';
import { userSession, items } from './constants';
import { GrommetForm } from './pages/grommet-form';
import { grommet } from 'grommet/themes';

export const App: React.FC<any> = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const handleToggleSidebar = () => setShowSidebar(!showSidebar);
  return (
    <Router>
      <Grommet theme={grommet} full>
        <ResponsiveContext.Consumer>
          {() => (
            <Box fill>
              <AppHeader
                appName="My App"
                appIcon={<Menu />}
                userSession={userSession}
                onToggleSidebar={handleToggleSidebar}
              />
              <Box direction="row" flex overflow={{ horizontal: 'hidden' }}>
                {showSidebar && (
                  <SideBar
                    appIcon={<Menu color="brand" />}
                    items={items}
                    onToggleSidebar={handleToggleSidebar}
                  />
                )}
                <Box flex>
                  <Box fill align="center">
                    <Switch>
                      <Route path="/grommet-form">
                        <GrommetForm />
                      </Route>
                      <Route path="/recoil-todos">
                        <RecoilTodos />
                      </Route>
                      <Route path="/formik-form">
                        <FormikForm />
                      </Route>
                      <Route path="/simple-form">
                        <SimpleForm />
                      </Route>
                      <Route path="/top-ten">
                        <TopTen />
                      </Route>
                      <Route path="/first-ten">
                        <FirstTen />
                      </Route>
                      <Route path="/info">
                        <Info></Info>
                      </Route>
                      <Route>
                        <Redirect to={items[0].path} />
                      </Route>
                    </Switch>
                  </Box>
                </Box>
              </Box>
            </Box>
          )}
        </ResponsiveContext.Consumer>
      </Grommet>
    </Router>
  );
};
