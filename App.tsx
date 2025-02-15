import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import LandingScreen from './screens/LandingScreen';
import HomeScreen from './screens/HomeScreen';
import ScanQRScreen from './screens/ScanQRScreen';
import PayPhoneScreen from './screens/PayPhoneScreen';
import PayContactsScreen from './screens/PayContactsScreen';
import BankTransferScreen from './screens/BankTransferScreen';
import CheckBalanceScreen from './screens/CheckBalanceScreen';
import AssistanceScreen from './screens/AssistanceScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#4169E1',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen 
          name="Landing" 
          component={LandingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="MainTabs" 
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="ScanQR" component={ScanQRScreen} />
        <Stack.Screen name="PayPhone" component={PayPhoneScreen} />
        <Stack.Screen name="PayContacts" component={PayContactsScreen} />
        <Stack.Screen name="BankTransfer" component={BankTransferScreen} />
        <Stack.Screen name="CheckBalance" component={CheckBalanceScreen} />
        <Stack.Screen name="Assistance" component={AssistanceScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
} 