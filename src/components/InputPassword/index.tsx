import React, { useState } from 'react';
import { TextInputProps } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { useTheme } from 'styled-components';

import {
  Container,
  IconContainer,
  InputText,
  ShowPasswordButton,
} from './styles';

interface InputProps extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>['name'];
  value?: string;
}

export function InputPassword({ iconName, value, ...rest }: InputProps) {
  const theme = useTheme();

  const [visible, setVisible] = useState(true);
  const [isFilled, setIsFilled] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    setIsFocused(false);
    setIsFilled(!!value);
  };

  function handleShowPassword() {
    setVisible(!visible);
  }

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
        secureTextEntry={visible}
        autoCorrect={false}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />

      <ShowPasswordButton isFocused={isFocused} onPress={handleShowPassword}>
        <Feather
          name={visible ? 'eye' : 'eye-off'}
          size={24}
          color={theme.colors.gray}
        />
      </ShowPasswordButton>
    </Container>
  );
}
