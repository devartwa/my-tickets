import styled from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';
import { Text } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import FastImage from 'react-native-fast-image';

interface InfoContainerEventProps {
  width?: number;
}

export const ContainerEvent = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  width: 320px;
  margin-right: 24px;
  shadow-color: ${({ theme }) => theme.colors.black};
  shadow-opacity: 0.25;
  shadow-radius: 3.5px;
  shadow-offset: 0px 2.5px;
  elevation: 10;
`;

export const ImageEvent = styled(FastImage)`
  width: 100%;
  height: 140px;
  border-radius: 8px;
`;

export const InfoContainerEventWrapper = styled.View`
  flex-direction: row;
  padding-horizontal: 10px;
`;

export const InfoContainerEvent = styled.View<InfoContainerEventProps>`
  width: ${({ width }) => width}%;
`;

export const InfoContainerIconEvent = styled.View`
  flex-direction: row;
  align-items: center;
  margin-vertical: 5px;
`;

export const IconEvent = styled(Feather).attrs({
  size: 18,
})`
  color: ${({ theme }) => theme.colors.secondary};
  margin-right: 5px;
`;

export const TextEvent = styled(Text).attrs({
  numberOfLines: 1,
  ellipsizeMode: 'tail',
})`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(12)}px;
  width: 80%;
`;
