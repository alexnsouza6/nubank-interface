import React from 'react';

import {
  Container,
} from './style';

import Header from '~/components/Header';
import Tabs from '~/components/Tabs';

const Main = () => (
  <Container>
    <Header />
    <Tabs />
  </Container>
);

export default Main;
