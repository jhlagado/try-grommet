import * as React from 'react';
import { Text, Menu, Avatar } from 'grommet';

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
    label={<Avatar src={user.thumbnail} />}
    {...rest}
  />
);
