import React from 'react';
import { AppParamList } from '../../@types/navigationTypes';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import Feather from 'react-native-vector-icons/Feather';
import { Carousel } from '../../components/Carousel';
import { useTheme } from 'styled-components';
import { Button } from '../../components/Button';
import { useSelector } from 'react-redux';
import { ApplicationState } from '../../redux';
import { useDispatch } from 'react-redux';
import { setEvents } from '../../redux/reducers/eventsReducer';
import { Alert } from 'react-native';

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
  const dispatch = useDispatch();

  const { events } = useSelector(
    (state: ApplicationState) => state.eventsReducer
  );

  const goBack = () => {
    navigation.goBack();
  };

  const handleBuyTicket = () => {
    if (events.length > 0) {
      const resultFilter = events.filter(
        (eventItem) => eventItem.name === event.name
      );
      if (resultFilter.length > 0) {
        return Alert.alert(
          'Ops!\nTivemos um imprevisto:',
          `O evento: ${event.name} permite apenas 1 ingresso por pessoa.`,
          [{ text: 'OK' }]
        );
      }
    }
    Alert.alert('Sucesso', 'Compra realizada com sucesso!');
    return dispatch(setEvents(event));
  };

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
