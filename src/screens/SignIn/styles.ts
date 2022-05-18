import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.ScrollView`
  padding: 0 24px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Header = styled.View`
  width: 100%;
  margin-top: ${getStatusBarHeight() + 115}px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(40)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.secondary};
`;

export const SubTitle = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.white};
  line-height: ${RFValue(25)}px;
  margin-top: 16px;
`;

export const Form = styled.View`
  width: 100%;
  margin-top: 128px;
  margin-bottom: 24px;
`;

export const Footer = styled.View``;
