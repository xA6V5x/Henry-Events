import { Pressable, StyleSheet } from 'react-native';
import NavBar from '../components/NavBar';
import { Text, View } from '../components/Themed';

export default function Settings() {
     const options = ['Nick Name', 'Profile Image', 'Dark Mood', 'Log Out'];

     return (
          <View style={styles.container}>
               <NavBar />
               <View style={styles.cards_container}>
                    <Text style={styles.title}>Settings</Text>
                    <View style={styles.options_container}>
                         {options.map((data) => {
                              return (
                                   <Pressable
                                        style={({ pressed }) => ({
                                             opacity: pressed ? 0.5 : 1,
                                        })}
                                   >
                                        <Text style={styles.option}>{data}</Text>
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
     title: {
          margin: 30,
          marginBottom: 23,
          fontSize: 28,
          fontWeight: 'bold',
     },
     options_container: {
          position: 'relative',
          top: '2%',
          right: '20%',
     },
     option: { marginBottom: 20, fontSize: 20 },
});
