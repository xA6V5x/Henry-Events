/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';

// Screens
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import Home from '../screens/Home';
import Talks from '../screens/Talks';
import Meetings from '../screens/Meetings';
import Favorites from '../screens/Favorites';
import Settings from '../screens/Settings';
//
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import NavBar from '../components/NavBar';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
     return (
          <NavigationContainer
               linking={LinkingConfiguration}
               theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
          >
               {/* <NavBar /> */}
               <RootNavigator />
          </NavigationContainer>
     );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
     return (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
               {/* <Stack.Screen
                    name="Root"
                    component={BottomTabNavigator}
                    options={{ headerShown: false }}
               /> */}
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
                    <Stack.Screen name="Modal" component={ModalScreen} />
               </Stack.Group>
          </Stack.Navigator>
     );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
     const colorScheme = useColorScheme();

     return (
          <BottomTab.Navigator
               initialRouteName="Home"
               screenOptions={{
                    tabBarActiveTintColor: Colors[colorScheme].tint,
                    headerShown: false,
               }}
          >
               <BottomTab.Screen
                    name="Home"
                    component={Home}
                    options={{
                         title: 'Home',
                         tabBarBadge: 10,
                         tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
                    }}
               />
               <BottomTab.Screen
                    name="Talks"
                    component={Talks}
                    options={{
                         title: 'Talks',
                         tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
                    }}
               />
               <BottomTab.Screen
                    name="Meetings"
                    component={Meetings}
                    options={{
                         title: 'Meetings',
                         tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
                    }}
               />
               <BottomTab.Screen
                    name="Favorites"
                    component={Favorites}
                    options={{
                         title: 'Favorites',
                         tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
                    }}
               />
               <BottomTab.Screen
                    name="Settings"
                    component={Settings}
                    options={{
                         title: 'Settings',
                         tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
                    }}
               />
          </BottomTab.Navigator>
     );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
     name: React.ComponentProps<typeof FontAwesome>['name'];
     color: string;
}) {
     return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
