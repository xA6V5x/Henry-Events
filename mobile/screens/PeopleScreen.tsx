import { StatusBar } from 'expo-status-bar';
import { Image, Pressable, StyleSheet, Text } from 'react-native';
import { View } from '../components/Themed';
import { RootStackScreenProps } from '../types';
import Constants from 'expo-constants';
import { User } from '../components/User';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import { TitleDivision } from '../components/TitleDivision';

type peopleScreenProps = {
     navigation: any;
     route: {
          params: { people: [{ idUser: string; name: string; img?: string }] };
     };
};

export default function PeopleScreen(
     // { navigation }: RootStackScreenProps<'PeopleScreen'>
     { navigation, route }: peopleScreenProps
) {
     // const { people } = route.params;

     const people = [
          { idUser: 'asdaasgdsd', name: 'Juan', img: '' },
          { idUser: 'asdasgd', name: 'Dormir' },
          { idUser: 'asdgagsasd', name: 'Pan' },
          { idUser: 'asdaasdsd', name: 'Hori' },
          { idUser: 'asdaagsdsd', name: 'Mary' },
          { idUser: 'asdagFsd', name: 'Uli' },
          { idUser: 'asdaASsgqd', name: 'Pablo' },
     ];

     return (
          <View style={styles.container}>
               <SafeAreaView style={styles.scroll_container}>
                    <ScrollView style={styles.scroll}>
                         <StatusBar backgroundColor={'#ffff'} />
                         <Pressable
                              onPress={() => navigation.goBack()}
                              style={styles.back_container}
                         >
                              <Image
                                   source={require('../assets/back.png')}
                                   style={styles.back_img}
                              />
                         </Pressable>
                         <TitleDivision title="People" />
                         {people.map((data) => {
                              return (
                                   <View key={data.idUser} style={styles.user}>
                                        <User name={data.name} img={data.img ? data.img : ''} />
                                   </View>
                              );
                         })}
                    </ScrollView>
               </SafeAreaView>
          </View>
     );
}

const styles = StyleSheet.create({
     container: {
          flex: 1,
          zIndex: 100,
     },
     scroll_container: {
          flex: 1,
     },
     scroll: {
          width: '100%',
     },
     // ----------
     back_container: { position: 'absolute', top: 5, left: 10, zIndex: 100 },
     back_img: {
          width: 30,
          height: 30,
     },
     // ----------
     user: {
          margin: 1,
          padding: 10,
          paddingLeft: 30,
          justifyContent: 'center',
          backgroundColor: '#ECECEC',
     },
     separator: {
          marginVertical: 30,
          height: 1,
          width: '80%',
     },
});
