import React from 'react';
import { AuthRoutes } from './auth.routes';
import { AppTabRoutes } from './app.tab.routes';
import { useSelector } from 'react-redux';
import { ApplicationState } from '../redux';

export function NestedRoutes() {
  const { user } = useSelector((state: ApplicationState) => state.userReducer);

  return user.email ? <AppTabRoutes /> : <AuthRoutes />;
}
