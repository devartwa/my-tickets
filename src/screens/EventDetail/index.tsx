import React from 'react';
import { AppParamList } from '../../@types/navigationTypes';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import Feather from 'react-native-vector-icons/Feather';
import { Carousel } from '../../components/Carousel';
import { useTheme } from 'styled-components';
import { Button } from '../../components/Button';

import {
  ButtonContainer,
  Container,
  Content,
  Header,
  IconHeader,
  Section,
  SectionContent,
  SectionTitle,
  TitleHeader,
} from './styles';

type EventDetailNavigationProp = StackNavigationProp<
  AppParamList,
  'EventDetail'
>;

type EventDetailRouteProp = RouteProp<AppParamList, 'EventDetail'>;
type EventDetailProps = {
  navigation: EventDetailNavigationProp;
  route: EventDetailRouteProp;
};

export function EventDetail({ navigation, route }: EventDetailProps) {
  const { event } = route.params;
  const theme = useTheme();

  const goBack = () => {
    navigation.goBack();
  };

  const handleBuyTicket = () => {};

  return (
    <Container>
      <Header>
        <IconHeader onPress={goBack}>
          <Feather name="arrow-left" size={24} color={theme.colors.primary} />
        </IconHeader>
        <TitleHeader>{event.name}</TitleHeader>
        <IconHeader>
          <Feather name="heart" size={24} color={theme.colors.primary} />
        </IconHeader>
      </Header>

      <Content>
        <Carousel imagesArray={event.photos} />

        <Section>
          <SectionTitle>Descrição:</SectionTitle>
          <SectionContent>{event.description}</SectionContent>
        </Section>

        <Section>
          <SectionTitle>Data:</SectionTitle>
          <SectionContent>{event.data}</SectionContent>
        </Section>

        <Section>
          <SectionTitle>Horario:</SectionTitle>
          <SectionContent>{event.horario}</SectionContent>
        </Section>

        <Section>
          <SectionTitle>Local:</SectionTitle>
          <SectionContent>{event.local}</SectionContent>
        </Section>

        <Section>
          <SectionTitle>Preço:</SectionTitle>
          <SectionContent>{event.price}</SectionContent>
        </Section>

        <ButtonContainer>
          <Button title="Comprar" onPress={handleBuyTicket} />
        </ButtonContainer>
      </Content>
    </Container>
  );
}
