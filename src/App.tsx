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

const userSession = {
  user: {
    name: 'Alan Souza',
    thumbnail: '//s.gravatar.com/avatar/f850593bdae3cb1c8c535b4acfdfdb98?s=80',
  },
  items: [
    {
      label: 'Logout',
      href: '#',
    },
  ],
};

<RecoilTodos />;

const items = [
  {
    active: true,
    label: 'Recoil Todos',
    path: '/recoil-todos',
    exact: true,
  },
  {
    active: true,
    label: 'Formik Form',
    path: '/formik-form',
    exact: true,
  },
  {
    active: true,
    label: 'Simple Form',
    path: '/simple-form',
    exact: true,
  },
  {
    active: true,
    label: 'Top Ten',
    path: '/top-ten',
  },
  {
    active: true,
    label: 'First ten',
    path: '/first-ten',
  },
  {
    active: false,
    label: 'Info',
    path: '/info',
  },
];

export const App: React.FC<any> = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleToggleSidebar = () => setShowSidebar(!showSidebar);

  return (
    <Router>
      <Grommet theme={theme} full>
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
                  <Switch>
                    <Route exact path="/recoil-todos">
                      <RecoilTodos />
                    </Route>
                    <Route exact path="/formik-form">
                      <FormikForm />
                    </Route>
                    <Route exact path="/simple-form">
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
                      <Redirect to="/recoil-todos" />
                    </Route>
                  </Switch>
                </Box>
              </Box>
            </Box>
          )}
        </ResponsiveContext.Consumer>
      </Grommet>
    </Router>
  );
};
