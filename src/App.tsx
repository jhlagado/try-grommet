import * as React from 'react';
import {
  Box,
  Button,
  Heading,
  Grommet,
  Layer,
  ResponsiveContext,
  Text,
  TextInput,
} from 'grommet';
import {
  Menu,
  FormClose,
  FormSearch,
} from 'grommet-icons';
import { useState } from 'react';

import {
  matchPath,
  withRouter,
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

const userSession = {
  user: {
    name: 'Alan Souza',
    thumbnail: '//s.gravatar.com/avatar/b226da5c619b18b44eb95c30be393953?s=80',
  },
  items: [
    {
      label: 'Logout',
      href: '#',
    },
  ],
};

export const Avatar = ({ name, url, ...rest }: any) => (
  <Box
    a11yTitle={`${name} avatar`}
    height="avatar"
    width="avatar"
    round="full"
    background={`url(${url})`}
    {...rest}
  />
);

export const UserMenu = ({ user = {}, items = [], ...rest }: any) => (
  <Menu
    dropAlign={{ top: 'bottom', right: 'right' }}
    icon={false}
    items={items.map((item: any) => ({
      ...item,
      label: <Text size="small">{item.label}</Text>,
      onClick: () => {
        return;
      }, // no-op
    }))}
    label={<Avatar name={user.name} url={user.thumbnail} />}
    {...rest}
  />
);

export const AppHeader = ({
  appName,
  appIcon,
  userSession,
  onToggleSidebar,
}: any) => (
  <Box
    tag="header"
    direction="row"
    background="brand"
    align="center"
    elevation="medium"
    justify="between"
    responsive={false}
    pad={!userSession ? { vertical: 'xsmall' } : undefined}
    style={{ position: 'relative' }}
  >
    <Button onClick={onToggleSidebar}>
      <Box
        flex={false}
        direction="row"
        align="center"
        margin={{ left: 'small' }}
      >
        {appIcon}
        <Heading level="4" margin={{ left: 'small', vertical: 'none' }}>
          {appName}
        </Heading>
      </Box>
    </Button>

    <Box direction="row" align="center">
      <Box
        margin={{ left: 'medium' }}
        round="xsmall"
        background={{ color: 'white', opacity: 'weak' }}
        direction="row"
        align="center"
        pad={{ horizontal: 'small' }}
      >
        <FormSearch color="white" />
        <TextInput plain placeholder="Search" type="search" />
      </Box>
      {userSession && (
        <UserMenu
          alignSelf="center"
          user={userSession.user}
          items={userSession.items}
        />
      )}
    </Box>
  </Box>
);

const items = [
  {
    active: true,
    label: 'Home',
    path: '/',
    exact: true,
  },
  {
    active: true,
    label: 'Servers',
    path: '/servers',
  },
  {
    active: true,
    label: 'Users',
    path: '/users',
  },
  {
    active: false,
    label: 'Settings',
    path: '/settings',
  },
];

const BaseRoutedButton = ({
  active,
  exact,
  match,
  location,
  history,
  path,
  strict,
  ...rest
}: any) => {
  const handleClick = (event: any) => {
    event.preventDefault();
    history.push(path);
  };

  const pathMatch = matchPath(location.pathname, { exact, path, strict });
  return (
    <Button active={active && !!pathMatch} {...rest} onClick={handleClick} />
  );
};

export const RoutedButton = withRouter(BaseRoutedButton);

export const MenuButton = ({ label, ...rest }: any) => {
  return (
    <RoutedButton hoverIndicator="light-4" {...rest}>
      <Box pad="small" gap="xsmall" justify="center">
        <Text>{label}</Text>
      </Box>
    </RoutedButton>
  );
};

export const Sidebar = ({
  context,
  items = [],
  onToggleSidebar,
  ...rest
}: any) => {
  // const contextType = ResponsiveContext;
  const size = context;
  const SidebarComponent = size === 'small' ? Layer : Box;
  const sidebarProps =
    size === 'small'
      ? { full: true }
      : {
          fill: 'vertical',
          width: 'small',
          background: 'light-2',
          elevation: 'xsmall',
        };
  return (
    <SidebarComponent {...sidebarProps} {...rest}>
      {size === 'small' && (
        <Box align="end">
          <Button icon={<FormClose />} onClick={onToggleSidebar} />
        </Box>
      )}
      {items.map(({ active, exact, label, path }: any) => (
        <MenuButton
          active={active}
          exact={exact}
          path={path}
          label={label}
          key={label}
        />
      ))}
    </SidebarComponent>
  );
};

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
                  <Sidebar
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
App.displayName = 'App';

/*

         <div>
           <Switch>
           </Switch>
         </div>
       </Router>
       */
