import React, { useState } from 'react';
import { Keyboard, KeyboardAvoidingView, StatusBar, Alert } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { InputPassword } from '../../components/InputPassword';
import * as Yup from 'yup';

import { Container, Footer, Form, Header, SubTitle, Title } from './styles';

export function SignIn() {
  const theme = useTheme();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    try {
      const schema = Yup.object().shape({
        password: Yup.string()
          .min(6, 'A senha deve ter no mínimo 6 caracteres.')
          .required(
            'Para acessar o aplicativo, é necessário informar a sua senha'
          ),
        email: Yup.string()
          .required(
            'Para acessar o aplicativo, é necessário informar o seu e-mail.'
          )
          .email('Por favor, digite um e-mail válido'),
      });
      await schema.validate({ email, password });
      return Alert.alert('Valido');
    } catch (error: any) {
      if (error instanceof Yup.ValidationError) {
        return Alert.alert('Ops! Tivemos um problema:', error.message);
      }
      return Alert.alert('Ops! Tivemos um problema:', error.message);
    }
  };

  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={-200}
      behavior="position"
      enabled
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <StatusBar
            barStyle="light-content"
            translucent
            backgroundColor="transparent"
          />
          <Header>
            <Title>mytickets</Title>
            <SubTitle>Online, simples{'\n'}e prático!</SubTitle>
          </Header>

          <Form>
            <Input
              iconName="mail"
              placeholder="E-mail"
              keyboardType="email-address"
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={setEmail}
              value={email}
            />

            <InputPassword
              iconName="lock"
              placeholder="Senha"
              onChangeText={setPassword}
              value={password}
            />
          </Form>

          <Footer>
            <Button
              title="Entrar"
              onPress={handleSignIn}
              enabled={true}
              loading={false}
            />
            <Button
              title="Criar conta gratuita"
              onPress={() => {}}
              enabled={true}
              loading={false}
              color={theme.colors.primary}
              light
            />
          </Footer>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
