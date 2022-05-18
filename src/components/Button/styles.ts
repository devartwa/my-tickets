/* eslint-disable no-shadow */
import { Platform } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import theme from '../../global/styles/theme';

interface ButtonProps {
  color: string;
  light?: boolean;
}

interface ButtonTextProps {
  light?: boolean;
}

export const Container = styled(RectButton)<ButtonProps>`
  width: 100%;
  padding: 19px;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
  background-color: ${({ color }) => color};
  border-width: ${({ light }) => (light ? 2 : 0)}px;
  border-color: ${({ theme, light }) =>
    light ? theme.colors.secondary : 'transparent'};
  border-style: solid;
  border-radius: ${({ light }) =>
    Platform.OS === 'android' && light ? 0.1 : 0}px;
`;

export const Title = styled.Text<ButtonTextProps>`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(15)}px;
  color: ${({ theme, light }) =>
    light ? theme.colors.secondary : theme.colors.white};
`;

export const Loading = styled.ActivityIndicator.attrs({
  size: 'small',
  color: theme.colors.white,
})``;
