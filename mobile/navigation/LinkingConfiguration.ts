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
               Root: {
                    screens: {
                         Home: {
                              screens: {
                                   TabOneScreen: 'one',
                              },
                         },
                         Talks: {
                              screens: {
                                   TabThreeScreen: 'three',
                              },
                         },
                         Meetings: {
                              screens: {
                                   TabTwoScreen: 'two',
                              },
                         },
                         Favorites: {
                              screens: {
                                   TabFourScreen: 'four',
                              },
                         },
                         Settings: {
                              screens: {
                                   TabFiveScreen: 'three',
                              },
                         },
                    },
               },
               Home: 'home',
               Talks: 'talks',
               Meetings: 'meetings',
               Favorites: 'favorites',
               Settings: 'settings',

               Modal: 'modal',
               NotFound: '*',
          },
     },
};

export default linking;
