import React from 'react';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootNavigationParams } from '../../@types/navigationTypes';
import { Button } from '../../components/Button';
import { ApplicationState } from '../../redux';
import { IUser } from '../../redux/models/userModel';
import { setUser } from '../../redux/reducers/userReducer';

import {
  ButtonContainer,
  CircleUser,
  Container,
  Content,
  Header,
  InfoInput,
  InfoInputContainer,
  InfoInputTitle,
  InitialUser,
  Username,
} from './styles';
import { CommonActions } from '@react-navigation/native';

type ProfileNavigationProp = BottomTabNavigationProp<
  RootNavigationParams,
  'Root'
>;
type ProfileProps = { navigation: ProfileNavigationProp };

export function Profile({ navigation }: ProfileProps) {
  const { user } = useSelector((state: ApplicationState) => state.userReducer);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(setUser({} as IUser));
    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [{ name: 'Root', params: { screen: 'SignIn' } }],
      })
    );
  };

  return (
    <Container>
      <Header>
        <CircleUser>
          <InitialUser>{user.nome.charAt(0)}</InitialUser>
          <InitialUser>{user.sobrenome.charAt(0)}</InitialUser>
        </CircleUser>

        <Username>
          {user.nome} {user.sobrenome}
        </Username>
      </Header>

      <Content>
        <InfoInputContainer>
          <InfoInputTitle>Nome completo:</InfoInputTitle>
          <InfoInput
            defaultValue={`${user.nome} ${user.sobrenome}`}
            editable={false}
          />
        </InfoInputContainer>

        <InfoInputContainer>
          <InfoInputTitle>Email:</InfoInputTitle>
          <InfoInput defaultValue={user.email} editable={false} />
        </InfoInputContainer>

        <InfoInputContainer>
          <InfoInputTitle>CPF:</InfoInputTitle>
          <InfoInput defaultValue={user.cpf} editable={false} />
        </InfoInputContainer>

        <InfoInputContainer>
          <InfoInputTitle>Telefone:</InfoInputTitle>
          <InfoInput defaultValue={user.telefone} editable={false} />
        </InfoInputContainer>

        <ButtonContainer>
          <Button title="Sair do app" onPress={handleSignOut} />
        </ButtonContainer>
      </Content>
    </Container>
  );
}
