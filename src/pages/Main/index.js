import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Animated } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';

import {
  Container, Content, Card, CardHeader, CardContent, Title, Description, CardFooter, Annotation,
} from './style';

import Header from '~/components/Header';
import Tabs from '~/components/Tabs';
import Menu from '~/components/Menu';

const Main = () => {
  const translateY = new Animated.Value(0);

  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        },
      },
    ],
    { useNativeDriver: true },
  );


  onHandlerStateChange = (e) => {
    if (e.nativeEvent.oldState === State.ACTIVE) {
      let opened = false;
      const offset = 0;
      const { translationY } = e.nativeEvent;


      offset += translationY;

      if (translationY >= 100) {
        opened = true;
      }

      Animated.timing(translateY, {
        toValue: 400,
        duration: 200,
        useNativeDriver: true,
      });
    }
  };

  return (
    <Container>
      <Header />
      <Content>
        <Menu translateY={translateY} />
        <PanGestureHandler
          onGestureEvent={animatedEvent}
          onHandlerStateChange={onHandlerStateChange}
        >
          <Card style={{
            transform: [{
              translateY: translateY.interpolate({
                inputRange: [-350, 0, 400],
                outputRange: [-50, 0, 400],
                extrapolate: 'clamp',
              }),
            }],
          }}
          >
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
        </PanGestureHandler>
      </Content>
      <Tabs translateY={translateY} />
    </Container>
  );
};
export default Main;
