import React, { useState, useEffect, useRef } from 'react';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { Keyboard, StatusBar } from 'react-native';
import { useSelector } from 'react-redux';
import { Events } from '../../@types/eventTypes';
import { TabsParamList } from '../../@types/navigationTypes';
import { EventCard } from '../../components/EventCard';
import { ApplicationState } from '../../redux';

import {
  Container,
  Content,
  EventList,
  Header,
  KeyboardContainer,
  NoEvents,
  NoEventsContainer,
  SearchEvent,
  Title,
} from './styles';

type TicketsNavigationProp = BottomTabNavigationProp<TabsParamList, 'Tickets'>;
type TicketsProps = { navigation: TicketsNavigationProp };

export function Tickets({ navigation }: TicketsProps) {
  const [search, setSearch] = useState('');
  const [data, setData] = useState<Events[]>([]);
  const [, setFilteredData] = useState<Events[]>([]);
  const isMounted = useRef(true);

  const { events } = useSelector(
    (state: ApplicationState) => state.eventsReducer
  );

  const handleEventDetail = (event: Events) => {
    navigation.navigate('AppStackRoutes', {
      screen: 'EventDetail',
      params: { event },
    });
  };

  const handleFilterEvent = () => {
    let filteredEvents = JSON.parse(JSON.stringify(events));

    const resultData = filteredEvents.filter(
      (customData: { name: string; data: string }) => {
        const titleValid = customData.name
          .toLowerCase()
          .includes(search.toLowerCase());
        const dateValid = customData.data
          .toLowerCase()
          .includes(search.toLowerCase());

        if (titleValid || dateValid) {
          return data;
        }
      }
    );
    setData(resultData);
  };

  const handleChangeInputText = (text: string) => {
    if (!text) {
      setData(data);
    }
    setSearch(text);
  };

  const renderItem = ({ item }: { item: Events }) => (
    <EventCard
      customPercentageWidth={100}
      item={item}
      onPress={() => handleEventDetail(item)}
    />
  );

  useEffect(() => {
    setData(events);
    setFilteredData(events);
    return () => {
      isMounted.current = false;
    };
  }, [events, search]);

  return (
    <KeyboardContainer onPress={Keyboard.dismiss}>
      <Container>
        <StatusBar
          barStyle="dark-content"
          translucent
          backgroundColor="transparent"
        />

        <Header>
          <Title>Meus eventos:</Title>
        </Header>

        <Content>
          {events.length > 0 ? (
            <>
              <SearchEvent
                placeholder="Pesquisar evento por nome ou data..."
                onChangeText={handleChangeInputText}
                value={search}
                returnKeyType="search"
                onSubmitEditing={handleFilterEvent}
              />
              <EventList
                data={data}
                keyExtractor={(item: Events) => item.id}
                renderItem={renderItem}
              />
            </>
          ) : (
            <NoEventsContainer>
              <NoEvents>Você não possui nenhum evento.</NoEvents>
            </NoEventsContainer>
          )}
        </Content>
      </Container>
    </KeyboardContainer>
  );
}
