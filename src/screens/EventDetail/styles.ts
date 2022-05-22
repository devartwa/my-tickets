import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import { Text } from 'react-native';

export const Container = styled.View`
  flex: 1;
  padding: 0 24px;
`;

export const Header = styled.View`
  margin-top: ${getStatusBarHeight() + 25}px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  flex-direction: row;
`;

export const IconHeader = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`;

export const TitleHeader = styled(Text).attrs({
  numberOfLines: 2,
  ellipsizeMode: 'tail',
})`
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${RFValue(18)}px;
`;

export const Content = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-bottom: 100px;
`;

export const ItemContainer = styled.View``;

export const Section = styled.View`
  margin-bottom: 10px;
`;

export const SectionTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${RFValue(14)}px;
  margin-bottom: 5px;
`;

export const SectionContent = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.black};
  font-size: ${RFValue(12)}px;
`;

export const ButtonContainer = styled.View`
  margin-top: 30px;
  margin-bottom: 15px;
`;
