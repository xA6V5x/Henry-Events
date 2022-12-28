import { StyleSheet, View } from 'react-native';
// import { View } from '../components/Themed';
import { User } from '../components/User';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import { TitleDivision } from '../components/TitleDivision';
import { BackArrow } from '../components/BackArrow';

type peopleScreenProps = {
     navigation: any;
     route: {
          params: { people: { idUser: string; name: string; img?: string }[] };
     };
};

export default function PeopleScreen({ navigation, route }: peopleScreenProps) {
     const { people } = route.params;

     return (
          <SafeAreaView style={styles.scroll_container}>
               <BackArrow navigation={navigation} />
               <ScrollView style={styles.scroll}>
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
     );
}

const styles = StyleSheet.create({
     container: {
          flex: 1,
          zIndex: 100,
          backgroundColor: '#ffff',
     },
     scroll_container: {
          flex: 1,
          backgroundColor: '#ffff',
     },
     scroll: {
          width: '100%',
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
