import { Pressable, StyleSheet } from 'react-native';
import { NavBar } from '../components/NavBar';
import { Text, View } from '../components/Themed';
import { TitleDivision } from '../components/TitleDivision';
import { RootStackScreenProps } from '../types';

export default function Settings({ navigation }: RootStackScreenProps<'Settings'>) {
     const options = ['Nick Name', 'Profile Image', 'Dark Mood', 'Log Out'];

     return (
          <View style={styles.container}>
               <NavBar navigation={navigation} nameDivision="Settings" />
               <View style={styles.cards_container}>
                    <TitleDivision title="Settings" />
                    <View style={styles.options_container}>
                         {options.map((data) => {
                              return (
                                   <Pressable
                                        key={data}
                                        style={({ pressed }) => ({
                                             ...styles.option,
                                             opacity: pressed ? 0.5 : 1,
                                        })}
                                   >
                                        <Text style={styles.option_text}>{data}</Text>
                                   </Pressable>
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
