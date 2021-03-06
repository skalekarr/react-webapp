import React from 'react';
import logo from '../../assets/logo.png';
import AppContainer from '../layout';
// eslint-disable-next-line
import styles from './index.styles.css';

const Page404 = () =>
  <AppContainer>
    <div className="center-aligned">
      <img src={logo} className="img-height" alt="logo" />
      <h4>404 - Not Found</h4>
      <div>Sorry, the page you are looking for does not exist.</div>
      You can always go back to the <a href={'http://localhost:3000/'} style={{ color: '#EA7F28' }}>homepage.</a>
    </div>
  </AppContainer>

export default Page404;
