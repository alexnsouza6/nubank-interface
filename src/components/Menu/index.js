import React from 'react';

import QRCode from 'react-native-qrcode';

import { Container, Code } from './style';


const Menu = () => (
  <Container>
    <Code>
      <QRCode
        value="https://rocketseat.com.br"
        size={80}
        bgColor="#FFF"
        fgColor="#8B10AE"
      />
    </Code>
  </Container>
);

export default Menu;
