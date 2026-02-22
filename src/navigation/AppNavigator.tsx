import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import OrderScreen from '../screens/OrderScreen';
import DeliveryScreen from '../screens/DeliveryScreen';
import AccountsScreen from '../screens/AccountsScreen';
import ClientScreen from '../screens/ClientScreen';
import SuperAdminScreen from '../screens/SuperAdminScreen';

export type RootStackParamList = {
  Login: undefined;
  Order: undefined;
  Delivery: undefined;
  Accounts: undefined;
  Client: undefined;
  SuperAdmin: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Order" component={OrderScreen} />
        <Stack.Screen name="Delivery" component={DeliveryScreen} />
        <Stack.Screen name="Accounts" component={AccountsScreen} />
        <Stack.Screen name="Client" component={ClientScreen} />
        <Stack.Screen name="SuperAdmin" component={SuperAdminScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
