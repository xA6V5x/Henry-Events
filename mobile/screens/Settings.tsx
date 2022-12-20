import Constants from 'expo-constants';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { NavBar } from '../components/NavBar';
// import { Text, View } from '../components/Themed';
import { TitleDivision } from '../components/TitleDivision';
import { RootStackScreenProps } from '../types';

export default function Settings({ navigation }: RootStackScreenProps<'Settings'>) {
     return (
          <View style={styles.container}>
               <NavBar navigation={navigation} nameDivision="Settings" />
               <View style={styles.cards_container}>
                    <View style={{ height: Constants.statusBarHeight }}></View>
                    <TitleDivision title="Settings" />
                    <View style={styles.options_container}>
                         <Pressable
                              // onPress={() => navigation.push('LoginScreen')}
                              style={({ pressed }) => ({
                                   ...styles.option,
                                   opacity: pressed ? 0.5 : 1,
                              })}
                         >
                              <Text style={styles.option_text}>Nick Name</Text>
                         </Pressable>
                         <Pressable
                              // onPress={() => navigation.push('LoginScreen')}
                              style={({ pressed }) => ({
                                   ...styles.option,
                                   opacity: pressed ? 0.5 : 1,
                              })}
                         >
                              <Text style={styles.option_text}>Profile Image</Text>
                         </Pressable>
                         <Pressable
                              // onPress={() => navigation.push('LoginScreen')}
                              style={({ pressed }) => ({
                                   ...styles.option,
                                   opacity: pressed ? 0.5 : 1,
                              })}
                         >
                              <Text style={styles.option_text}>Dark Mode</Text>
                         </Pressable>
                         <Pressable
                              onPress={() => navigation.push('LoginScreen')}
                              style={({ pressed }) => ({
                                   ...styles.option,
                                   opacity: pressed ? 0.5 : 1,
                              })}
                         >
                              <Text style={styles.option_text}>Log Out</Text>
                         </Pressable>
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
     option: { marginBottom: 20 },
     option_text: { fontSize: 20 },
});
