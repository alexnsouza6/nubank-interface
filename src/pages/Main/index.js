import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container, Content, Card, CardHeader, CardContent, Title, Description, CardFooter, Annotation,
} from './style';

import Header from '~/components/Header';
import Tabs from '~/components/Tabs';
import Menu from '~/components/Menu';

const Main = () => (
  <Container>
    <Header />
    <Content>
      <Menu />
      <Card>
        <CardHeader>
          <Icon name="attach-money" size={28} color="#666" />
          <Icon name="visibility-off" size={28} color="#666" />
        </CardHeader>
        <CardContent>
          <Title>Saldo disponível</Title>
          <Description>R$ 100.000,00</Description>
        </CardContent>
        <CardFooter>
          <Annotation>
            Transferência de R$ 300,00 recebida de Alex Nascimento Souza
          </Annotation>
        </CardFooter>
      </Card>
    </Content>
    <Tabs />
  </Container>
);

export default Main;
