import * as React from 'react';
import { ScrollToTop } from '../utils';
import { Box } from 'grommet';

export const Info = () => {
  return (
    <>
      <ScrollToTop />
      <Box width="medium">
        <h1>John Hardy</h1>
        <h2>Full-stack developer</h2>
        <div className="info-line">
          Phone: <a href="tel:+61436005419"></a>+61 436 005 419
        </div>
        <div className="info-line">
          Email: <a href="mailto:jh@lagado.com">jh@lagado.com</a>
        </div>
        <div className="info-line">
          GitHub: <a href="https://github.com/jhlagado">jhlagado</a>
        </div>
      </Box>
    </>
  );
};
