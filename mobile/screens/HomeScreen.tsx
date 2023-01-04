import { StyleSheet } from 'react-native';
import { DatesContainer } from '../components/DatesContainer';
import { View } from '../components/Themed';
import { RootStackScreenProps } from '../types';

export default function HomeScreen({ navigation }: RootStackScreenProps<'Home'>) {
     return (
          <View style={styles.container}>
               <DatesContainer
                    nameDivision="Home"
                    endpoint="https://henryevent.onrender.com/home"
                    navigation={navigation}
               />
          </View>
     );
}

const styles = StyleSheet.create({
     container: {
          flex: 1,
     },
});
