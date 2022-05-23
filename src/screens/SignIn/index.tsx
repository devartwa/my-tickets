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
import { RootNavigationParams } from '../../@types/navigationTypes';

type SignInNavigationProp = StackNavigationProp<RootNavigationParams, 'Root'>;
type SignInProps = { navigation: SignInNavigationProp };

export function SignIn({ navigation }: SignInProps) {
  const theme = useTheme();
  const dispatch = useDispatch();

  const [email, setEmail] = useState('teste@teste.com');
  const [password, setPassword] = useState('123456');
  const [loading, setLoading] = useState(false);

  const handleSignIn = async () => {
    try {
      setLoading(true);
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
      if (email.trim() === 'teste@teste.com' && password.trim() === '123456') {
        return setTimeout(() => {
          setLoading(false);
          dispatch(
            setUser({
              nome: 'Arthur',
              sobrenome: 'Bueno',
              email,
              cpf: '123.456.789-10',
              telefone: '(11) 99999-9999',
            })
          );
          navigation.navigate('Root', { screen: 'AppStackRoutes' });
        }, 2000);
      }
      setLoading(false);
      return Alert.alert(
        'Ops!\nTivemos um imprevisto:',
        'O E-mail e/ou senha fornecidos estão incorretos.'
      );
    } catch (error: any) {
      setLoading(false);
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
              enabled={!loading}
              loading={loading}
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
