/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from '../types';

const linking: LinkingOptions<RootStackParamList> = {
     prefixes: [Linking.createURL('/')],
     config: {
          screens: {
               Login: 'Login',
               Singup: 'Singup',
               Home: 'Home',
               Talks: 'Talks',
               Meetings: 'Meetings',
               Favorites: 'Favorites',
               Settings: 'Settings',
               ModalPost: 'modal',
               People: 'modal',
               CreateEvent: 'CreateEvent',
               NotFound: '*',
          },
     },
};

export default linking;
