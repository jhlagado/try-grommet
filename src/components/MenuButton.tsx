import * as React from 'react';
import { Box, Text } from 'grommet';

import { RoutedButton } from './RoutedButton';

export const MenuButton = ({ label, ...rest }: any) => {
  return (
    <RoutedButton hoverIndicator="light-4" {...rest}>
      <Box pad="small" gap="xsmall" justify="center">
        <Text>{label}</Text>
      </Box>
    </RoutedButton>
  );
};
