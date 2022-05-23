import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { StatusBar } from 'react-native';
import { AppParamList } from '../../@types/navigationTypes';
import data from '../../services/events.json';

import {
  Container,
  Content,
  EventContainer,
  EventList,
  EventTitle,
  Header,
  Title,
  UserName,
} from './styles';
import { useSelector } from 'react-redux';
import { ApplicationState } from '../../redux';
import { Events } from '../../@types/eventTypes';
import { EventCard } from '../../components/EventCard';

type HomeNavigationProp = StackNavigationProp<AppParamList, 'Home'>;
type HomeProps = { navigation: HomeNavigationProp };

export function Home({ navigation }: HomeProps) {
  const { user } = useSelector((state: ApplicationState) => state.userReducer);

  const handleEventDetail = (event: Events) => {
    navigation.navigate('EventDetail', { event });
  };

  const renderItem = ({ item }: { item: Events }) => (
    <EventCard item={item} onPress={() => handleEventDetail(item)} />
  );

  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />

      <Header>
        <Title>Seja bem vindo(a),</Title>
        <UserName>{user.nome}</UserName>
      </Header>

      <Content showsVerticalScrollIndicator={false}>
        <EventContainer>
          <EventTitle>Universidades:</EventTitle>
          <EventList
            data={data.universities}
            keyExtractor={(item: Events) => item.id}
            renderItem={renderItem}
            horizontal
          />
        </EventContainer>

        <EventContainer>
          <EventTitle>Empresas:</EventTitle>
          <EventList
            data={data.companies}
            keyExtractor={(item: Events) => item.id}
            renderItem={renderItem}
            horizontal
          />
        </EventContainer>

        <EventContainer>
          <EventTitle>Todos os eventos:</EventTitle>
          <EventList
            data={data.allEvents}
            keyExtractor={(item: Events) => item.id}
            renderItem={renderItem}
            horizontal
          />
        </EventContainer>
      </Content>
    </Container>
  );
}
