import React, { useState } from 'react';
import { Keyboard, KeyboardAvoidingView, StatusBar, Alert } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { InputPassword } from '../../components/InputPassword';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';

import { Container, Footer, Form, Header, SubTitle, Title } from './styles';
import { setUser } from '../../redux/reducers/userReducer';
import { StackNavigationProp } from '@react-navigation/stack';
import { TabsParamList } from '../../@types/navigationTypes';

type SignInNavigationProp = StackNavigationProp<
  TabsParamList,
  'AuthStackRoutes'
>;
type SignInProps = { navigation: SignInNavigationProp };

export function SignIn({ navigation }: SignInProps) {
  const theme = useTheme();
  const dispatch = useDispatch();

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
      if (email === 'teste@teste.com' && password === '123456') {
        dispatch(
          setUser({
            nome: 'Arthur',
            email,
            cpf: '12345678910',
            telefone: '11 99999-9999',
          })
        );

        return navigation.navigate('AppStackRoutes', { screen: 'Home' });
      }
      return Alert.alert(
        'Ops!\nTivemos um imprevisto:',
        'O E-mail e/ou senha fornecidos estão incorretos.'
      );
    } catch (error: any) {
      if (error instanceof Yup.ValidationError) {
        return Alert.alert('Ops!\nTivemos um imprevisto:', error.message);
      }
      return Alert.alert('Ops!\nTivemos um imprevisto:', error.message);
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
