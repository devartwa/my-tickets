import styled from 'styled-components/native';
import LottieView from 'lottie-react-native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Animation = styled(LottieView)`
  width: 300px;
  height: 300px;
`;
