import React from 'react';
import {
  shallow
} from 'enzyme';
import Header from '../header';
import Footer from '../footer';
import Container from 'react-bootstrap/Container';
import Layout from './index.jsx'

it('Layout', () => {
  const wrapper = shallow(<Layout />);
  expect(wrapper.find(Header).length).toEqual(1);
  expect(wrapper.find(Footer).length).toEqual(1);
  expect(wrapper.find(Container).length).toEqual(1);
});