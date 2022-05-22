import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface InitialUserProps {
  marginLeft?: number;
}

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};})};
  padding: 0 24px;
`;

export const Header = styled.View`
  margin-top: ${getStatusBarHeight() + 50}px;
  align-items: center;
  align-self: center;
`;

export const CircleUser = styled.View`
  background-color: ${({ theme }) => theme.colors.background};
  width: 100px;
  height: 100px;
  border-radius: 50px;
  border-width: 2px;
  border-color: ${({ theme }) => theme.colors.secondary};
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const InitialUser = styled.Text<InitialUserProps>`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${RFValue(32)}px;
`;

export const Username = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${RFValue(14)}px;
  margin-top: 20px;
`;

export const Content = styled.View`
  flex: 1;
  margin-top: 40px;
`;

export const InfoInputContainer = styled.View`
  margin-bottom: 15px;
`;

export const InfoInputTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${RFValue(10.5)}px;
  margin-bottom: 5px;
`;

export const InfoInput = styled.TextInput`
  width: 100%;
  height: 46px;
  background-color: ${({ theme }) => theme.colors.disabled};
  shadow-color: ${({ theme }) => theme.colors.black};
  shadow-opacity: 0.25;
  shadow-radius: 3.5px;
  shadow-offset: 0px 2.5px;
  elevation: 10;
  padding-horizontal: 10px;
  border-radius: 3px;
`;

export const ButtonContainer = styled.View`
  margin-top: 60px;
`;
