import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text } from 'react-native';
import { View } from '../components/Themed';
import { RootStackScreenProps } from '../types';
import Constants from 'expo-constants';
import { User } from '../components/User';

type peopleScreenProps = {
     route: {
          params: { people: [{ idUser: string; name: string; img?: string }] };
     };
};

export default function PeopleScreen(
     // { navigation }: RootStackScreenProps<'PeopleScreen'>
     { route }: peopleScreenProps
) {
     const { people } = route.params;

     console.log(people);

     return (
          <View style={styles.container}>
               <StatusBar backgroundColor={'#ffff'} />
               <View
                    style={{
                         height: Constants.statusBarHeight,
                         width: '100%',
                         backgroundColor: '#ECECEC',
                    }}
               >
                    {people.map((data) => {
                         return <User name={data.name} img={data.img} />;
                    })}
               </View>
          </View>
     );
}

const styles = StyleSheet.create({
     container: {
          flex: 1,
          alignItems: 'center',
          zIndex: 100,
     },
     separator: {
          marginVertical: 30,
          height: 1,
          width: '80%',
     },
});
