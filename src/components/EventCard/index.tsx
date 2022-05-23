import React from 'react';
import { Events } from '../../@types/eventTypes';
import {
  ContainerEvent,
  IconEvent,
  ImageEvent,
  InfoContainerEvent,
  InfoContainerEventWrapper,
  InfoContainerIconEvent,
  TextEvent,
} from './styles';

interface Props {
  item: Events;
  customPercentageWidth?: number;
  onPress: () => void;
}

export function EventCard({ item, customPercentageWidth, onPress }: Props) {
  return (
    <ContainerEvent
      width={customPercentageWidth}
      onPress={onPress}
      key={item.id}
    >
      <ImageEvent source={{ uri: item.photos[0] }} />

      <InfoContainerEventWrapper>
        <InfoContainerEvent width={65}>
          <InfoContainerIconEvent>
            <IconEvent name="arrow-right" />
            <TextEvent>{item.name}</TextEvent>
          </InfoContainerIconEvent>
          <InfoContainerIconEvent>
            <IconEvent name="map-pin" />
            <TextEvent>{item.local}</TextEvent>
          </InfoContainerIconEvent>
        </InfoContainerEvent>

        <InfoContainerEvent width={35}>
          <InfoContainerIconEvent>
            <IconEvent name="calendar" />
            <TextEvent>{item.data}</TextEvent>
          </InfoContainerIconEvent>
          <InfoContainerIconEvent>
            <IconEvent name="clock" />
            <TextEvent>{item.horario}</TextEvent>
          </InfoContainerIconEvent>
        </InfoContainerEvent>
      </InfoContainerEventWrapper>
    </ContainerEvent>
  );
}
