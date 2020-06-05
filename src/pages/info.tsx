import * as React from 'react';
import styled from 'styled-components';
import { Stylable } from '../types';
import { ScrollToTop } from '../utils';

const BaseInfo = ({ className }: Stylable) => {
  return (
    <div className={`${className} info`}>
      <ScrollToTop />
      <div className="header">
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
      </div>
    </div>
  );
};

export const Info = styled(BaseInfo)`
  .header {
    padding-bottom: 40rem;
  }

  .info-line {
    margin-bottom: 1rem;
  }
`;

Info.displayName = 'Info';
