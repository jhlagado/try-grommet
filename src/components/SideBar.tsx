import * as React from 'react';
import { Box, Button, Layer } from 'grommet';
import { FormClose } from 'grommet-icons';
import { MenuButton } from './MenuButton';

export const SideBar = ({
  context,
  items = [],
  onToggleSidebar,
  ...rest
}: any) => {
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
