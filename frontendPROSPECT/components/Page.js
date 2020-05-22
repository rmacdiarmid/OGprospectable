import React, { Component } from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import Header from './Header';
import Meta from '../components/Meta';
import CallLog from './CallLog';

const theme = {
    red: '#FF0000',
    black: '#393939',
    grey: '#3a3a3a',
    lightGrey: '#E1E1E1',
    offWhite: '#EDEDED',
    maxWidth: '1000px',
    bs: '0 12px 24px 0 rgba(0,0,0, 0.9)',
};

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'radnika_next';
    src: url('/static/radnikanext-medium-webfont.woff2')
    format('woff2');
    font-weight: normal;
    font-style: normal;
}
@font-face {
   font-family: 'Roboto';
   src: url('/static/Open_Sans_Roboto/Roboto/Roboto-Medium.tff')
   format('tff');
   font-weight: normal;
   font-style: normal;
}
html {
     box-sizing: border-box;
     font-size: 10px;
  }
    *, *:before, *:after {
      box-sizing: inherit;
  }
  body {
      padding: 0;
      margin: 0;
      font-size: 1.5rem;
      line-height: 2;
      font-family: 'radnika_next';
  }
  a {
      text-decoration: none;
      color: ${props => props.theme.black};
  }
`;

const StyledPage = styled.div`
  background: white;
  color: ${props => props.theme.black};
`;

const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
  background: ${props => props.theme.offWhite};
`;

class Page extends Component {
    render() {
        return (
           <ThemeProvider theme={theme}>
              <GlobalStyle />
              <StyledPage>
                <Meta />
                <Header />
                <Inner>{this.props.children} 
                </Inner>
                <CallLog></CallLog>
              </StyledPage>
            </ThemeProvider>
        );
    }
}

export default Page;