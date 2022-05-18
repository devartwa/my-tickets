import React, { useState } from 'react';
import { TextInputProps } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { useTheme } from 'styled-components';

import { Container, IconContainer, InputText } from './styles';

interface InputProps extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>['name'];
  value?: string;
}

export function Input({ iconName, value, ...rest }: InputProps) {
  const theme = useTheme();
  const [isFilled, setIsFilled] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    setIsFocused(false);
    setIsFilled(!!value);
  };

  return (
    <Container>
      <IconContainer isFocused={isFocused}>
        <Feather
          name={iconName}
          size={24}
          color={
            isFocused || isFilled ? theme.colors.secondary : theme.colors.gray
          }
        />
      </IconContainer>
      <InputText
        {...rest}
        isFocused={isFocused}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />
    </Container>
  );
}
