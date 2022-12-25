/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';

// Screens
import NotFoundScreen from '../screens/NotFoundScreen';
import Home from '../screens/HomeScreen';
import Talks from '../screens/TalksScreen';
import Meetings from '../screens/MeetingsScreen';
import Favorites from '../screens/FavoritesScreen';
import Settings from '../screens/SettingsScreen';
//
import { RootStackParamList } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import PeopleScreen from '../screens/PeopleScreen';
import LoginScreen from '../screens/LoginScreen';
import SingupScreen from '../screens/SingupScreen';
import ModalPostScreen from '../screens/ModalPostScreen';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
     return (
          <NavigationContainer
               linking={LinkingConfiguration}
               theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
          >
               <RootNavigator />
          </NavigationContainer>
     );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
     return (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
               <Stack.Screen
                    name="LoginScreen"
                    component={LoginScreen}
                    options={{ headerShown: false, animation: 'none' }}
               />
               <Stack.Screen
                    name="SingupScreen"
                    component={SingupScreen}
                    options={{ headerShown: false }}
               />
               <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{ headerShown: false, animation: 'none' }}
               />
               <Stack.Screen
                    name="Talks"
                    component={Talks}
                    options={{ headerShown: false, animation: 'none' }}
               />
               <Stack.Screen
                    name="Meetings"
                    component={Meetings}
                    options={{ headerShown: false, animation: 'none' }}
               />
               <Stack.Screen
                    name="Favorites"
                    component={Favorites}
                    options={{ headerShown: false, animation: 'none' }}
               />
               <Stack.Screen
                    name="Settings"
                    component={Settings}
                    options={{ headerShown: false, animation: 'none' }}
               />
               <Stack.Screen
                    name="NotFound"
                    component={NotFoundScreen}
                    options={{ title: 'Oops!' }}
               />
               <Stack.Group
                    screenOptions={{ presentation: 'modal', animation: 'slide_from_bottom' }}
               >
                    <Stack.Screen name="ModalPost" component={ModalPostScreen} />
               </Stack.Group>
               <Stack.Group
                    screenOptions={{ presentation: 'modal', animation: 'slide_from_right' }}
               >
                    <Stack.Screen name="PeopleScreen" component={PeopleScreen} />
               </Stack.Group>
          </Stack.Navigator>
     );
}
