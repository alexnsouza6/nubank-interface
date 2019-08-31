import React from 'react';

import QRCode from 'react-native-qrcode';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container, Code, Nav, NavItem, NavText, SignOutButton, SignOutButtonText,
} from './style';


const Menu = ({ translateY }) => (
  <Container style={{
    opacity: translateY.interpolate({
      inputRange: [0, 300],
      outputRange: [0, 1],
    }),
  }}
  >
    <Code>
      <QRCode
        value="https://rocketseat.com.br"
        size={100}
        fgColor="#FFF"
        bgColor="#8B10AE"
      />
    </Code>
    <Nav>
      <NavItem>
        <Icon name="help-outline" size={20} color="#FFF" />
        <NavText>Me ajuda</NavText>
      </NavItem>
      <NavItem>
        <Icon name="help-outline" size={20} color="#FFF" />
        <NavText>Perfil</NavText>
      </NavItem>
      <NavItem>
        <Icon name="credit-card" size={20} color="#FFF" />
        <NavText>Configurar Cartão</NavText>
      </NavItem>
      <NavItem>
        <Icon name="smartphone" size={20} color="#FFF" />
        <NavText>Configurações do App</NavText>
      </NavItem>
    </Nav>

    <SignOutButton onPress={() => {}}>
      <SignOutButtonText>SAIR DO APP</SignOutButtonText>
    </SignOutButton>
  </Container>
);

export default Menu;
