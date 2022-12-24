import Constants from 'expo-constants';
import { StyleSheet, View } from 'react-native';
import { NavBar } from '../components/NavBar';
import { SettingsOptions } from '../components/SettingsOptions';
// import { Text, View } from '../components/Themed';
import { TitleDivision } from '../components/TitleDivision';
import { RootStackScreenProps } from '../types';
import Options from '../constants/SettingsOptions';

export default function SettingsScreen({ navigation }: RootStackScreenProps<'Settings'>) {
     return (
          <View style={styles.container}>
               <NavBar navigation={navigation} nameDivision="Settings" />
               <View style={styles.cards_container}>
                    <View style={{ height: Constants.statusBarHeight }}></View>
                    <TitleDivision title="Settings" />
                    <View style={styles.options_container}>
                         {Options.map((option) => {
                              return (
                                   <SettingsOptions
                                        navigation={navigation}
                                        goTo={option.goTo}
                                        name={option.name}
                                   />
                              );
                         })}
                    </View>
               </View>
          </View>
     );
}

const styles = StyleSheet.create({
     container: {
          flex: 1,
          flexDirection: 'row',
          backgroundColor: '#ffff',
     },
     cards_container: {
          flex: 1,
          alignItems: 'center',
     },
     options_container: {
          position: 'relative',
          top: '2%',
          right: '22%',
     },
});
