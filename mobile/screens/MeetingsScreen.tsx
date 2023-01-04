import { StyleSheet, View } from 'react-native';
import { DatesContainer } from '../components/DatesContainer';
import { RootStackScreenProps } from '../types';

export default function MeetingsScreen({ navigation }: RootStackScreenProps<'Meetings'>) {
     return (
          <View style={styles.container}>
               <DatesContainer
                    nameDivision="Meetings"
                    endpoint="https://henryevent.onrender.com/meeting"
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
