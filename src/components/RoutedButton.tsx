import * as React from 'react';
import { Button } from 'grommet';

import { matchPath, withRouter } from 'react-router-dom';

const BaseRoutedButton = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  match,
  active,
  exact,
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
