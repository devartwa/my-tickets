import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import { FlatList, FlatListProps } from 'react-native';
import { Events } from '../../@types/eventTypes';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};})};
  padding: 0 24px;
`;

export const Header = styled.View`
  margin-top: ${getStatusBarHeight() + 30}px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${RFValue(16)}px;
`;

export const UserName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${RFValue(20)}px;
`;

export const Content = styled.ScrollView`
  margin-top: 30px;
  margin-bottom: 110px;
`;

export const EventContainer = styled.View`
  margin-bottom: 24px;
`;

export const EventTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${RFValue(16)}px;
  margin-bottom: 15px;
`;

export const EventList = styled(
  FlatList as new (props: FlatListProps<Events>) => FlatList<Events>
).attrs({
  showsHorizontalScrollIndicator: false,
})``;
