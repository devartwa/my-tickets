import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Events } from '../../@types/eventTypes';
import { TabsParamList } from '../../@types/navigationTypes';
import { Button } from '../../components/Button';
import { ApplicationState } from '../../redux';
import { IUser } from '../../redux/models/userModel';
import { setEvents } from '../../redux/reducers/eventsReducer';
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

type ProfileNavigationProp = StackNavigationProp<TabsParamList, 'Profile'>;
type ProfileProps = { navigation: ProfileNavigationProp };

export function Profile({ navigation }: ProfileProps) {
  const { user } = useSelector((state: ApplicationState) => state.userReducer);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(setUser({} as IUser));
    dispatch(setEvents({} as Events));
    navigation.navigate('AuthStackRoutes', { screen: 'SignIn' });
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
