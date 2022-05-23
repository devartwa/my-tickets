import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import { FlatList, FlatListProps } from 'react-native';
import { Events } from '../../@types/eventTypes';

export const KeyboardContainer = styled.TouchableWithoutFeedback`
  flex: 1;
`;

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

export const Content = styled.View`
  flex: 1;
  margin-top: 30px;
  margin-bottom: 110px;
`;

export const EventList = styled(
  FlatList as new (props: FlatListProps<Events>) => FlatList<Events>
).attrs({
  showsVerticalScrollIndicator: false,
})``;

export const SearchEvent = styled.TextInput`
  width: 100%;
  height: 46px;
  background-color: ${({ theme }) => theme.colors.white};
  shadow-color: ${({ theme }) => theme.colors.black};
  shadow-opacity: 0.25;
  shadow-radius: 3.5px;
  shadow-offset: 0px 2.5px;
  elevation: 10;
  padding-horizontal: 10px;
  border-radius: 3px;
  margin-bottom: 30px;
`;

export const NoEventsContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const NoEvents = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.gray};
  font-size: ${RFValue(12)}px;
`;
