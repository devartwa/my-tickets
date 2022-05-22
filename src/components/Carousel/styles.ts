import { Dimensions } from 'react-native';
import FastImage from 'react-native-fast-image';
import styled from 'styled-components/native';

interface PressableContainerImageProps {
  isActive: boolean;
}

const { width } = Dimensions.get('screen');

export const PressableContainer = styled.Pressable``;

export const PressableContainerImage = styled.Pressable<PressableContainerImageProps>`
  margin-horizontal: 4.5px;
  border-radius: 5px;
  align-items: center;
  border-width: 1px;
  border-color: ${({ isActive, theme }) =>
    isActive ? theme.colors.primary : theme.colors.border};
`;

export const PressableImage = styled(FastImage).attrs({})`
  width: ${width - 40}px;
  height: 300px;
`;

export const ImageContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 35px;
`;

export const ScrollImages = styled.ScrollView``;

export const MiniImages = styled(FastImage).attrs({})`
  width: 48px;
  height: 48px;
  border-radius: 5px;
`;
